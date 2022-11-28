import { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./hooks/trpc";
import { httpBatchLink } from "@trpc/client";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "htttp://localhost:5000/trpc",
          // headers() {
          //   return {};
          // },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
