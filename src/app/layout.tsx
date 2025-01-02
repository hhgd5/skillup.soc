import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { DialogProvider } from "@/context/DialogContext";
import DialogForm from "@/components/DialogForm";

export const metadata: Metadata = {
  title: "SkillUp Society",
  description: "SkillUp Society Club's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <DialogProvider>
          <Header />
          <DialogForm />
          <main className="flex-grow">{children}</main>
        </DialogProvider>
        <Footer />
      </body>
    </html>
  );
}
