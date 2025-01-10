import { useState } from "react";
import productData from "./mock/product.mock.json";
import { useCartModal } from "./products/hooks/useCartModal";
import { useSummaryModal } from "./products/hooks/useSummaryModal";
import { Product } from "./products/interface/interface";

export function useApp() {
    const products = productData.products as Product[];

    const [shoppingCart, setShoppingCart] = useState<number[]>(
        Array(products.length).fill(0)
    );

    const {
        openProductModal,
        closeProductModal,
        productModalData,
        addToCart,
        removeFromCart,
    } = useCartModal({ shoppingCart, setShoppingCart });

    const { data, isOpenSummaryModal, setIsOpenSummaryModal } = useSummaryModal(
        { products, shoppingCart }
    );

    const showOrdersButton = shoppingCart.some((amount) => amount > 0);

    return {
        openProductModal,
        products,
        shoppingCart,
        setIsOpenSummaryModal,
        productModalData,
        addToCart,
        removeFromCart,
        data,
        isOpenSummaryModal,
        closeProductModal,
        showOrdersButton,
    };
}
