import { useEffect } from "react";
import { subscribeToOrders } from "./firebase/subscribeToOrder";
import { getOrderWithLatestDate } from "./orders/store/ordersSlice";
import { fetchProducts } from "./products/store/productStore";
import { useAppDispatch, useAppSelector } from "./store/hooks";

export function useApp() {
    const dispatch = useAppDispatch();
    const latestOrder = useAppSelector(getOrderWithLatestDate);

    useEffect(() => {
        dispatch(fetchProducts()); 
        subscribeToOrders(dispatch);
    }, []);

    return { latestOrder };
}
