import { useState } from "react";

export type UseOrdersType = {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
};

export function useOrders(): UseOrdersType {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return { open, handleOpen, handleClose };
}
