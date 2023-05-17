import { useEffect, useState } from "react";
import axiosService from "@/services/axios";

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosService.get(url);
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
