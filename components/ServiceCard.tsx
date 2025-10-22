// components/ServiceCard.tsx
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  title: string;
  tagline: string;
  Icon: LucideIcon;
  items: string[];
  className?: string;
};

export default function ServiceCard({
  title,
  tagline,
  Icon,
  items,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 hover:border-teal-400/30 transition p-5 h-full",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-teal-300" aria-hidden />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-white/80">{tagline}</p>
      <ul className="mt-3 space-y-1 text-sm text-white/70 list-disc pl-5">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
