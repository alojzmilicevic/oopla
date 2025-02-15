import { initializeApp } from "firebase-admin/app";
import { firestore } from "firebase-functions/v2";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { beforeUserCreated, HttpsError } from "firebase-functions/v2/identity";

initializeApp();

type OrderItem = {
    name: string;
    quantity: number;
};

interface Order {
    createdTime: Timestamp;
    items: OrderItem[];
    status?: string;
    id?: string;
}

const db = getFirestore();

export const onCreateOrder = firestore.onDocumentCreated(
    { document: "orders/{orderId}", region: "europe-north1" },
    async (event) => {
        const snapshot = event.data;
        if (!snapshot) {
            console.log("No data associated with the event");
            return;
        }

        const data = snapshot.data();

        const order: Order = {
            createdTime: Timestamp.now(),
            items: data.items,
            status: "pending",
            id: snapshot.id,
        };

        return await snapshot.ref.set(order);
    }
);

export const deleteOrderOnCompleted = firestore.onDocumentUpdated(
    "orders/{orderId}",
    async (event) => {
        const beforeStatus = event.data?.before?.get("status");
        const afterStatus = event.data?.after?.get("status");

        // Ensure the status changed to "completed"
        if (beforeStatus !== "completed" && afterStatus === "completed") {
            const orderId = event.params.orderId;
            console.log(
                `Order ${orderId} marked as completed. Scheduling deletion...`
            );

            // Wait for 1 minute before deleting
            await new Promise((resolve) => setTimeout(resolve, 60000));

            try {
                // Delete the document
                await db.collection("orders").doc(orderId).delete();
                console.log(`Order ${orderId} deleted after 1 minute.`);
            } catch (error) {
                console.error(`Error deleting order ${orderId}:`, error);
            }
        }
    }
);

export const beforeUserIsCreated = beforeUserCreated(async (event) => {
    const user = event.data;

    if (!user?.email) {
        throw new HttpsError("invalid-argument", "User email is required.");
    }

    try {
        // ✅ Correct way to fetch a single document in Firestore (Firebase Admin SDK)
        const docRef = db.collection("config").doc("email-whitelist");
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            console.warn("No whitelist found. Blocking all new users.");
            throw new HttpsError("permission-denied", "No email whitelist found.");
        }

        // ✅ Extract the email list from Firestore
        const allowedEmails: string[] = docSnap.data()?.emails || [];

        // 🔍 Check if user's email is in the whitelist
        if (!allowedEmails.includes(user.email)) {
            throw new HttpsError("permission-denied", "Your email is not allowed.");
        }

        return user; // ✅ Allow user creation if email is whitelisted
    } catch (error) {
        console.error("Error fetching whitelist:", error);
        throw new HttpsError("internal", "Error checking email whitelist.");
    }
});
