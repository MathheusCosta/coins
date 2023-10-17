import * as React from "react";

import { cn } from "@/lib/utils";
import { UseFormRegister } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<any>;
  name: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  register,
  name,
  error,
  ...props
}) => {
  return (
    <>
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-zinc-900",
          className
        )}
        type={type}
        {...props}
        {...(register &&
          register(name!, type === "number" ? { valueAsNumber: true } : {}))}
      />
      {error && (
        <span className="text-xs -mt-3 ml-3 text-red-500">{error}</span>
      )}
    </>
  );
};

Input.displayName = "Input";

export { Input };
