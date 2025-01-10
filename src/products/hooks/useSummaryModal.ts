import { useState } from "react";
import { Product } from "../interface/interface";

type SummaryModalProps = {
    shoppingCart: number[];
    products: Product[];
};

export type UseSummaryModal = {
    isOpenSummaryModal: boolean;
    setIsOpenSummaryModal: (isOpen: boolean) => void;
    data: { product: Product; amount: number }[];
}

export function useSummaryModal({products, shoppingCart}: SummaryModalProps): UseSummaryModal {
    const [isOpenSummaryModal, setIsOpenSummaryModal] = useState(false);

    const data = shoppingCart.map((amount, index) => {
        return ({ product: products[index], amount });
    }).filter(({ amount }) => amount > 0);

    return { isOpenSummaryModal, setIsOpenSummaryModal, data };
}
