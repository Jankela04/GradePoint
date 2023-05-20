import { z } from "zod";

const noteFormSchema = z.object({
    title: z.string(),
    tag: z.string(),
    text: z.string(),
});

export type NoteForm = z.infer<typeof noteFormSchema>;

export default noteFormSchema;
