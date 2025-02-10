import { Button, Stack } from "@mui/material";
import { uploadToNewCollection } from "../../firebase/uploadProducts";
import { useAppSelector } from "../../store/hooks";
import { ProductCard } from "../components/ProductCard";
import { getProducts, getShoppingCart } from "../store/productStore";

export const Products = () => {
    const products = useAppSelector(getProducts);
    const shoppingCart = useAppSelector(getShoppingCart);

    if (!products)
        return (
            <Button
                onClick={() => {
                    uploadToNewCollection();
                }}
            >
                Upload Products
            </Button>
        );
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
