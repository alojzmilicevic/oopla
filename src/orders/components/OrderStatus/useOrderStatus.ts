import { OrderStatuses } from "../../interface/interface";
import { OrderStatusProps } from "./OrderStatus";

export function useOrderStatus({
    latestOrder,
}: Pick<OrderStatusProps, "latestOrder">) {
    const statusText = statusTexts[latestOrder.status as OrderStatuses];

    // Assuming latestOrder.status is a valid status key
    const currentStatusRank =
        statusRanks.find((status) => status.key === latestOrder.status)?.rank ||
        0;

    const statusItems = statusRanks.map((status) => ({
        completed: currentStatusRank >= status.rank,
        key: status.key,
    }));

    return {
        statusItems,
        statusText,
    };
}

export const statusTexts = {
    [OrderStatuses.Pending]: {
        long: "Din beställning väntar på att bekräftas av oopla",
        short: "Tack för din beställning, den är under behandling",
    },
    [OrderStatuses.InProgress]: {
        long: "Din beställning är på g och snart framme",
        short: "På g",
    },
    [OrderStatuses.Completed]: {
        long: "Din beställning är levererad",
        short: "Levererad beställning",
    },
    [OrderStatuses.Cancelled]: {
        long: "Din beställning är avbruten",
        short: "Avbruten beställning",
    },
};

export const statusRanks = [
    { key: "pending", rank: 1 },
    { key: "in-progress", rank: 2 },
    { key: "completed", rank: 3 },
];
