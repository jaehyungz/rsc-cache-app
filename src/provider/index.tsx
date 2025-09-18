"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function APIProvider({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        throwOnError: (error, query) => {
          // console.log(error);
          // console.log(query);
          // query.invalidate();
          // return true;
          return false;
        },
        // throwOnError: undefined,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}

export default APIProvider;
