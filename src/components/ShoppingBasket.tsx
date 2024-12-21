import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, IconButton } from "@mui/material";

type ShoppingBasketProps = {
    count?: number;
};

const ShoppingBasket = ({ count }: ShoppingBasketProps) => (
    <IconButton>
        <Badge badgeContent={count} color="secondary">
            <ShoppingBasketIcon color="inherit" />
        </Badge>
    </IconButton>
);

export default ShoppingBasket;
