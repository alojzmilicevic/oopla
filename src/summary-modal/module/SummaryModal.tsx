import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Dialog,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material";
import { createOrder } from "../../firebase/createOrder";
import {
    closeSummaryModal,
    getIsOpenSummaryModal,
    getShoppingCart,
} from "../../products/store/productStore";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Content } from "../components/Content";
import { SubmitButton } from "../components/SubmitButton";

const Title = ({ onClose }: { onClose: () => void }) => (
    <DialogTitle>
        <Box
            display="flex"
            justifyContent={"center"}
            position={"relative"}
            alignItems={"center"}
            pb={3}
        >
            <Typography variant="h5">Din Varukorg</Typography>
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    backgroundColor: "#5f5f5f53",
                }}
            >
                <CloseIcon />
            </IconButton>
        </Box>
    </DialogTitle>
);

export const SummaryModal = () => {
    const isOpenSummaryModal = useAppSelector(getIsOpenSummaryModal);
    const dispatch = useAppDispatch();
    const onCloseSummaryModal = (shouldClearCart: boolean = false) => {
        return dispatch(closeSummaryModal({ shouldClearCart }));
    };

    const shoppingCart = useAppSelector(getShoppingCart);

    if (!isOpenSummaryModal) {
        return null;
    }

    const onSubmit = async () => {
        try {
            await createOrder(shoppingCart);
            onCloseSummaryModal(true);
        } catch (error) {
            console.error("Error creating order: ", error);
        }
    };

    return (
        <Dialog
            open={true}
            onClose={() => onCloseSummaryModal(false)}
            PaperProps={{ sx: { borderRadius: 0, margin: 0, width: "100%" } }}
            fullWidth
            fullScreen
        >
            <Title onClose={() => onCloseSummaryModal()} />
            <Content shoppingCart={shoppingCart} />
            <SubmitButton onSubmit={onSubmit} shoppingCart={shoppingCart} />
        </Dialog>
    );
};
