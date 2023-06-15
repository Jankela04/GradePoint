import { QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/lib/react-query";
import { ThemeProvider } from "@/context/ThemeContext";
import { LoadingPage } from "@/features/misc/LoadingPage";
import { ErrorFallback } from "@/features/misc/ErrorFallback";
import { HelmetProvider } from "react-helmet-async";

type MainProvidersProps = {
    children: React.ReactNode;
};

function MainProviders({ children }: MainProvidersProps) {
    return (
        <ThemeProvider>
            <ErrorBoundary fallbackRender={ErrorFallback}>
                <Suspense fallback={<LoadingPage />}>
                    <HelmetProvider>
                        <QueryClientProvider client={queryClient}>
                            {import.meta.env.DEV && <ReactQueryDevtools />}
                            <BrowserRouter>{children}</BrowserRouter>
                        </QueryClientProvider>
                    </HelmetProvider>
                </Suspense>
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default MainProviders;
