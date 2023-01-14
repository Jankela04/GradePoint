import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: string | number) => {
    const [value, setValue] = useState(() => {
        const savedItem = localStorage.getItem(key);

        if (savedItem !== null) {
            return JSON.parse(savedItem);
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;
