import { Box, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type BoxSize = "small" | "large";

type AddMoreContainerProps = {
    quantity: number;
    setQuantity: (quantity: number) => void;
    size?: BoxSize;
};

const StyledBox = styled(Box)<{ size?: BoxSize }>`
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 50px;
    border: 1px solid grey;
    max-width: 120px;
    padding: ${(props) => (props.size === "small" ? "8px" : "16px")};
`;

export const AddMoreContainer = ({
    quantity,
    setQuantity,
    size = "large",
}: AddMoreContainerProps) => {
    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <StyledBox size={size}>
            <RemoveIcon
                onClick={handleRemove}
                color={quantity === 1 ? "disabled" : "primary"}
            />
            {quantity}
            <AddIcon onClick={handleAdd} color="primary" />
        </StyledBox>
    );
};
