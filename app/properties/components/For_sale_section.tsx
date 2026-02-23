import { PropertyCard } from "./Property_card";
import { SectionHeader } from "./Section_header";
import { propertiesForSale } from "../data/properties";

export function ForSaleSection() {
  return (
    <section id="buy" className="bg-[#F5F0E8] py-20 px-6 md:px-10 lg:px-16">
      <SectionHeader label="CASAS EN VENTA" cta="Ver Todas las Propiedades" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {propertiesForSale.map((property, i) => (
          <PropertyCard key={property.id} property={property} index={i} />
        ))}
      </div>
    </section>
  );
}