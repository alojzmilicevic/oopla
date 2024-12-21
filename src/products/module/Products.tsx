import { Stack } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import data from "../../mock/product.mock.json";
import { AppState } from "../../App";

type ProductsProps = Pick<AppState, "addToCart">;

export const Products = ({ addToCart }: ProductsProps) => {
    return (
        <Stack spacing={1} padding={2} sx={{marginBottom: 10}}>
            {data.products.map((product) => (
                <ProductCard
                    key={product.id}
                    {...product}
                    addToCart={addToCart}
                />
            ))}
        </Stack>
    );
};
