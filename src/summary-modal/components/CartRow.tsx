import DeleteIcon from "@mui/icons-material/DeleteOutline";
import {
    Avatar,
    Box,
    Divider,
    IconButton,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import { CartItem } from "../../products/interface/interface";
import { updateCartItemQuantity } from "../../products/store/productStore";
import { useAppDispatch } from "../../store/hooks";
import { AddMoreContainer } from "../../add-to-cart-modal/components/AddMoreContainer";

const SpacedBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

const InfoBox = ({
    icon,
    name,
    description,
    price,
}: Pick<CartItem, "icon" | "name" | "description" | "price">) => (
    <SpacedBox>
        <Box display={"flex"} alignItems={"center"} gap={1}>
            <Avatar variant="square">{icon}</Avatar>
            <Stack>
                <Typography variant="body1">{name}</Typography>
                <Typography variant="caption" style={{ color: "#969696" }}>
                    {description}
                </Typography>
            </Stack>
        </Box>
        <Typography variant="body1">{price} kr</Typography>
    </SpacedBox>
);

const Controls = ({ quantity, ...rest }: CartItem) => {
    const dispatch = useAppDispatch();

    const setQuantity = (quantity: number) => {
        dispatch(
            updateCartItemQuantity({
                product: { ...rest },
                quantity,
            })
        );
    };

    return (
        <Box display={"flex"}>
            <AddMoreContainer quantity={quantity} setQuantity={setQuantity} />
            <IconButton
                onClick={() => setQuantity(0)}
                sx={{ borderRadius: 0 }}
                color="primary"
            >
                <DeleteIcon />
            </IconButton>
        </Box>
    );
};

export const CartRow = ({ quantity, ...rest }: CartItem) => (
    <Stack mt={1} mb={1} display={"flex"} gap={2}>
        <InfoBox {...rest} />
        <Controls quantity={quantity} {...rest} />
        <Divider />
    </Stack>
);
