import { Box, Skeleton } from "@mui/material";

export type StatusItem = {
    completed: boolean;
    key: string;
};

type Props = {
    items: StatusItem[];
    small?: boolean;
};

const completedColor = "rgba(255, 30, 100, 0.6)";
const pendingColor = "rgba(255, 200, 200, 0.4)";

export const StatusProgress = ({ items, small = false }: Props) => (
    <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
        {items.map((item: StatusItem) => (
            <Skeleton
                key={item.key}
                animation="wave"
                sx={{
                    bgcolor: item.completed ? completedColor : pendingColor,
                    flex: 1,
                    height: small ? 8 : 20,
                }}
            />
        ))}
    </Box>
);
