import { useState } from "react";
import { Product } from "../../products/interface/interface";
import {
    addToCart,
    closeProductModal,
} from "../../products/store/productStore";
import { useAppDispatch } from "../../../store/hooks";

type UseAddToCartModal = {
    quantity: number;
    setQuantity: (quantity: number) => void;
    onClose: () => void;
    onAddToCart: (product: Product, quantity: number) => void;
};

export function useAddToCartModal(): UseAddToCartModal {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useAppDispatch();

    const onClose = () => {
        setQuantity(1);
        return dispatch(closeProductModal());
    };

    const onAddToCart = (product: Product, quantity: number) => {
        setQuantity(1);
        return dispatch(addToCart({ product, quantity }));
    };

    return {
        quantity,
        setQuantity,
        onClose,
        onAddToCart,
    };
}
