import { useState } from "react";
import { Product } from "../interface/interface";

type CartModalProps = {
    shoppingCart: number[];
    setShoppingCart: (shoppingCart: number[]) => void;
};

export function useCartModal({
    shoppingCart,
    setShoppingCart,
}: CartModalProps) {
    const [data, setData] = useState<Product | null>(null);

    const openProductModal = (product: Product) => setData(product);
    const closeProductModal = () => setData(null);

    const addToCart = (product: Product, quantity: number) =>
        updateCart("add", product, quantity);
    const removeFromCart = (product: Product) => updateCart("remove", product);

    const updateCart = (
        action: "add" | "remove",
        product: Product,
        quantity: number = 0
    ) => {
        const newShoppingCart = [...shoppingCart];

        if (action === "add") {
            newShoppingCart[product.id] += quantity;
        } else if (action === "remove") {
            newShoppingCart[product.id] = 0;
        }

        setShoppingCart(newShoppingCart);
        closeProductModal();
    };

    return { openProductModal, closeProductModal, addToCart, removeFromCart, productModalOpen: data !== null, productModalData: data };
}
