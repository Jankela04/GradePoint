import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/lib/react-query";
import { ThemeProvider } from "@/context/ThemeContext";

type MainProvidersProps = {
    children: React.ReactNode;
};

function MainProviders({ children }: MainProvidersProps) {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <BrowserRouter>{children}</BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default MainProviders;
