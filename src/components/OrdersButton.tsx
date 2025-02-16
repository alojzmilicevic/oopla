import ArticleIcon from "@mui/icons-material/Article";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getShoppingCart, openSummaryModal } from "../functions/products/store/productStore";

export const OrdersButton = () => {
    const shouldShowOrdersButton = useAppSelector(getShoppingCart).length > 0;
    const dispatch = useAppDispatch();
    const onOpenSummaryModal = () => dispatch(openSummaryModal());

    if (!shouldShowOrdersButton) {
        return null;
    }
    
    return (
        <Button
            variant={"contained"}
            size="small"
            color="primary"
            onClick={onOpenSummaryModal}
            sx={{ width: "80%", marginBottom: 1, height: 56, maxWidth: 300 }}
        >
            <ArticleIcon style={{ marginRight: 8 }} />
            Se Beställning | 0 kr
        </Button>
    );
};
