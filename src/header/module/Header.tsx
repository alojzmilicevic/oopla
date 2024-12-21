import { Card, CardHeader } from "@mui/material";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/NavBar";
import { AppState } from "../../App";

type HeaderProps = Pick<AppState, "shoppingCart">;

export const Header = ({ shoppingCart }: HeaderProps) => {
    return (
        <>
            <Navbar shoppingCart={shoppingCart} />
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
};
