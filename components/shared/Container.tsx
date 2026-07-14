import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
   return (
      <div className={cn("w-4/5 mx-auto px-2 md:px-4", className)}>{children}</div>
   )
}