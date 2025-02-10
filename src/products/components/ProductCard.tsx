import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardHeader,
    styled,
    Typography,
} from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { Product } from "../interface/interface";
import { openProductModal } from "../store/productStore";

type ProductCardProps = {
    quantity: number;
    product: Product;
};

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
            {price}kr
        </Typography>
    </Box>
);

type TitleProps = Pick<Product, "name">;

const Title = React.memo(({ name }: TitleProps) => (
    <Typography
        variant="body1"
        display="flex"
        alignItems="center"
        fontWeight={"bold"}
    >
        {name}
    </Typography>
));

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

export const ProductCard = ({ product, quantity }: ProductCardProps) => {
    const { description, name, price, icon } = product;
    const dispatch = useAppDispatch();
    const addToCart = (product: Product) => dispatch(openProductModal(product));

    return (
        <Card
            sx={{
                userSelect: "none",
                display: "flex",
                alignItems: "center",
                height: 100,
            }}
            onClick={() => addToCart(product)}
        >
            <Avatar
                variant="square"
                sx={{
                    height: "100%",
                    width: 80,
                    bgcolor: "#33333326",
                    fontSize: 40,
                }}
            >
                {icon}
            </Avatar>
            <CardActionArea>
                {quantity > 0 && <StyledBox>{quantity}</StyledBox>}
                <CardHeader
                    title={<Title name={name} />}
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
};
