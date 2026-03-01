"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/common/components/atom/button";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row w-full max-w-2xl mx-auto shadow-2xl"
    >
      {/* Input */}
      <div className="flex flex-1 items-center bg-white px-5 gap-3">
        <MapPin size={18} className="text-verity-dark/40 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por código postal o área..."
          className="flex-1 h-14 bg-transparent font-sans text-sm text-verity-dark placeholder:text-verity-dark/40 outline-none"
        />
      </div>

      {/* CTA Button */}
      <Button
        type="submit"
        size="lg"
        className="bg-[#bead8b] text-black hover:bg-black hover:text-white font-sans text-xs tracking-widest h-14 px-6 rounded-none border-0 w-full sm:w-auto"
      >
        {/* Short label on mobile, full on sm+ */}
        <span className="sm:hidden flex items-center gap-2">
          <Search size={16} />
          Buscar
        </span>
        <span className="hidden sm:inline">Busca el hogar de tus sueños</span>
      </Button>
    </form>
  );
}