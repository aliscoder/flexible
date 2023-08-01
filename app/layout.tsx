import { Footer, Navbar } from "@components";
import "@styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexible",
  description: "Nice Work",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
