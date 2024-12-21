import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import ShoppingBasket from "../../components/ShoppingBasket";
import { AppState } from "../../App";

const StyledAppBar = styled(AppBar)`
    user-select: none;
    background-color: ${(props) => props.theme.palette.background.paper};
    box-shadow: none;
    color: ${(props) => props.theme.palette.primary.main};
`;

type NavbarProps = Pick<AppState, "shoppingCart">;

export const Navbar = ({ shoppingCart }: NavbarProps) => (
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
            <ShoppingBasket count={shoppingCart.length} />
        </Toolbar>
    </StyledAppBar>
);
