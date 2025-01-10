import { Stack } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { AppState } from "../../App";

type ProductsProps = Pick<AppState, "addToCart" | "products" | "shoppingCart">;

export const Products = ({
    addToCart,
    products,
    shoppingCart,
}: ProductsProps) => {
    return (
        <Stack spacing={1} padding={2} sx={{ marginBottom: 10 }}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}

                    quantity={shoppingCart[product.id]}
                />
            ))}
        </Stack>
    );
};
