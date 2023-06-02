import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/lib/react-query";
import { ThemeProvider } from "@/context/ThemeContext";
import { LoadingPage } from "@/features/LoadingPage";

type MainProvidersProps = {
    children: React.ReactNode;
};

function MainProviders({ children }: MainProvidersProps) {
    return (
        <ThemeProvider>
            <Suspense fallback={<LoadingPage />}>
                <QueryClientProvider client={queryClient}>
                    {import.meta.env.DEV && <ReactQueryDevtools />}
                    <BrowserRouter>{children}</BrowserRouter>
                </QueryClientProvider>
            </Suspense>
        </ThemeProvider>
    );
}

export default MainProviders;
