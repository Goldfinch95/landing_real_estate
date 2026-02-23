"use client";

import { Heart, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigation } from "../hooks/use_navigation";
import { MobileMenu } from "./Mobile_menu";

const navLinks = [
  { label: "COMPRAR", href: "#buy", hasDropdown: false },
  {
    label: "ALQUILAR",
    href: "#rent",
    hasDropdown: false,
  },
  {
    label: "SERVICIOS",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Venta de Propiedades", href: "#" },
      { label: "Alquiler de Inmuebles Residenciales", href: "#" },
      { label: "Asesoría Inmobiliaria Personalizada", href: "#" },
    ],
  },
];



export function Navbar() {
  const {
    isMobileMenuOpen,
    activeDropdown,
    isScrolled,
    isNavVisible,
    isNavHovered,
    openNav,
    scheduleClose,
    cancelClose,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    closeDropdown,
  } = useNavigation();

  const isExpanded = !!activeDropdown;
  const isLight = isExpanded || isNavHovered || (isScrolled && isNavVisible);

  return (
    <>
      {/*
        onMouseLeave on the entire header so the sub-bar and nav
        are treated as one zone — no gap, no flicker.
      */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          !isNavVisible && "-translate-y-full",
          isLight
            ? "bg-[#F5F0E8] shadow-sm"
            : isScrolled
            ? "bg-white shadow-sm"
            : "bg-transparent"
        )}
      >
        {/* ── Main row ── */}
        <div className="flex items-center justify-between px-6 md:px-10 h-16 md:h-20">

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <div className="leading-none">
              <div
                className={cn(
                  "font-serif text-2xl md:text-3xl tracking-widest  transition-colors duration-300",
                  isLight ? "text-verity-dark" : "text-white"
                )}
              >
                ÉCLET
              </div>
              <div
                className={cn(
                  "font-serif text-xs tracking-[0.3em] -mt-1 transition-colors duration-300",
                  isLight ? "text-verity-dark/80" : "text-white/90"
                )}
              >
                MOBILIERE
              </div>
            </div>
          </a>

          {/* Center nav — hover triggers sub-bar only, NO floating dropdown */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative py-6 group/link"
                onMouseEnter={() => openNav(link.hasDropdown ? link.label : undefined)}
                onMouseLeave={scheduleClose}
              >
                {/* Animated top line */}
                <span
                  className={cn(
                    "absolute top-0 left-0 h-[2px] transition-all duration-700 ease-in-out",
                    activeDropdown === link.label
                      ? "w-full bg-[#bead8b]"
                      : "w-0 bg-black group-hover/link:w-full"
                  )}
                />

                {link.hasDropdown ? (
                  <span
                    className={cn(
                      "flex items-center gap-1 font-semibold text-base  tracking-widest transition-colors duration-300 uppercase cursor-default select-none",
                      isLight
                        ? "text-verity-dark/70 hover:text-verity-dark"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={cn(
                        "transition-transform duration-200",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    />
                  </span>
                ) : (
                  <a
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1  font-semibold text-base tracking-widest transition-colors duration-300 uppercase",
                      isLight
                        ? "text-verity-dark/70 hover:text-verity-dark"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="#"
              className={cn(
                "hidden lg:block font-semibold text-base tracking-widest transition-colors duration-300 uppercase",
                isLight
                  ? "text-verity-dark/70 hover:text-verity-dark"
                  : "text-white/90 hover:text-white"
              )}
              onMouseEnter={() => openNav()}
              onMouseLeave={scheduleClose}
            >
              PUBLICAR
            </a>

            

            {/* Hamburger */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Open menu"
              className="flex flex-col gap-[5px]"
            >
              <span
                className={cn(
                  "block w-6 h-[1.5px] transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-[6.5px]"
                )}
                style={{ backgroundColor: isLight ? "#1A1A1A" : "#ffffff" }}
              />
              <span
                className={cn(
                  "block w-6 h-[1.5px] transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[6.5px]"
                )}
                style={{ backgroundColor: isLight ? "#1A1A1A" : "#ffffff" }}
              />
            </button>
          </div>
        </div>

        {/* ── Sub-bar: second row, expands on hover ── */}
        <div
          className={cn(
            "hidden lg:flex justify-center gap-8 transition-all duration-300 overflow-hidden",
            isExpanded
              ? "py-3 max-h-14 opacity-100"
              : "py-0 max-h-0 opacity-0 pointer-events-none"
          )}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          {navLinks
            .find((l) => l.label === activeDropdown)
            ?.children?.map((child) => (
              <a
                key={child.label}
                href={child.href}
                className="relative group/child font-sans text-xs tracking-widest text-verity-dark/60 hover:text-verity-dark transition-colors uppercase py-3"
              >
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#bead8b] transition-all duration-700 ease-in-out group-hover/child:w-full" />
                {child.label}
              </a>
            ))}
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}