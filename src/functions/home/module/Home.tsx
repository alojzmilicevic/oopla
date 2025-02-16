import { Stack, styled } from "@mui/material";
import { OrdersButton } from "../../../components/OrdersButton";
import { useAppSelector } from "../../../store/hooks";
import { AddToCartModal } from "../../cart-modal/module/AddToCartModal";
import { Header } from "../components/header/module/Header";
import { Orders } from "../../orders/module/Orders";
import { getOrderWithLatestDate } from "../../orders/store/ordersSlice";
import { Products } from "../../products/module/Products";
import { SummaryModal } from "../../summary-modal/module/SummaryModal";

const OrderBox = styled("div")<{ bottom: number }>(({ bottom }) => ({
    position: "fixed",
    bottom: bottom || 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: 1280,
}));

export const Home = () => {
    const latestOrder = useAppSelector(getOrderWithLatestDate);

    return (
        <Stack display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Header />
            <Stack maxWidth={1280} width={"100%"}>
                <Products />
                <AddToCartModal />
                <SummaryModal />
                <OrderBox bottom={latestOrder ? 56 : 0}>
                    <OrdersButton />
                    {latestOrder && <Orders latestOrder={latestOrder} />}
                </OrderBox>
            </Stack>
        </Stack>
    );
};
