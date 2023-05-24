import { z } from "zod";

const newClassSchema = z.object({
    class: z.string().nonempty(),
    teacher: z.string().nonempty(),
});

type NewClassForm = z.infer<typeof newClassSchema>;

export { newClassSchema, type NewClassForm };
