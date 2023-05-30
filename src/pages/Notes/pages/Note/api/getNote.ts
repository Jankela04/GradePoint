import axios from "@/lib/axios";
import type { Note } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getNoteById = async (ID: string) => {
    const res = await axios.get(`/notes/${ID}`);
    return res.data as Note;
};

const useNoteQuery = (ID: string) => {
    return useQuery({
        queryKey: ["notes", ID],
        queryFn: () => getNoteById(ID),
    });
};

export default useNoteQuery;
