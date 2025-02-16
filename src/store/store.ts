import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../functions/products/store/productStore';
import { ordersSlice } from '../functions/orders/store/ordersSlice';
import { authSlice } from '../functions/auth/store/authSlice';

export const store = configureStore({
    reducer: { 
        products: productSlice.reducer,
        orders: ordersSlice.reducer,
        auth: authSlice.reducer,
     },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;