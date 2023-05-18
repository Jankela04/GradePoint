import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [value, setValue] = useState(() => {
        const savedItem = localStorage.getItem(key);

        if (savedItem !== null) {
            return JSON.parse(savedItem) as T;
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue] as const;
};

export default useLocalStorage;
