import { Head, Title } from "@/components/Elements";
import NewClassForm from "./NewClassForm/NewClassForm";

function NewClassPage() {
    return (
        <>
            <Head title="Create Class" />
            <Title>Create New Class</Title>
            <NewClassForm />
        </>
    );
}

export default NewClassPage;
