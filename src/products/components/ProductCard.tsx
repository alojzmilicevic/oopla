import {
    Box,
    Card,
    CardActionArea,
    CardHeader,
    Typography,
} from "@mui/material";
import { Product } from "../interface/interface";
import * as Muicon from "@mui/icons-material";
import React from "react";
import { AppState } from "../../App";

type ProductCardProps = Product & Pick<AppState, "addToCart">;

// Utility to dynamically render icons with a fallback
const getIcon = (iconName: string) => {
    const IconComponent = Muicon[iconName as keyof typeof Muicon];
    return IconComponent ? (
        <IconComponent fontSize="large" color="info" sx={{ px: 1 }} />
    ) : null;
};

const SubHeader = ({
    description,
    price,
}: Pick<ProductCardProps, "description" | "price">) => (
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
            {price} kr
        </Typography>
    </Box>
);

const Title = React.memo(
    ({ id, name, icon }: Pick<ProductCardProps, "name" | "id" | "icon">) => (
        <Typography variant="h6" display="flex" alignItems="center">
            {id}. {name} {icon}
        </Typography>
    )
);

export const ProductCard = ({
    name,
    id,
    price,
    description,
    icon,
    addToCart,
}: ProductCardProps) => (
    <Card sx={{ userSelect: "none" }} onClick={() => addToCart(id)}>
        <CardActionArea>
            <CardHeader
                title={<Title name={name} id={id} icon={icon} />}
                titleTypographyProps={{ variant: "h6" }}
                subheader={
                    <SubHeader description={description} price={price} />
                }
                subheaderTypographyProps={{
                    variant: "body2",
                    display: "block",
                }}
            />
        </CardActionArea>
    </Card>
);
