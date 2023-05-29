import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
    queries: {
        refetchOnWindowFocus: false,
        retry: 3,
        suspense: true,
        useErrorBoundary: true,
    },
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

export default queryClient;
