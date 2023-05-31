import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Note } from "@/types";
import axios from "@/lib/axios";
import { TNoteForm } from "../noteFormSchema";
import queryClient from "@/lib/react-query";

const createNewNote = async (data: TNoteForm) => {
    const newNote: Note = {
        id: uuidv4(),
        ...data,
        created: new Date(),
        edited: new Date(),
    };
    await axios.post("/notes", newNote);
};

type UpdateData = {
    note: Note;
    data: TNoteForm;
};

const updateNote = async (updateData: UpdateData) => {
    const { data, note } = updateData;

    const editedNote: Note = {
        ...data,
        id: note.id,
        created: note.created,
        edited: new Date(),
    };
    await axios.put(`/notes/${note.id}`, editedNote);
};

const useNoteMutations = () => {
    const navigate = useNavigate();

    const newNoteMutation = useMutation({
        mutationKey: ["newNote"],
        mutationFn: (data: TNoteForm) => createNewNote(data),
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"]);
            navigate("/notes");
        },
    });
    const updateNoteMutation = useMutation({
        mutationKey: ["updateNote"],
        mutationFn: (updateData: UpdateData) => updateNote(updateData),
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"]);
            navigate("/notes");
        },
    });

    const createNote = newNoteMutation.mutate;
    const editNote = updateNoteMutation.mutate;

    return { createNote, editNote };
};

export default useNoteMutations;
