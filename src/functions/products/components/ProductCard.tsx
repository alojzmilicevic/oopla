import { Box, Card, CardContent, CardHeader, styled } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { Product } from "../interface/interface";
import { openProductModal } from "../store/productStore";
import { Avatar } from "./Avatar";
import { SubHeader } from "./SubHeader";
import { Title } from "./Title";

type ProductCardProps = {
    quantity: number;
    product: Product;
};

export const ProductCard = ({ product, quantity }: ProductCardProps) => {
    const { description, name, price, icon } = product;
    const dispatch = useAppDispatch();
    const addToCart = (product: Product) => dispatch(openProductModal(product));

    return (
        <StyledCard onClick={() => addToCart(product)}>
            <Avatar icon={icon} />
            <CardContent sx={{ flex: 1 }}>
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
            </CardContent>
        </StyledCard>
    );
};

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

const StyledCard = styled(Card)`
    user-select: none;
    display: flex;
    align-items: center;
    height: 100px;
    &:hover {
        cursor: pointer;
        background-color: #f0f0f032;
    }
`;
