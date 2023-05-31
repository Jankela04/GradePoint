import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { Note } from "@/types";

const getNotes = async () => {
    const res = await axios.get("/notes");
    return res.data as Note[];
};

const useNotesQuery = () =>
    useQuery({ queryKey: ["notes"], queryFn: getNotes });

export default useNotesQuery;
