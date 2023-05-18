export type Note = {
    id: string;
    title: string;
    tag: string;
    text: string;
    created: Date;
    edited: Date;
};

export type Grade = {
    grade: number;
    date: Date;
};
export type Class = {
    id: string;
    class: string;
    teacher: string;
    grades: Grade[];
};
