"use client";

import { Home, MapPin, BadgeDollarSign } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Home,
    title: "Mudanza Fácil",
    description:
      "Éclet Mobiliere hace que vender tu casa actual sea más fácil, con apoyo confiable, menos estrés y una mudanza más fluida a tu nuevo hogar.",
  },
  {
    icon: MapPin,
    title: "Intercambio de Vivienda",
    description:
      "Con el Intercambio de Vivienda, compramos tu casa actual, ahorrándote tiempo, costos y la incertidumbre, haciendo que tu mudanza a un nuevo hogar sea mucho más sencilla.",
  },
  {
    icon: Home,
    title: "Asesoría Hipotecaria",
    description:
      "Accede a asesoría especializada y una amplia variedad de productos hipotecarios, adaptados a la perfección a las necesidades de nuestras viviendas.",
  },
];

function ValueCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-5 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon circle */}
      <div className="w-12 h-12 rounded-full border border-verity-dark/20 flex items-center justify-center">
        <Icon size={18} strokeWidth={1.5} className="text-verity-dark/60" />
      </div>

      <h3 className="font-serif text-4xl text-verity-dark font-light">
        {title}
      </h3>
      <p className="font-sans text-sm text-verity-dark/60 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  );
}

export function ValuesSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className="bg-[#F5F0E8] py-20 px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-4 mb-14 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <p className="font-sans text-base tracking-widest text-verity-dark/50 uppercase flex-shrink-0">
           Nuestros valores
        </p>
        <div className="flex-1 h-[1px] bg-verity-dark/10" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {values.map((v, i) => (
          <ValueCard key={v.title} {...v} index={i} />
        ))}
      </div>
    </section>
  );
}