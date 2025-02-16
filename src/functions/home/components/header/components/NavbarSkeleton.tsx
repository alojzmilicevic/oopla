import {
    alpha,
    Skeleton,
    Stack,
    styled,
    Typography,
    useTheme,
} from "@mui/material";

const StyledStack = styled(Stack)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const NavbarSkeleton = () => {
    const theme = useTheme();

    return (
        <StyledStack direction={"row"} spacing={2}>
            <Typography variant="body1" sx={{ width: 80 }}>
                <Skeleton />
            </Typography>
            <Typography variant="h3" sx={{ width: 80 }}>
                <Skeleton
                    sx={{ bgcolor: alpha(theme.palette.primary.light, 0.4) }}
                    animation="wave"
                />
            </Typography>
        </StyledStack>
    );
};
