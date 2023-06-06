import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { Note } from "@/types";

const getClassNotes = async (tag: string) => {
    const res = await axios.get(`/notes?tag=${tag}`);
    return res.data as Note[];
};

const useClassNotesQuery = (tag: string | undefined) =>
    useQuery({
        queryKey: ["notes", tag],
        queryFn: () => getClassNotes(tag!),
        enabled: tag !== undefined,
    });

export default useClassNotesQuery;
