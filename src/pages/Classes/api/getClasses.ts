import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { Class } from "@/types";

const getClasses = async () => {
    const res = await axios.get("/classes");
    return res.data as Class[];
};

const useClassesQuery = () =>
    useQuery({ queryKey: ["classes"], queryFn: getClasses });

export default useClassesQuery;
