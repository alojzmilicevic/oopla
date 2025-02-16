import { Dispatch } from "@reduxjs/toolkit";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "./firebase";
import { Order } from "../functions/orders/interface/interface";
import { updateOrders } from "../functions/orders/store/ordersSlice";

export const subscribeToOrders = (dispatch: Dispatch) => {
    const ordersCollection = collection(db, "orders");

    const unsubscribe = onSnapshot(ordersCollection, (snapshot) => {
        const orders: Order[] = snapshot.docs.map((doc) => {
            const data = doc.data() as Order;

            return {
                ...data,
                id: doc.id,
                createdTime:
                    data.createdTime instanceof Timestamp
                        ? data.createdTime.toDate().toISOString()
                        : data.createdTime,
            };
        });

        if (orders.some((order) => !order.createdTime)) {
            return;
        }
        
        // Dispatch serializable data to Redux
        dispatch(updateOrders(orders));
    });

    return unsubscribe;
};
