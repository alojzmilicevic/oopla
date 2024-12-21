import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3d9466",
        },
        secondary: {
            main: "#f9e4a8",
        },
        background: {
            default: "#f5f5f5", // Light gray, inspired by the clean design
            paper: "#ffffff", // White for cards and elevated elements
        },
    },
});

export default theme;