import { Button, DialogActions } from "@mui/material";
import { CartItem } from "../../products/interface/interface";

type SubmitButtonProps = {
    onSubmit: () => void;
    shoppingCart: CartItem[];
};

export const SubmitButton = ({ onSubmit, shoppingCart }: SubmitButtonProps) => (
    <DialogActions sx={{ padding: 1, display: "flex" }}>
        <Button
            sx={{ borderRadius: 50, height: 56, flex: 1 }}
            variant={"contained"}
            color="primary"
            onClick={onSubmit}
            disabled={shoppingCart.length === 0}
        >
            Slutför Köp
        </Button>
    </DialogActions>
);
