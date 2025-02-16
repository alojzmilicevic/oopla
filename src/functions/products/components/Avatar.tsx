import { Avatar as MuiAvatar } from "@mui/material";

export const Avatar = ({ icon }: { icon: string }) => (
    <MuiAvatar
        variant="square"
        sx={{
            height: "100%",
            width: 80,
            bgcolor: "#33333326",
            fontSize: 40,
        }}
    >
        {icon}
    </MuiAvatar>
);
