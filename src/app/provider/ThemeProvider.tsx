"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LoadingPage from "@/components/loading/LoadingPage";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <div className=" h-screen w-screen flex bg-yellow-300  justify-center items-center">
        <LoadingPage />
      </div>
    );
  }

  return (
    <NextThemesProvider {...props} defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}
