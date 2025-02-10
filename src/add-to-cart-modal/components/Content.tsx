import { DialogContent, DialogContentText, Typography } from "@mui/material";
import { Product } from "../../products/interface/interface";

type ContentProps = Pick<Product, "name" | "price" | "description">;

export const Content = ({ description, name, price }: ContentProps) => (
    <DialogContent sx={{ marginTop: 2 }}>
        <DialogContentText>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body1" component="div">
                {description}
            </Typography>
            <Typography variant="h6" component="div">
                {price} kr
            </Typography>
        </DialogContentText>
    </DialogContent>
);
