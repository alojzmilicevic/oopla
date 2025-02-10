import { DialogContent } from "@mui/material";
import { CartItem } from "../../products/interface/interface";
import { EmptyCartScreen } from "./EmptyCartScreen";
import { CartRow } from "./CartRow";

type ContentProps = {
    shoppingCart: CartItem[];
};

export const Content = ({ shoppingCart }: ContentProps) => {
    if (shoppingCart.length === 0) return <EmptyCartScreen />;

    return (
        <DialogContent sx={{ pl: 1, pr: 1 }}>
            {shoppingCart.map(
                (item, index) =>
                    item.quantity !== 0 && <CartRow key={index} {...item} />
            )}
        </DialogContent>
    );
};
