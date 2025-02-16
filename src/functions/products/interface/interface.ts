export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    icon: string;
};

export type Products = Product[];

export type CartItem = Product & {
    quantity: number;
};
