import { VideoBackground } from "../components/Video_background";
import { SearchBar } from "../components/Search_bar";

interface HeroSectionProps {
  videoSrc?: string;
  fallbackImage?: string;
}

export function HeroSection({ videoSrc, fallbackImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-end pb-24">
      {/* Background video */}
      <VideoBackground src={videoSrc} fallbackImage={fallbackImage} />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto">
        {/* Tagline */}
        <p
          className="font-sans text-xs tracking-[0.3em] text-white/80 uppercase mb-4"
          style={{ animation: "fade-up 0.8s ease 0.3s forwards", opacity: 0 }}
        >
          Tu futuro comienza aquí.
        </p>

        {/* Headline */}
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-10 font-light"
          style={{ animation: "fade-up 0.8s ease 0.5s forwards", opacity: 0 }}
        >
          Compra y alquila casas con confianza, encuentra tu{" "}
          <span className="relative inline-block italic">
            hogar
            {/* Decorative underline circle */}
            <svg
              viewBox="0 0 120 30"
              className="absolute -bottom-3 left-0 w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 22 C20 8, 50 2, 60 14 C70 24, 95 6, 116 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>

        {/* Search bar */}
        <div
          className="w-full"
          style={{ animation: "fade-up 0.8s ease 0.7s forwards", opacity: 0 }}
        >
          <SearchBar />
        </div>
      </div>
    </section>
  );
}