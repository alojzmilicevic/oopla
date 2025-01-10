import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import { UseSummaryModal } from "../hooks/useSummaryModal";
import emailjs from "emailjs-com";

const Row = ({ product, amount }: any) => {
    return (
        <Box
            key={product.id}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
            }}
        >
            <span>
                {amount} x {product.name}
            </span>
            <span>{product.price} kr</span>
        </Box>
    );
};

export const SummaryModal = ({
    data,
    isOpenSummaryModal,
    setIsOpenSummaryModal,
}: UseSummaryModal) => {
    if (!isOpenSummaryModal) {
        return null;
    }

    const onSubmit = async () => {
        const augmentedData = data.map((item) => `${item.amount} x ${item.product.name}`);
        try {
            
            await emailjs.send(
                "service_b19d9te", // Replace with your EmailJS Service ID
                "template_8nazb8v", // Replace with your EmailJS Template ID
                {
                    data: augmentedData, // Pass the list of services as the template variable
                },
                "6dvAwdgpeQWAD9XOy" // Replace with your EmailJS User ID
            );
            alert("Email sent successfully!");
            setIsOpenSummaryModal(false);

        } catch (error) {
            console.error("Error sending email: ", error);
            alert("Failed to send email.");
        }
    }

    return (
        <Dialog
            open={true}
            onClose={() => setIsOpenSummaryModal(false)}
            PaperProps={{ sx: { borderRadius: 0, margin: 0, width: "100%" } }}
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">Din Beställning</DialogTitle>
            <DialogContent>
                    {data.map((item, index) => {
                        return (
                            item.amount !== 0 && (
                                <Row
                                    key={index}
                                    product={item.product}
                                    amount={item.amount}
                                />
                            )
                        );
                    })}
            </DialogContent>
            <DialogActions sx={{ padding: 0, display: "flex" }}>
                <Button
                    sx={{ borderRadius: 0, height: 56, flex: 1 }}
                    variant={"contained"}
                    color="primary"
                    onClick={onSubmit}
                >
                    Slutför Köp
                </Button>
                <Button
                    sx={{ borderRadius: 0, height: 56, flex: 1 }}
                    variant={"contained"}
                    color="error"
                    onClick={() => setIsOpenSummaryModal(false)}
                >
                    Stäng
                </Button>
            </DialogActions>
        </Dialog>
    );
};
