"use client";

import { useState } from "react";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const quickLinks = [
  { label: "Propiedades destacadas", href: "#" },
  { label: "Propiedades guardadas", href: "#" },
  { label: "Tu camino hacia el hogar", href: "#" },
  { label: "Nuestra misión", href: "#" },
  { label: "Únete a nuestra familia", href: "#" },
  { label: "Terrenos en venta", href: "#" },
];

const legalLinks = [
  { label: "Customer care & complaints", href: "#" },
  { label: "Cookie policy", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Cookie preferences", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !email) return;
    console.log("Footer subscribe:", email);
  };

  return (
    <footer className="bg-[#1A1A18] text-white">
      {/* Main footer grid */}
      <div className="px-6 md:px-10 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Column 1: Quick links */}
        <div>
          <h4 className="font-serif text-2xl text-white/90 italic mb-4">Enlaces Útiles</h4>
          <hr className="border-white/10 mb-6" />
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-[10px] tracking-widest text-white/50 hover:text-white uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Get in touch */}
        <div>
          <h4 className="font-serif text-2xl text-white/90 italic mb-4">Contacto</h4>
          <hr className="border-white/10 mb-6" />
          <div className="space-y-6">
            <div>
  <p className="font-sans text-[10px] tracking-widest text-white/40 uppercase mb-1">Teléfono</p>
  <a
    href="tel:+541134567890"
    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
  >
    +54 11 3456 7890
  </a>
</div>
<address className="not-italic font-sans text-sm text-white/50 leading-relaxed">
  ÉCLET MOBILIERE<br />
  Av. Santa Fe 1234<br />
  Palermo, CABA<br />
  Buenos Aires, Argentina
</address>
          </div>
        </div>

        {/* Column 3: Stay up to date */}
       <div>
  <h4 className="font-serif text-2xl text-white/90 italic mb-4">Mantente al día</h4>
  <hr className="border-white/10 mb-6" />

  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    {/* Entrada de correo electrónico */}
    <div className="flex border border-white/20 hover:border-white/40 transition-colors">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        className="flex-1 px-4 py-3 bg-transparent font-sans text-sm text-white placeholder:text-white/30 outline-none"
      />
      <button
        type="submit"
        className="px-4 text-white/30 hover:text-white transition-colors"
        aria-label="Suscribirse"
      >
        <ArrowRight size={16} strokeWidth={1.5} />
      </button>
    </div>

    {/* Checkbox */}
    <label className="flex items-start gap-3 cursor-pointer group">
      <div className="relative mt-0.5 flex-shrink-0">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="sr-only"
        />
        <div
          className={cn(
            "w-4 h-4 border transition-colors",
            agreed
              ? "bg-white border-white"
              : "border-white/30 group-hover:border-white/60"
          )}
        >
          {agreed && (
            <svg viewBox="0 0 16 16" fill="none" className="w-full h-full p-[3px]">
              <path d="M3 8l3.5 3.5L13 5" stroke="#1A1A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
      <span className="font-sans text-[10px] text-white/40 leading-relaxed">
        Confirmo que he leído y comprendido la{" "}
        <a href="#" className="underline hover:text-white transition-colors">Política de privacidad</a>
        
        , y acepto los{" "}
        <a href="#" className="underline hover:text-white transition-colors">Términos y condiciones</a>.
      </span>
    </label>
  </form>

  {/* Iconos sociales */}
  <div className="flex gap-4 mt-8">
    {[
      {
        label: "Facebook",
        icon: <Facebook size={18} strokeWidth={1.5} />,
      },
      {
        label: "Instagram",
        icon: <Instagram size={18} strokeWidth={1.5} />,
      },
      {
        label: "TikTok",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        ),
      },
      {
        label: "YouTube",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
          </svg>
        ),
      },
    ].map((s) => (
      <a
        key={s.label}
        href="#"
        aria-label={s.label}
        className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
      >
        {s.icon}
      </a>
    ))}
  </div>
</div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-10 lg:px-16 py-6 flex justify-center">
        <p className="font-sans text-sm text-gray-400 text-center">
          Desarrollado con <span style={{ color: "#bead8b" }}>❤</span> por el equipo de{" "}
          <a
            href="https://undevcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:text-[#bead8b] transition-colors"
          >
            UNDEVCODE
          </a>
        </p>
      </div>
    </footer>
  );
}