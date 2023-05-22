import { z } from "zod";

const today = new Date();
today.setHours(23, 59, 59, 999);

const newGradeSchema = z.object({
    grade: z.coerce.number().min(1).max(5),
    date: z.date().max(today),
});

export default newGradeSchema;
