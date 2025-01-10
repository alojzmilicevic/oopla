import {
    Box,
    Card,
    CardActionArea,
    CardHeader,
    styled,
    Typography,
} from "@mui/material";
import { Product } from "../interface/interface";
import React from "react";
import { AppState } from "../../App";

type ProductCardProps = Pick<AppState, "addToCart"> & { quantity: number, product: Product }; 

const SubHeader = ({
    description,
    price,
}: Pick<Product, "description" | "price">) => (
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
    ({ id, name, icon }: Pick<Product, "name" | "id" | "icon">) => (
        <Typography variant="h6" display="flex" alignItems="center">
            {id}. {name} {icon}
        </Typography>
    )
);

const StyledBox = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    border-bottom-left-radius: 8px;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.secondary.main};
`;

export const ProductCard = ({
    product,
    addToCart,
    quantity,
}: ProductCardProps) => {
    const {description, name, id, price, icon} = product;
        return (

            <Card sx={{ userSelect: "none" }} onClick={() => addToCart(product)}>
                <CardActionArea>
                    {quantity > 0 && <StyledBox>{quantity}</StyledBox>}
                    <CardHeader
                        title={<Title name={name} id={id + 1} icon={icon} />}
                        titleTypographyProps={{ variant: "h6" }}
                        subheader={<SubHeader description={description} price={price} />}
                        subheaderTypographyProps={{
                            variant: "body2",
                            display: "block",
                        }} />
                </CardActionArea>
            </Card>
        );
    };
