import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from '../products/store/productStore';
import { ordersSlice } from '../orders/store/ordersSlice';

export const store = configureStore({
    reducer: { 
        productStore: productSlice.reducer,
        orders: ordersSlice.reducer,
     },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;