import { Product } from "../../products/interface/interface";

export type OrderItem = Pick<
    Product,
    "id" | "name" | "price" | "description"
> & {
    quantity: number;
};

export type OrderItemDto = Pick<OrderItem, "name" | "quantity">;

export enum OrderStatuses {
    Pending = "pending",
    InProgress = "in-progress",
    Completed = "completed",
    Cancelled = "cancelled",
}

// Infer OrderStatus from the enum
export type OrderStatus = `${OrderStatuses}`;

export type Order = {
    items: OrderItem[];
    status?: OrderStatus; 
    createdTime?: Date | string; // Firestore timestamp
};
