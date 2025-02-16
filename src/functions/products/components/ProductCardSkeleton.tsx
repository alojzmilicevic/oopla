import { Avatar, Box, Card, CardActionArea, CardHeader, Skeleton, Typography } from "@mui/material";

export const ProductCardSkeleton = () => (
    <Card
        sx={{
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            height: 100,
        }}
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
            <Box sx={{ width: 80, height: 80 }} />
        </Avatar>
        <CardActionArea>
            <CardHeader
                title={
                    <Typography variant="h6" display="block">
                        <Skeleton sx={{ bgcolor: "#838383" }} animation="wave"/>
                    </Typography>
                }
                titleTypographyProps={{ variant: "h6" }}
                subheader={
                    <Typography variant="caption" display="block">
                        <Skeleton animation="wave" />
                    </Typography>
                }
                subheaderTypographyProps={{
                    variant: "body2",
                    display: "block",
                }}
            />
        </CardActionArea>
    </Card>
);
