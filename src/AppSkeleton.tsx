import { Stack } from "@mui/material";
import { HeaderSkeleton } from "./header/module/Header";
import { ProductsSkeleton } from "./products/module/ProductsSkeleton";

export const AppSkeleton = () => (
    <Stack
        sx={{
            position: "absolute",
            width: "100%",
            overflow: "hidden",
        }}
    >
        <HeaderSkeleton />
        <ProductsSkeleton />
    </Stack>
);
