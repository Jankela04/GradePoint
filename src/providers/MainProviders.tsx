import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/react-query";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

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
