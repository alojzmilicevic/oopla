import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { CartItem, Product } from "../interface/interface";
import { db } from "../../../firebase/firebase";
import { RootState } from "../../../store/store";

type State = {
    shoppingCart: CartItem[];
    products: Product[];

    loading: boolean;
    error: string | null;

    selectedProduct: Product | null;

    summaryModalOpen: boolean;
};

const initialState: State = {
    shoppingCart: [],
    products: [],
    loading: false,
    error: null,
    selectedProduct: null,
    summaryModalOpen: false,
};

// Async thunk to fetch products from Firestore
export const fetchProducts = createAsyncThunk<Product[]>(
    "products/fetchProducts",
    async () => {
        const colRef = collection(db, "products"); // ✅ Reference to "products" collection
        const querySnapshot = await getDocs(colRef);

        const products = querySnapshot.docs.map((doc) => ({
            ...(doc.data() as Product), // ✅ Include all product fields
            id: doc.id.toString(), // ✅ Include Firestore-generated ID
        }));
        return products as Product[];
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        openProductModal: (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload;
        },
        closeProductModal: (state) => {
            state.selectedProduct = null;
        },
        openSummaryModal: (state) => {
            state.summaryModalOpen = true;
        },
        closeSummaryModal: (
            state,
            action: PayloadAction<{ shouldClearCart: boolean }>
        ) => {
            if (action?.payload.shouldClearCart) {
                state.shoppingCart = [];
            }

            state.summaryModalOpen = false;
        },
        addToCart: (
            state,
            action: PayloadAction<{ product: Product; quantity: number }>
        ) => {
            const existingItem = state.shoppingCart.findIndex(
                (item) => item.id === action.payload.product.id
            );

            if (existingItem >= 0) {
                state.shoppingCart[existingItem].quantity +=
                    action.payload.quantity;
            } else {
                state.shoppingCart.push({
                    ...action.payload.product,
                    quantity: action.payload.quantity,
                });
            }
            state.selectedProduct = null;
        },
        removeFromCart: (
            state,
            action: PayloadAction<{ product: Product }>
        ) => {
            const existingItem = state.shoppingCart.findIndex(
                (item) => item.id === action.payload.product.id
            );

            if (existingItem >= 0) {
                state.shoppingCart = state.shoppingCart.filter(
                    (item) => item.id !== action.payload.product.id
                );
            }

            state.selectedProduct = null;
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        updateCartItemQuantity: (
            state,
            action: PayloadAction<{ product: Product; quantity: number }>
        ) => {
            const existingItem = state.shoppingCart.findIndex(
                (item) => item.id === action.payload.product.id
            );

            if (existingItem >= 0) {
                state.shoppingCart[existingItem].quantity =
                    action.payload.quantity;

                if (action.payload.quantity === 0) {
                    state.shoppingCart = state.shoppingCart.filter(
                        (item) => item.id !== action.payload.product.id
                    );
                }
            } 
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchProducts.fulfilled,
                (state, action: PayloadAction<Product[]>) => {
                    state.products = action.payload;
                    state.loading = false;
                }
            )
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Failed to fetch products";
            });
    },
});

export const {
    addToCart,
    removeFromCart,
    setProducts,
    closeProductModal,
    openProductModal,
    openSummaryModal,
    closeSummaryModal,
    updateCartItemQuantity,
} = productSlice.actions;
export const getProducts = (state: RootState) => state.products.products;
export const getShoppingCart = (state: RootState) =>
    state.products.shoppingCart;

export const getSelectedProduct = (state: RootState) =>
    state.products.selectedProduct;
export const getIsOpenSummaryModal = (state: RootState) =>
    state.products.summaryModalOpen;
