import { styled } from "@mui/material";
import { OrdersButton } from "./components/OrdersButton";
import { Header } from "./header/module/Header";
import { Orders } from "./orders/module/Orders";
import { AddToCartModal } from "./add-to-cart-modal/module/AddToCartModal";
import { SummaryModal } from "./summary-modal/module/SummaryModal";
import { Products } from "./products/module/Products";
import { useApp } from "./useApp";

const OrderBox = styled("div")<{bottom: number}>(({ bottom }) => ({
    position: "fixed",
    bottom: bottom || 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
}));

function App() {
    const { latestOrder } = useApp();

    return (
        <div>
            <Header />
            <Products />
            <AddToCartModal />
            <SummaryModal />
            <OrderBox bottom={latestOrder ? 56: 0}>
                <OrdersButton />
                {latestOrder && <Orders latestOrder={latestOrder} />}
            </OrderBox>
        </div>
    );
}

export default App;
