"use client";

import { useState, useEffect, useRef } from "react";

export function useNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      setIsScrolled(currentY > 20);

      if (currentY < 60) {
        // Near top — always show
        setIsNavVisible(true);
      } else if (diff > 4) {
        // Scrolling down
        setIsNavVisible(false);
      } else if (diff < -4) {
        // Scrolling up
        setIsNavVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setIsNavHovered(false);
      setActiveDropdown(null);
    }, 120);
  };

  const openNav = (label?: string) => {
    cancelClose();
    setIsNavHovered(true);
    if (label) setActiveDropdown(label);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleDropdown = (label: string) => {
    cancelClose();
    setActiveDropdown(label);
  };

  const closeDropdown = () => setActiveDropdown(null);

  return {
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
  };
}