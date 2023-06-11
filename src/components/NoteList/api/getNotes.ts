import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { Note } from "@/types";

const getNotes = async (tag?: string) => {
    const path = tag ? `/notes?tag=${tag}` : "/notes";

    const res = await axios.get(path);
    return res.data as Note[];
};

const useNotesQuery = (tag?: string) =>
    useQuery({ queryKey: ["notes"], queryFn: () => getNotes(tag) });

export default useNotesQuery;
