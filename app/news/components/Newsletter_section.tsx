"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { cn } from "@/lib/utils";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !email) return;
    console.log("Subscribe:", email);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-16">
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        {/* Left: Headline */}
        <h2 className="font-serif text-4xl md:text-5xl text-verity-dark font-light leading-tight">
         Mantente al día con
          <br />
          <span className="italic">ÉCLET MOBILIERE</span>
        </h2>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email input */}
          <div className="flex border border-verity-dark/20 hover:border-verity-dark/40 transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email..."
              className="flex-1 px-4 py-3 bg-transparent font-sans text-sm text-verity-dark placeholder:text-verity-dark/40 outline-none"
            />
            <button
              type="submit"
              className="px-4 text-verity-dark/40 hover:text-verity-dark transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 flex-shrink-0 w-4 h-4 cursor-pointer accent-[#1A1A1A]"
            />
            <span className="font-sans text-xs text-verity-dark/50 leading-relaxed">
              Confirmo que he leído y comprendido la{" "}
              <a href="#" className="underline hover:text-verity-dark transition-colors">Politica de privacidad</a>
              {" "}{" "}
              , y acepto los{" "}
              <a href="#" className="underline hover:text-verity-dark transition-colors">Terminos y condiciones</a>.
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}