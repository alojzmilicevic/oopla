import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getUser, loginSuccess, logoutSuccess } from "./auth/store/authSlice";
import { auth } from "./firebase/firebase";
import { subscribeToOrders } from "./firebase/subscribeToOrder";
import { fetchProducts } from "./products/store/productStore";
import { useAppDispatch, useAppSelector } from "./store/hooks";

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
