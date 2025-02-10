import { Box, DialogTitle, Typography } from "@mui/material";

type TitleProps = {
    icon: string;
};

export const Title = ({ icon }: TitleProps) => (
    <DialogTitle p={0} bgcolor={"secondary.light"}>
        <Box
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            p={0}
            padding={0}
        >
            <Typography
                fontSize={100}
            >
                {icon}
            </Typography>
        </Box>
    </DialogTitle>
);
