import { Box, Typography } from "@mui/material";
import { Product } from "../interface/interface";

type SubHeaderProps = Pick<Product, "description" | "price">;

export const SubHeader = ({ description, price }: SubHeaderProps) => (
    <Box
        sx={{
            justifyContent: "space-between",
            display: "flex",
        }}
    >
        <Typography variant="body2" display="block">
            {description}
        </Typography>
        <Typography variant="body2" display="block">
            {price}kr
        </Typography>
    </Box>
);
