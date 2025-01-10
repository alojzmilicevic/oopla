import { Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

export const OrdersButton = ({onClick}: {onClick: () => void}) => (
    <Button
        variant={"contained"}
        size="small"
        color="primary"
        sx={{
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 16,
            padding: 2,
            width: "90%",
        }}
        onClick={onClick}
    >
        <ArticleIcon style={{ marginRight: 8 }} />
        Se Beställning | 0 kr
    </Button>
);
