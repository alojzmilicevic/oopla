import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getError, loginSuccess, setError } from "../../store/authSlice";
import { auth } from "../../../../firebase/firebase";

type UseGoogleSignInButton = {
    error: string;
    signInWithGoogle: () => void;
};

export function useGoogleSignInButton(): UseGoogleSignInButton {
    const dispatch = useAppDispatch();
    const error = useAppSelector(getError);
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            dispatch(loginSuccess(result.user));
        } catch (error: any) {
            dispatch(setError("Invalid email"));
        }
    };

    return { error, signInWithGoogle };
}
