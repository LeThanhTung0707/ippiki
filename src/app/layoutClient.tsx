"use client";

import { Header } from "@/components/organisms";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          maxSnack={3}
          autoHideDuration={4000}
        >
          <Header />
          <div className="pt-[90px]">{children}</div>
        </SnackbarProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
}
