import { OrdersButton } from "./components/OrdersButton";
import { Header } from "./header/module/Header";
import { AddToCartModal } from "./products/components/AddToCartModal";
import { Product } from "./products/interface/interface";
import { Products } from "./products/module/Products";
import { SummaryModal } from "./products/components/SummaryModal";
import { useApp } from "./useApp";

export type AppState = {
    shoppingCart: number[];
    addToCart: (product: Product) => void;
    products: Product[];
};

function App() {
    const {
        openProductModal,
        products,
        shoppingCart,
        setIsOpenSummaryModal,
        productModalData,
        addToCart,
        removeFromCart,
        data,
        isOpenSummaryModal,
        closeProductModal,
        showOrdersButton,
    } = useApp();

    return (
        <>
            <Header />
            <Products
                addToCart={openProductModal}
                products={products}
                shoppingCart={shoppingCart}
            />
            { showOrdersButton && <OrdersButton onClick={() => setIsOpenSummaryModal(true)} /> }
            <AddToCartModal
                handleClose={closeProductModal}
                product={productModalData}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
            <SummaryModal
                data={data}
                isOpenSummaryModal={isOpenSummaryModal}
                setIsOpenSummaryModal={setIsOpenSummaryModal}
            />
        </>
    );
}

export default App;
