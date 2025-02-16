import { Stack } from "@mui/material";
import { ProductsSkeleton } from "./functions/products/module/ProductsSkeleton";
import { HeaderSkeleton } from "./functions/home/components/header/module/HeaderSkeleton";

export const AppSkeleton = () => (
    <Stack position={"absolute"} width={"100%"} overflow={"hidden"}>
        <HeaderSkeleton />
        <ProductsSkeleton />
    </Stack>
);
