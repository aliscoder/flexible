import Footer from "@components/Footer";
import Nav from "@components/Nav";
import "@styles/global.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "My App",
  description: "Share My New Tools",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans flex flex-col justify-between w-full bg-slate-200 min-h-screen`}>
        <Nav />
        <div className="p-6 flex-1 flex">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
