"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/common/components/atom/button";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-2xl mx-auto shadow-2xl"
    >
      {/* Input */}
      <div className="flex-1 flex items-center bg-white px-5 gap-3">
        <MapPin size={18} className="text-verity-dark/40 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por codigo postal o area.."
          className="flex-1 h-14 bg-transparent font-sans text-sm text-verity-dark placeholder:text-verity-dark/40 outline-none"
        />
      </div>

      {/* CTA Button */}
      <Button
        type="submit"
        size="lg"
        className="bg-[#bead8b] text-black hover:bg-black hover:text-white font-sans text-xs tracking-widest h-14 px-8 rounded-none border-0"
      >
        Busca el hogar de tus sueños
      </Button>
    </form>
  );
}