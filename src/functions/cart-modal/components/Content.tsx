import { DialogContent, Typography } from "@mui/material";
import { Product } from "../../products/interface/interface";

type ContentProps = Pick<Product, "name" | "price" | "description">;

export const Content = ({ description, name, price }: ContentProps) => (
    <DialogContent sx={{ marginTop: 2, color: "text.secondary" }}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="h6">{price} kr</Typography>
    </DialogContent>
);
