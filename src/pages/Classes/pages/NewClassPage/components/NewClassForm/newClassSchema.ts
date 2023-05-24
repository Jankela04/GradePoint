import { z } from "zod";
import { REQUIRED_ERROR_MESSAGE } from "@/constants";

const newClassSchema = z.object({
    class: z.string().nonempty({ message: REQUIRED_ERROR_MESSAGE }),
    teacher: z.string().nonempty({ message: REQUIRED_ERROR_MESSAGE }),
});

type NewClassForm = z.infer<typeof newClassSchema>;

export { newClassSchema, type NewClassForm };
