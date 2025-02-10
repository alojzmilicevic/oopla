import { Global } from "@emotion/react";
import { SwipeableDrawer } from "@mui/material";
import * as React from "react";
import { OrderStatus } from "../components/OrderStatus/OrderStatus";
import { Order } from "../interface/interface";
import { useOrders } from "./useOrders";

export const drawerBleeding = 56;

type OrderProps = {
    latestOrder: Order;
};

export const Orders = ({ latestOrder }: OrderProps) => {
    const { open, handleOpen, handleClose } = useOrders();

    return (
        <React.Fragment>
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: "visible",
                    },
                }}
            />
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                disableBackdropTransition
                ModalProps={{
                    keepMounted: true,
                }}
            >
                
                <OrderStatus latestOrder={latestOrder} handleOpen={handleOpen} open={open} />
            </SwipeableDrawer>
        </React.Fragment>
    );
};
