import { Typography } from "@mui/material";
import React from "react";
import { Product } from "../interface/interface";

type TitleProps = Pick<Product, "name">;

export const Title = React.memo(({ name }: TitleProps) => (
    <Typography
        variant="body1"
        display="flex"
        alignItems="center"
        fontWeight={"bold"}
    >
        {name}
    </Typography>
));