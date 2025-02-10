import { Button, DialogActions, useTheme } from "@mui/material";
import { AddMoreContainer } from "./AddMoreContainer";
import { Product } from "../../products/interface/interface";

type ActionProps = {
    quantity: number;
    setQuantity: (quantity: number) => void;
    onAddToCart: (product: Product, quantity: number) => void;
    product: Product;
};

export const Actions = ({
    product,
    quantity,
    setQuantity,
    onAddToCart,
}: ActionProps) => {
    const theme = useTheme();

    return (
        <DialogActions
            sx={{
                padding: 1,
                display: "flex",
                bgcolor: theme.palette.secondary.main,
            }}
        >
            <AddMoreContainer
                quantity={quantity}
                setQuantity={setQuantity}
                size="small"
            />

            <Button
                sx={{ borderRadius: 50, height: 56, flex: 1 }}
                variant={"contained"}
                color="primary"
                onClick={() => onAddToCart(product, quantity)}
            >
                Lägg till
            </Button>
        </DialogActions>
    );
};
