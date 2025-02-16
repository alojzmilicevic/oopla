import { Stack } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { getProducts, getShoppingCart } from "../store/productStore";
import { ProductsSkeleton } from "./ProductsSkeleton";
import { useAppSelector } from "../../../store/hooks";

export const Products = () => {
    const products = useAppSelector(getProducts);
    const shoppingCart = useAppSelector(getShoppingCart);

    if (!products || products.length === 0) return <ProductsSkeleton />;

    return (
        <Stack spacing={1} padding={2} sx={{ marginBottom: 10 }}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    quantity={
                        shoppingCart.find((i) => i.id === product.id)
                            ?.quantity || 0
                    }
                />
            ))}
        </Stack>
    );
};

