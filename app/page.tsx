import { Navbar } from "@/app/principal_main_browser/components/Navbar";
import { HeroSection } from "@/app/hero/components/Hero";
import { ForSaleSection } from "./properties/components/For_sale_section";
import { ForRentSection } from "./properties/components/For_rent_section";
import { ValuesSection } from "./values/components/Values_section";
import { NewsletterSection } from "./news/components/Newsletter_section";
import { Footer } from "./footer/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <Navbar />

      {/* Hero — replace videoSrc with your actual video file path */}
      <HeroSection
        videoSrc="/video/intro.mp4"
        fallbackImage="/images/intro.webp"
      />
      {/* Additional sections go here */}
      <ForSaleSection />
      <ForRentSection />
      <ValuesSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
