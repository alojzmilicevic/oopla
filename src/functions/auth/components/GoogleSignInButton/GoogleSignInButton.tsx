import { Box, Button, styled, Typography } from "@mui/material";
import { GoogleIcon } from "./GoogleIcon";
import { useGoogleSignInButton } from "./useGoogleSignInButton";

const Wrapper = styled(Box)`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledButton = styled(Button)`
    background-color: #ffffff;
    color: #000;
    text-transform: none;
    font-weight: bold;
    padding: 8px 20px;
    width: 280px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const GoogleSignInButton = () => {
    const { error, signInWithGoogle } = useGoogleSignInButton();

    return (
        <Wrapper>
            <StyledButton
                variant="contained"
                startIcon={<GoogleIcon />}
                onClick={signInWithGoogle}
            >
                Sign in with Google
            </StyledButton>
            <Typography color="error" fontSize={16} minHeight={24}>
                {error}
            </Typography>
        </Wrapper>
    );
};
