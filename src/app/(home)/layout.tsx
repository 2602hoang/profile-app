import type { Metadata } from "next";
import "../../styles/globals.css";
import { ThemeProvider } from "../../provider/ThemeProvider";
import AosClient from "../provider/AosClient";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AosClient>{children}</AosClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
