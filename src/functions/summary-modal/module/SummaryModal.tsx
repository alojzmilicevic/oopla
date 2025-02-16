import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    DialogTitle,
    IconButton,
    SwipeableDrawer,
    Typography,
} from "@mui/material";
import { Content } from "../components/Content";
import { SubmitButton } from "../components/SubmitButton";
import { useSummaryModal } from "./useSummaryModal";

const paperProps = (isMobile: boolean) => ({
    sx: {
        width: "100%", // ✅ Always full-width
        maxWidth: isMobile ? "100%" : 600, // ✅ Full-width on mobile, limited on larger screens
        margin: "auto",
        height: isMobile ? "100%" : "90%",
        borderTopLeftRadius: isMobile ? 0 : 12, // ✅ Rounded top corners for better UX
        borderTopRightRadius: isMobile ? 0 : 12,
    },
});

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
    const {
        isMobile,
        onSubmit,
        onCloseSummaryModal,
        shoppingCart,
        isOpenSummaryModal,
    } = useSummaryModal();

    return (
        <SwipeableDrawer
            open={isOpenSummaryModal}
            anchor="bottom"
            onOpen={() => {}}
            onClose={() => onCloseSummaryModal(false)}
            PaperProps={paperProps(isMobile)}
        >
            <Title onClose={() => onCloseSummaryModal()} />
            <Content shoppingCart={shoppingCart} />
            <SubmitButton onSubmit={onSubmit} shoppingCart={shoppingCart} />
        </SwipeableDrawer>
    );
};
