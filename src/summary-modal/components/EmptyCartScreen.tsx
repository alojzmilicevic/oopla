import { Stack, Typography } from "@mui/material";
import CartEmpty from '@mui/icons-material/ProductionQuantityLimits';

export const EmptyCartScreen = () => {
    return <Stack display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
        <CartEmpty sx={{ fontSize: 100 }} color="primary" />
        <Typography variant={"h5"}>Din varukorg är tom</Typography>
        <Typography variant={"body1"}>Du har inte lagt till några artiklar i varukorgen</Typography>
    </Stack>
};