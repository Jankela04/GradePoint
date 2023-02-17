function formatDate(date: Date): string {
    const options = {
        weekday: undefined as "short" | "long" | "narrow" | undefined,
        year: "numeric" as const,
        month: "short" as const,
        day: "numeric" as const,
        hour: "numeric" as const,
        minute: "numeric" as const,
        second: "numeric" as const,
    };

    return date.toLocaleString("en-US", options).replace(/,/g, "");
}

export default formatDate;
