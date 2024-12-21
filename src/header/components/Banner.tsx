import { Box, styled, Typography } from "@mui/material";
import imageUrl from "../../assets/alter.png";

const StyledBox = styled(Box)({
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
});

const StyledTypography = styled(Typography)({
    position: "absolute",
    flexWrap: "wrap",
    maxWidth: 200,
    padding: 2,
    fontWeight: 700,
});

export const Banner = () => (
    <StyledBox>
        <img src={imageUrl} style={{ height: 233 }} alt="placeholder" />
        <StyledTypography variant="h5" textAlign="center">
            ON DEMAND SERVICES
        </StyledTypography>
    </StyledBox>
);
