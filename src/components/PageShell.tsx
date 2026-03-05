import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
  noNav?: boolean;
}

const PageShell = ({ children, className, noPadding, noNav }: PageShellProps) => {
  return (
    <div className={cn("min-h-screen bg-background", !noNav && "pb-20")}>
      <div
        className={cn(
          "mx-auto w-full max-w-xl",
          !noPadding && "px-5 py-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default PageShell;
