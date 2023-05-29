import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/react-query";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type MainProvidersProps = {
    children: React.ReactNode;
};

function MainProviders({ children }: MainProvidersProps) {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default MainProviders;
