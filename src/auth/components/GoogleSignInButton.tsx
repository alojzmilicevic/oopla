import { Box, Button, styled, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getError, loginSuccess, setError } from "../store/authSlice";

const Wrapper = styled(Box)`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const GoogleSignInButton = () => {
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

    return (
        <Wrapper>
            <Button
                variant="contained"
                startIcon={
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google Logo"
                        style={{ width: 20, height: 20 }}
                    />
                }
                sx={{
                    backgroundColor: "#ffffff",
                    color: "#000",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "8px 20px",
                    width: 280,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                onClick={signInWithGoogle}
            >
                Sign in with Google
            </Button>
            <Typography color="error" fontSize={16} minHeight={24}>
                {error}
            </Typography>
        </Wrapper>
    );
};
