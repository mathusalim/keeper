"use client";
import { usePathname, useRouter } from "next/navigation";
import { CSSProperties, MouseEventHandler } from "react";
import { Button } from "./button";
import clsx from "clsx";

export const ActiveLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ children, href }) => {
  const path = usePathname();
  const navigation = useRouter();

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();

    !path.includes(href) && navigation.replace(href);
  };

  return (
    <Button
      variant="link"
      onClick={handleClick}
      type="button"
      className={clsx(
        "text-primary-foreground rounded-sm ",
        path.includes(href)
          ? "bg-gradient-to-r from-card to-fuchsia-800 justify-start flex-row-reverse"
          : "text-start hover:bg-gradient-to-l hover:from-card hover:to-fuchsia-600 hover:opacity-70 justify-start"
      )}
    >
      {children}
    </Button>
  );
};
