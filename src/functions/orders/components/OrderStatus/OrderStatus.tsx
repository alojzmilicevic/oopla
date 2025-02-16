import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { Box, Stack, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Order, OrderStatuses } from "../../interface/interface";
import { StatusProgress } from "../StatusProgress";
import { OrderStatusHeader } from "./OrderStatusHeader";
import { useOrderStatus } from "./useOrderStatus";

export type OrderStatusProps = {
    latestOrder: Order;
    handleOpen: () => void;
    open: boolean;
};

const DeliveryTime = () => (
    <>
        <Typography variant="caption">Uppskattad leveranstid</Typography>
        <Typography fontWeight={"bold"} variant="h4">
            4 - 8 min
        </Typography>
    </>
);

export const OrderStatus = (props: OrderStatusProps) => {
    const { latestOrder } = props;
    const { statusItems, statusText } = useOrderStatus({ latestOrder });
    const latestOrderStatus = latestOrder.status;

    return (
        <Box maxWidth={400} width={"100%"} margin={"auto"}>
            <OrderStatusHeader
                {...props}
                statusText={statusText.short}
                statusItems={statusItems}
            />
            <Stack spacing={2} p={0.5} mt={0.25} alignItems={"center"}>
                {latestOrderStatus !== OrderStatuses.Completed && (
                    <DeliveryTime />
                )}
                {latestOrderStatus === OrderStatuses.Completed && (
                    <Typography variant="caption">Tack oså...</Typography>
                )}
                <DeliveryDiningIcon
                    sx={{
                        fontSize: 100,
                        color: pink[500],
                        transform: "rotate(-20deg)",
                    }}
                />
                <StatusProgress items={statusItems} />
                <Typography variant="caption" color="grey">
                    {statusText.long}
                </Typography>
            </Stack>
        </Box>
    );
};
