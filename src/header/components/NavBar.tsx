import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const StyledAppBar = styled(AppBar)`
    user-select: none;
    background-color: ${(props) => props.theme.palette.background.paper};
    box-shadow: none;
    color: ${(props) => props.theme.palette.primary.main};
`;


export const Navbar = () => (
    <StyledAppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
                variant="h5"
                fontWeight={800}
                lineHeight={1.25}
                textAlign={"center"}
                margin={0}
            >
                Oopla
            </Typography>
        </Toolbar>
    </StyledAppBar>
);
