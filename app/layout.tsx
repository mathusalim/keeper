"use client";
import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";

import { AppProvider } from "./app-context";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

const currentYearAndMonth = () => {
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const date = new Date();
  return date.getFullYear() + "-" + months[date.getMonth()];
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [month, setMonth] = useState<string>(currentYearAndMonth());
  return (
    <html lang="en">
      <body
        className={clsx(
          "w-full h-screen overflow-y-auto flex items-start bg-slate-900"
        )}
      >
        <AppProvider date={month}>
          <Sidebar setMonth={setMonth} />
          <div className={clsx("h-full flex-1")}>{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}
