"use client";

import { X, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const primaryLinks = [
  { label: "Buscar Propiedades", href: "#" },
  { label: "Explorar Zonas Exclusivas", href: "#" },
  { label: "Asesoría Personalizada", href: "#" },
  { label: "Evaluación de Propiedades", href: "#" },
  { label: "Agendar Visita", href: "#" },
];

const secondaryLinks = [
  { label: "Nuestra Visión", href: "#" },
  { label: "Guía de Compra", href: "#" },
  { label: "Historias de Clientes", href: "#" },
  { label: "Proyectos Destacados", href: "#" },
  { label: "Contáctanos", href: "#" },
  { label: "Asesoría Personalizada", href: "#" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-105 bg-[#F5F0E8] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <div className="flex justify-end p-6 pt-8 pr-8">
          <button
            onClick={onClose}
            className="text-verity-dark hover:opacity-60 transition-opacity"
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Primary navigation links */}
        <nav className="flex-1 px-12 pt-4">
          <ul className="space-y-1">
            {primaryLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative block font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-tight py-1 w-fit group/link"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: `${index * 60 + 100}ms`,
                  }}
                  onClick={onClose}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#bead8b] transition-all duration-300 group-hover/link:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider + secondary links */}
        <div className="px-12 pb-8">
          <hr className="border-dark/20 mb-6" />
          <div
            className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transitionDelay: "400ms",
            }}
          >
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold text-xs tracking-widest text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors uppercase"
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div
            className="flex gap-5"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.5s ease",
              transitionDelay: "500ms",
            }}
          >
            <a href="#" aria-label="Facebook" className="text-verity-dark hover:text-[#bead8b] transition-opacity">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Instagram" className="text-verity-dark hover:text-[#bead8b] transition-opacity">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="TikTok" className="text-verity-dark hover:text-[#bead8b] transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-verity-dark hover:text-[#bead8b] transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}