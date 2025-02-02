"use client";
import { ActiveLink } from "@/components/ui/active-link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import { useAppContext } from "./app-context";
import React from "react";
import {
  FcSettings,
  FcDoughnutChart,
  FcAddDatabase,
  FcMoneyTransfer,
  FcFilingCabinet,
} from "react-icons/fc";
import { IconType } from "react-icons";

const routes: { name: string; url: string; icon: IconType }[] = [
  { name: "Dashboard", url: "/dashboard", icon: FcDoughnutChart },
  { name: "Expenses", url: "/expenses", icon: FcAddDatabase },
  { name: "Budget", url: "/budget", icon: FcFilingCabinet },
  { name: "Savings", url: "/savings", icon: FcMoneyTransfer },
  { name: "Configuration", url: "/configuration", icon: FcSettings },
];

export const Sidebar: React.FC<{
  setMonth: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setMonth }) => {
  const appContext = useAppContext();
  return (
    <Card className={clsx("h-full min-w-36 w-1/6 flex flex-col")}>
      <div className="flex-1">
        <CardHeader className={clsx("border-b-2 text-center")}>
          <CardTitle>Keeper</CardTitle>
        </CardHeader>
        <CardContent className={clsx("flex flex-col p-0")}>
          {routes.map((route) => (
            <ActiveLink href={route.url} key={route.url}>
              {<route.icon />}
              {route.name}
            </ActiveLink>
          ))}
          <div className={clsx("flex-1 border-t-2 pt-2")}>
            <Label htmlFor="month" className={clsx("block text-center mb-3")}>
              Month
            </Label>
            <Input
              type="month"
              id="month"
              className="block"
              value={appContext.month}
              onChange={(e) => setMonth(e.target.value)}
            ></Input>
          </div>
        </CardContent>
      </div>
      <CardFooter className={clsx("border-t-2 text-center")}>
        <p>{appContext.month}</p>
      </CardFooter>
    </Card>
  );
};
