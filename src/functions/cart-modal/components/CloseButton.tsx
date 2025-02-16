import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type CloseButtonProps = {
    onClose: () => void;
};

export const CloseButton = ({ onClose }: CloseButtonProps) => (
    <IconButton
        onClick={onClose}
        sx={{
            position: "absolute",
            right: 16,
            top: 16,
            backgroundColor: "#5f5f5f53",
        }}
    >
        <CloseIcon />
    </IconButton>
);
