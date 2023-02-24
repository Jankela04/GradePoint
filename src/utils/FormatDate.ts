function formatDate(date: string | Date): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const options = {
        weekday: undefined as "short" | "long" | "narrow" | undefined,
        year: "numeric" as const,
        month: "short" as const,
        day: "numeric" as const,
        hour: "numeric" as const,
        minute: "numeric" as const,
        second: "numeric" as const,
    };

    return dateObj.toLocaleString("en-US", options).replace(/,/g, "");
    // => Sep 16 2024 10:20:11 AM
}

function shortFormatDate(date: string | Date): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const options = {
        year: "numeric" as const,
        month: "short" as const,
        day: "numeric" as const,
    };

    return dateObj.toLocaleString("en-US", options).replace(/,/g, "");
    // => Sep 16 2024
}

export { formatDate, shortFormatDate };
