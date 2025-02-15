import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../products/store/productStore';
import { ordersSlice } from '../orders/store/ordersSlice';
import { authSlice } from '../auth/store/authSlice';

export const store = configureStore({
    reducer: { 
        products: productSlice.reducer,
        orders: ordersSlice.reducer,
        auth: authSlice.reducer,
     },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;