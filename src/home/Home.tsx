import { styled } from "@mui/material";
import { AddToCartModal } from "../add-to-cart-modal/module/AddToCartModal";
import { OrdersButton } from "../components/OrdersButton";
import { Header } from "../header/module/Header";
import { Orders } from "../orders/module/Orders";
import { getOrderWithLatestDate } from "../orders/store/ordersSlice";
import { Products } from "../products/module/Products";
import { useAppSelector } from "../store/hooks";
import { SummaryModal } from "../summary-modal/module/SummaryModal";

const OrderBox = styled("div")<{ bottom: number }>(({ bottom }) => ({
    position: "fixed",
    bottom: bottom || 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
}));

export const Home = () => {
    const latestOrder = useAppSelector(getOrderWithLatestDate);

    return (
        <>
            <Header />
            <Products />
            <AddToCartModal />
            <SummaryModal />
            <OrderBox bottom={latestOrder ? 56 : 0}>
                <OrdersButton />
                {latestOrder && <Orders latestOrder={latestOrder} />}
            </OrderBox>
        </>
    );
};
