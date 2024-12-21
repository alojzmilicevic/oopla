import { useState } from "react";
import { Header } from "./header/module/Header";
import { Products } from "./products/module/Products";
import { Button } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
export type AppState = {
    shoppingCart: number[];
    addToCart: (id: number) => void;
};

function App() {
    const [shoppingCart, setShoppingCart] = useState<number[]>([]);

    const addToCart = (id: number) => {
        setShoppingCart([...shoppingCart, id]);
    };

    const removeFromCart = (id: number) => {
        setShoppingCart(shoppingCart.filter((itemId) => itemId !== id));
    };

    return (
        <>
            <Header shoppingCart={shoppingCart} />
            <Products addToCart={addToCart} />
            <Button variant={"contained"} size="small" color="primary" sx={{ position: "fixed", left: "50%",transform: "translateX(-50%)", bottom: 16, padding: 2, width: "90%" }}>
                <ArticleIcon style={{marginRight: 8}}/>
                Se Beställning
            </Button>
        </>
    );
}

export default App;
