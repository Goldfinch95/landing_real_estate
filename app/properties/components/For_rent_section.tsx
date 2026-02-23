import { PropertyCard } from "./Property_card";
import { SectionHeader } from "./Section_header";
import { propertiesForRent } from "../data/properties";

export function ForRentSection() {
  return (
    <section id="rent" className="bg-[#EDE5D8] py-20 px-6 md:px-10 lg:px-16">
      <SectionHeader label="CASAS PARA ALQUILAR" cta="Ver Todas las Propiedades" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {propertiesForRent.map((property, i) => (
          <PropertyCard key={property.id} property={property} index={i} />
        ))}
      </div>
    </section>
  );
}