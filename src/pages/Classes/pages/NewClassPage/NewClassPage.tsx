import { Title } from "@/components/Elements";
import NewClassForm from "./NewClassForm/NewClassForm";
import { MainLayout } from "@/layout/MainLayout";

function NewClassPage() {
    return (
        <MainLayout>
            <Title>Create New Class</Title>
            <NewClassForm />
        </MainLayout>
    );
}

export default NewClassPage;
