import { z } from "zod";

const noteFormSchema = z.object({
    title: z.string().nonempty(),
    tag: z.string().nonempty(),
    text: z.string().nonempty(),
});

export type NoteForm = z.infer<typeof noteFormSchema>;

export default noteFormSchema;
