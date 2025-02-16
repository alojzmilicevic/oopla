import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../interface/interface';
import { RootState } from '../../../store/store';

type State = Order[];
const initialState: State = [];

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    updateOrders: (_state, action: PayloadAction<Order[]>) => {
      return action.payload;
    },
  },
});

export const getOrderWithLatestDate = (state: RootState) => {
  if (state.orders.length === 0) return undefined;

  return state.orders.reduce((latestOrder, currentOrder) => {
    return currentOrder.createdTime! > latestOrder.createdTime! ? currentOrder : latestOrder;
  });
};

export const { updateOrders } = ordersSlice.actions;