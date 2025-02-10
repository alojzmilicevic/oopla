import { initializeApp } from "firebase-admin/app";
import { firestore } from "firebase-functions/v2";
import { getFirestore, Timestamp } from 'firebase-admin/firestore'; 

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
        console.log(`Order ${orderId} marked as completed. Scheduling deletion...`);
  
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