import type { Metadata } from "next";
import { rethinkSans } from "@/utils/fonts";
import { SessionProvider } from "@/contexts/SessionContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edu.AI",
  description: "AI-Powered Educational Platform Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
