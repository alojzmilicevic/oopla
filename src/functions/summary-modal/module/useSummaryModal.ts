import { Theme, useMediaQuery } from "@mui/material";
import { createOrder } from "../../../firebase/createOrder";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
    closeSummaryModal,
    getIsOpenSummaryModal,
    getShoppingCart,
} from "../../products/store/productStore";
import { CartItem } from "../../products/interface/interface";

type UseSummaryModal = {
    isMobile: boolean;
    onSubmit: () => void;
    onCloseSummaryModal: (shouldClearCart?: boolean) => void;
    shoppingCart: CartItem[];
    isOpenSummaryModal: boolean;
};

export function useSummaryModal(): UseSummaryModal {
    const isOpenSummaryModal = useAppSelector(getIsOpenSummaryModal);
    const dispatch = useAppDispatch();
    const onCloseSummaryModal = (shouldClearCart: boolean = false) =>
        dispatch(closeSummaryModal({ shouldClearCart }));

    const shoppingCart = useAppSelector(getShoppingCart);
    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("sm")
    );

    const onSubmit = async () => {
        try {
            await createOrder(shoppingCart);
            onCloseSummaryModal(true);
        } catch (error) {
            console.error("Error creating order: ", error);
        }
    };

    return {
        isMobile,
        onSubmit,
        onCloseSummaryModal,
        shoppingCart,
        isOpenSummaryModal,
    };
}
