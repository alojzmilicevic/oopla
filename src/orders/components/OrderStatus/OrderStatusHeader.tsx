import { styled, Typography } from "@mui/material";
import { StatusItem, StatusProgress } from "../StatusProgress";
import { drawerBleeding } from "../../module/Orders";
import { OrderStatusProps } from "./OrderStatus";

const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    top: -drawerBleeding + 1,
    visibility: "visible",
    right: 0,
    left: 0,
    pointerEvents: "all",
    padding: theme.spacing(2),
    height: drawerBleeding,
}));

type HeaderProps = {
    statusText: string;
    statusItems: StatusItem[];
} & OrderStatusProps;

export const OrderStatusHeader = ({ handleOpen, open, statusItems, statusText }: HeaderProps) => (
    <StyledBox onClick={handleOpen}>
        <div style={{
            opacity: open ? 0 : 1, // Toggle opacity
            transition: "opacity 0.3s ease-in-out", // Add smooth transition
        }}>
            <Typography
                fontSize={12}
                sx={{
                    color: "text.secondary",
                    pointerEvents: "none",
                }}
            >
                {statusText}
            </Typography>
            <StatusProgress items={statusItems} small />
        </div>
    </StyledBox>
);