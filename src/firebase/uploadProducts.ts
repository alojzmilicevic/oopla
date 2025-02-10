import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import products from "../mock/product.mock.json";
import { db } from "./firebase";

export async function uploadProductsToFb() {
    try {
        const docRef = doc(db, "config", "products"); // Firestore doc reference

        // Convert array to object map
        const productMap = products.reduce((acc, product) => {
            acc[product.id] = { ...product }; // Store each product directly as a field
            return acc;
        }, {} as Record<string, any>);

        await setDoc(docRef, productMap); // ✅ Save products directly as fields
        console.log("Products list saved successfully!");
    } catch (error) {
        console.error("Error saving products list to Firestore:", error);
    }
}

export async function uploadToNewCollection() {
    try {
        const colRef = collection(db, "products"); // ✅ Firestore "products" collection reference

        // Loop through each product and add it as a document in Firestore
        for (const product of products) {
            const docRef = await addDoc(colRef, product); // ✅ Auto-generates an ID
            console.log(`Product added with ID: ${docRef.id}`);
        }

        console.log("All products uploaded successfully!");
    } catch (error) {
        console.error("Error uploading products list to Firestore:", error);
    }
}
