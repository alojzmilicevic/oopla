import { alpha, Skeleton, Stack, Typography, useTheme } from "@mui/material";

export const NavbarSkeleton = () => {
    const theme = useTheme();

    return (
        <Stack
            direction={"row"}
            display={"flex"}
            sx={{
                backgroundColor: "secondary.main",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            pl={2}
            pr={2}
        >
            <Typography variant="body1" sx={{ width: 80 }}>
                <Skeleton />
            </Typography>
            <Typography variant="h3" sx={{ width: 80 }}>
                <Skeleton
                    sx={{ bgcolor: alpha(theme.palette.primary.light, 0.4) }}
                    animation="wave"
                />
            </Typography>
        </Stack>
    );
};