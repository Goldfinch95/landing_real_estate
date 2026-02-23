"use client";

import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  cta?: string;
}

export function SectionHeader({ label, cta }: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between border-b border-verity-dark/10 pb-4 transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <p className="font-sans text-base tracking-widest text-verity-dark/50 uppercase">
        {label}
      </p>
      {cta && (
        <a
          href="#"
          className="flex items-center gap-2 font-sans text-base tracking-widest text-verity-dark/50 hover:text-verity-dark uppercase transition-colors group"
        >
          {cta}
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}