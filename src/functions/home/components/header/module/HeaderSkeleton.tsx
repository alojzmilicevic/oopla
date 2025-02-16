import { Card, CardHeader, Skeleton, styled, Typography } from "@mui/material";
import { NavbarSkeleton } from "../components/NavbarSkeleton";
import { BannerSkeleton } from "../components/BannerSkeleton";

const CustomCardHeader = styled(CardHeader)({
    backgroundColor: "#f0f0f0",
    padding: 4,
    "& .MuiCardHeader-content": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

export const HeaderSkeleton = () => (
    <>
        <NavbarSkeleton />
        <BannerSkeleton />
        <Card variant="outlined">
            <CustomCardHeader
                title={
                    <Typography variant="h3">
                        <Skeleton width={180} animation="wave"/>
                    </Typography>
                }
                subheader={<Skeleton width={200} animation="wave"/>}
            />
        </Card>
    </>
);
