import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const StyledAppBar = styled(AppBar)`
    user-select: none;
    background-color: ${(props) => props.theme.palette.secondary.main};
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: none;
    color: ${(props) => props.theme.palette.primary.main};
`;

export const Navbar = () => (
    <StyledAppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
                variant="h5"
                fontWeight={800}
                lineHeight={1.25}
                textAlign={"center"}
                margin={0}
            >
                Oopla
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    signOut(auth);
                }}
            >
                Log out
            </Button>
        </Toolbar>
    </StyledAppBar>
);
