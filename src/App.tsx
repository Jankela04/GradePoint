import MainProviders from "./providers/MainProviders";
import AppRoutes from "./routes";

function App() {
    return (
        <MainProviders>
            <AppRoutes />
        </MainProviders>
    );
}

export default App;
