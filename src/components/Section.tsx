import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}

export function Section({ children, className, accent = false }: SectionProps) {
  return (
    <section 
      className={cn(
        "py-16 md:py-24",
        accent && "bg-accent/30",
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  );
}