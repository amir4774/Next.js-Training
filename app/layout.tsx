import "../styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderProvider from "../components/HeaderProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GITHUB PROFILE FINDER",
  description: "Github Profile Finder with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderProvider />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
