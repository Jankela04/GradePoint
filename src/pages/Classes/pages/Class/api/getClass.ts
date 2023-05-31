import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { Class } from "@/types";

const getClass = async (ID: string) => {
    const res = await axios.get(`/classes/${ID}`);
    return res.data as Class;
};

const useClassQuery = (ID: string) =>
    useQuery({ queryKey: ["classes", ID], queryFn: () => getClass(ID) });

export default useClassQuery;
