import { Dialog } from "@mui/material";
import { getSelectedProduct } from "../../products/store/productStore";
import { useAppSelector } from "../../store/hooks";
import { Actions } from "../components/Actions";
import { Content } from "../components/Content";
import { Title } from "../components/Title";
import { useAddToCartModal } from "./useAddToCartModal";

const PaperProps = {
    sx: {
        margin: 0,
        width: "100%",
        height: "90%",
        position: "fixed",
        bottom: 0,
    },
};

export const AddToCartModal = () => {
    const product = useAppSelector(getSelectedProduct);
    const { onAddToCart, onClose, quantity, setQuantity } = useAddToCartModal();

    if (!product) return null;

    return (
        <Dialog
            open={true}
            onClose={onClose}
            PaperProps={PaperProps}
        >
            <Title icon={product.icon} />
            <Content {...product} />
            <Actions
                product={product}
                onAddToCart={onAddToCart}
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </Dialog>
    );
};
