import { RouterProvider } from "react-router-dom";
import router from "./routes";
import MainProviders from "./providers/MainProviders";

function App() {
    return (
        <MainProviders>
            <RouterProvider router={router} />
        </MainProviders>
    );
}

export default App;
