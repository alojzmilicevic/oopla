import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; 
import { OrderItemDto } from "../functions/orders/interface/interface";

export async function createOrder(items: OrderItemDto[]): Promise<void> {
    try {
        const ordersCollection = collection(db, "orders");
        await addDoc(ordersCollection, { items });
    } catch (error) {
        console.error("Error creating order:", error);
    }
}
