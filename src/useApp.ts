import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import { subscribeToOrders } from "./firebase/subscribeToOrder";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchProducts } from "./functions/products/store/productStore";
import { getUser, loginSuccess, logoutSuccess } from "./functions/auth/store/authSlice";

export function useApp() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchProducts());
        subscribeToOrders(dispatch);
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(loginSuccess({
                        uid: user.uid,
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                }));
            } else {
                dispatch(logoutSuccess());
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return { user, loading };
}
