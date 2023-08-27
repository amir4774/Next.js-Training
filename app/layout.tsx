"use client";
import "../styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { Store } from "../Redux/Store";

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
        <Provider store={Store}>
          <Header />
          <div className="container">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
