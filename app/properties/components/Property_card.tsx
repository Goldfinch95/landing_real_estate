"use client";

import { Heart } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { cn } from "@/lib/utils";
import type { Property } from "../types/property";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden group">
        <div className="aspect-[4/3] bg-stone-200 overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* SOLD badge */}
        {property.sold && (
          <span className="absolute top-3 left-3 bg-[#8B2635] text-white font-sans text-[10px] tracking-widest uppercase px-2 py-1">
            VENDIDO
          </span>
        )}

        {/* Save button */}
        {/*<button
          aria-label="Save property"
          className="absolute bottom-3 right-3 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
        >
          <Heart size={14} strokeWidth={1.5} className="text-verity-dark" />
        </button>*/}
      </div>

      {/* Info */}
      <div className="pt-4 flex flex-col gap-1">
        {/* Top row: name + price */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-sans text-base tracking-widest text-verity-dark/50 uppercase">
              {property.name}
            </p>
            <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "#a7833a" }}>
              No. {property.number}
            </p>
            <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "#a7833a" }}>
              {property.development}, {property.location}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            {property.sold ? (
              <span className="font-sans text-xs tracking-widest text-verity-dark uppercase font-medium">
                Vendido
              </span>
            ) : (
              <span className="font-serif text-xl text-verity-dark">
                $USS {property.price?.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-verity-dark/10 my-2" />

        {/* Beds / baths + tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-sans text-base tracking-widest text-verity-dark/60 uppercase">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7v11M21 7v11M3 12h18M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M9 12V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
              {property.beds}
            </span>
            <span className="flex items-center gap-1 font-sans text-base tracking-widest text-verity-dark/60 uppercase">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6 6 3 3 6"/><path d="M5 4v6M3 10h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2Z"/><path d="M12 20v-4"/></svg>
              {property.baths}
            </span>
          </div>
          <span className="font-sans text-xs tracking-widest text-verity-dark/40 uppercase">
            {property.highlight}
          </span>
        </div>

        {/* Tag pill */}
        {property.tag && (
          <div className="mt-2">
            <span
              className="inline-block font-sans text-base tracking-widest text-white uppercase px-3 py-1"
              style={{ backgroundColor: "#bead8b" }}
            >
              {property.tag}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}