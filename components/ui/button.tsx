import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "glass";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex h-11 items-center justify-center gap-2 rounded-sm border px-5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "border-white bg-white text-black hover:border-hobroPink hover:bg-hobroPink hover:text-black",
        variant === "ghost" &&
          "border-white/15 bg-transparent text-white hover:border-hobroPink hover:text-hobroPink",
        variant === "glass" &&
          "border-white/15 bg-transparent text-white hover:border-hobroPink hover:text-hobroPink",
        className,
      )}
      {...props}
    />
  );
}
