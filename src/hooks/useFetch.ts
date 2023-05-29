import { useEffect, useState } from "react";
import axios from "@/lib/axios";

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setLoading(false);
                setData(res.data);
            } catch (err) {
                setLoading(false);
                setError(err);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
