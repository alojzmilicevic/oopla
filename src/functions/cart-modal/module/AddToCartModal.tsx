import {
    SwipeableDrawer,
    Theme,
    useMediaQuery
} from "@mui/material";
import { getSelectedProduct } from "../../products/store/productStore";
import { Actions } from "../components/Actions";
import { Content } from "../components/Content";
import { Title } from "../components/Title";
import { useAddToCartModal } from "./useAddToCartModal";
import { useAppSelector } from "../../../store/hooks";

const paperProps = (isMobile: boolean) => ({
    sx: {
        width: "100%", // ✅ Always full-width
        maxWidth: isMobile ? "100%" : 600, // ✅ Full-width on mobile, limited on larger screens
        borderTopLeftRadius: 12, // ✅ Rounded top corners for better UX
        borderTopRightRadius: 12,
        height: "90%",
        margin: "auto", 
    },
});

export const AddToCartModal = () => {
    const product = useAppSelector(getSelectedProduct) || {
        description: "",
        icon: "",
        name: "",
        price: 0,
        id: "",
    };
    const { onAddToCart, onClose, quantity, setQuantity } = useAddToCartModal();
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("sm")
    );
    const open = product.name !== "";


    return (
        <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            PaperProps={paperProps(isMobile)}
            onOpen={() => {}}
            sx={{ userSelect: "none" }}
        >
            <Title icon={product.icon} onClose={onClose}/>
            <Content {...product} />
            <Actions
                product={product}
                onAddToCart={onAddToCart}
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </SwipeableDrawer>
    );
};
