import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { Product } from "../interface/interface";
import { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type AddToCartModalProps = {
    handleClose: () => void;
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (product: Product) => void;
    product: Product | null;
};

type AddMoreContainerProps = {
    quantity: number;
    setQuantity: (quantity: number) => void;
};
const AddMoreContainer = ({ quantity, setQuantity }: AddMoreContainerProps) => {
    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}
        >
            <RemoveCircleOutlineIcon
                onClick={handleRemove}
                color={quantity === 1 ? "disabled" : "primary"}
            />
            {quantity}
            <AddCircleOutlineIcon onClick={handleAdd} color="primary" />
        </Box>
    );
};

export const AddToCartModal = ({
    handleClose,
    addToCart,
    removeFromCart,
    product,
}: AddToCartModalProps) => {

    if (!product) return null;
    
    const [quantity, setQuantity] = useState(1);

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            PaperProps={{ sx: { borderRadius: 0, margin: 0, width: "100%" } }}
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">
                {product.name}
                {product.icon}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {product.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ padding: 0, display: "flex" }}>
                <AddMoreContainer
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
                <Button
                    sx={{ borderRadius: 0, height: 56, flex: 1 }}
                    variant={"contained"}
                    color="secondary"
                    onClick={() => addToCart(product, quantity)}
                >
                    Lägg till
                </Button>
                <Button
                    sx={{ borderRadius: 0, height: 56, flex: 1 }}
                    variant={"contained"}
                    color="error"
                    onClick={() => removeFromCart(product)}
                >
                    Ta Bort
                </Button>
            </DialogActions>
        </Dialog>
    );
};
