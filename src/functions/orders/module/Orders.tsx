import { Box, SwipeableDrawer } from "@mui/material";
import * as React from "react";
import { OrderStatus } from "../components/OrderStatus/OrderStatus";
import { Order } from "../interface/interface";
import { useOrders } from "./useOrders";

export const drawerBleeding = 60;

type OrderProps = {
    latestOrder: Order;
};

export const Orders = ({ latestOrder }: OrderProps) => {
    const { open, handleOpen, handleClose } = useOrders();

    return (
        <React.Fragment>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                disableBackdropTransition
                PaperProps={{
                    sx: {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: "visible",
                    },
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box maxWidth={400} width={"100%"} sx={{ margin: "auto" }}>
                    <OrderStatus
                        latestOrder={latestOrder}
                        handleOpen={handleOpen}
                        open={open}
                    />
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    );
};
