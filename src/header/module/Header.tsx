import { Card, CardHeader, Skeleton, styled, Typography } from "@mui/material";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/NavBar";
import { NavbarSkeleton } from "../components/NavbarSkeleton";
import { BannerSkeleton } from "../components/BannerSkeleton";

export const Header = () => (
    <>
        <Navbar />
        <Banner />
        <Card variant="outlined">
            <CardHeader
                sx={{ textAlign: "center" }}
                titleTypographyProps={{ fontWeight: 700 }}
                title="Aloma Services"
                subheader="Öppettider: 21:00 - 00:00"
            />
        </Card>
    </>
);

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
