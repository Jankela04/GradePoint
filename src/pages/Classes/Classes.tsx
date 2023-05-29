import { Title } from "@/components/Elements";
import ClassList from "./ClassList";
import { MainLayout } from "@/layout/MainLayout";

function Classes() {
    return (
        <MainLayout>
            <Title>Classes</Title>
            <ClassList />
        </MainLayout>
    );
}

export default Classes;
