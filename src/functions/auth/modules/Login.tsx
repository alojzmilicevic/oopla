import { Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GoogleSignInButton } from "../components/GoogleSignInButton/GoogleSignInButton";
import { StyledBox } from "../components/StyledBox";
import { StyledImage } from "../components/StyledImage";
import { imageBreakpoints, Images } from "../constants";

export const Login = () => {
    const matches = imageBreakpoints.map((bp) => ({
        ...bp,
        matches: useMediaQuery(`(min-width:${bp.minWidth}px)`),
    }));
    const matchedImage =
        matches.find((bp) => bp.matches)?.image || Images.SMALL;

    return (
        <Stack>
            <StyledBox>
                <StyledImage src={matchedImage} alt="Splash" />
            </StyledBox>

            <GoogleSignInButton />
        </Stack>
    );
};
