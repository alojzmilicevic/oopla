import { DialogTitle, styled, Typography } from "@mui/material";
import { CloseButton } from "./CloseButton";

type TitleProps = {
    icon: string;
    onClose: () => void;
};

const StyledDialogTitle = styled(DialogTitle)`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
`;

export const Title = ({ icon, onClose }: TitleProps) => (
    <StyledDialogTitle bgcolor={"secondary.light"}>
        <CloseButton onClose={onClose} />
        <Typography fontSize={100}>{icon}</Typography>
    </StyledDialogTitle>
);
