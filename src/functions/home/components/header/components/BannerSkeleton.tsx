import { Box, Skeleton, styled } from "@mui/material";
import { StyledBox, StyledTypography } from "./Banner";
import imageUrl from "../../../../../assets/alter.png";

const BlurOverlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(10px)", 
    backgroundColor: "rgba(255, 255, 255, 0.2)", 
    pointerEvents: "none",
  });

export const BannerSkeleton = () => (
    <StyledBox>
        <img src={imageUrl} style={{ height: 233 }} alt="placeholder" />
        <BlurOverlay />
        <StyledTypography variant="h3" textAlign="center" mr={2}>
            <Skeleton width={120} />
        </StyledTypography>
    </StyledBox>
)