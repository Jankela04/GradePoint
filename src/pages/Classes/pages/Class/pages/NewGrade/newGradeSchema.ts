import { z } from "zod";
import { INVALID_GRADE_MESSAGE } from "@/constants";

const today = new Date();
today.setHours(23, 59, 59, 999);

const newGradeSchema = z.object({
    grade: z.coerce
        .number()
        .min(1, { message: INVALID_GRADE_MESSAGE })
        .max(5, { message: INVALID_GRADE_MESSAGE }),
    date: z.date().max(today),
});

export default newGradeSchema;
