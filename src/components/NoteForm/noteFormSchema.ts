import { z } from "zod";
import { REQUIRED_ERROR_MESSAGE } from "@/constants";

const noteFormSchema = z.object({
    title: z.string().nonempty({ message: REQUIRED_ERROR_MESSAGE }),
    tag: z.string().nonempty({ message: REQUIRED_ERROR_MESSAGE }),
    text: z.string().nonempty({ message: REQUIRED_ERROR_MESSAGE }),
});

export type TNoteForm = z.infer<typeof noteFormSchema>;

export default noteFormSchema;
