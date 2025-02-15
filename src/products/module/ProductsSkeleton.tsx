import { Stack } from "@mui/material";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";

export const ProductsSkeleton = () => (
    <Stack
        spacing={1}
        padding={2}
        sx={{ marginBottom: 10, overflow: "hidden" }}
    >
        {[1, 2, 3, 4].map((i) => (
            <ProductCardSkeleton key={i} />
        ))}
    </Stack>
);
