import { Helmet } from "react-helmet-async";

type HeadProps = {
    title: string;
    description?: string;
};
function Head({ title, description = "" }: HeadProps) {
    return (
        <Helmet title={`${title} - GradePoint`}>
            <meta name="description" content={description} />
        </Helmet>
    );
}

export default Head;
