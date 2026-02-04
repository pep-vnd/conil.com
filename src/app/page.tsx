import Hero from "@/components/home/Hero";
import Card from "@/components/ui/Card";
import { experiences } from "@/data/experiences";
import { places } from "@/data/places";
import Button from "@/components/ui/Button";
import Link from 'next/link';

export default function Home() {
  const featuredPlaces = places.filter(p => p.featured).slice(0, 3);
  const featuredExperiences = experiences.slice(0, 3);

  // Helper for Category Cards - New Vertical Design ("Summer & Clean")
  const CategoryNavCard = ({ title, subtitle, image, href }: { title: string, subtitle: string, image: string, href: string }) => (
    <Link
      href={href}
      className="group relative flex flex-col h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
    >
      {/* Image Part (70%) */}
      <div className="relative h-[70%] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Soft overlay only on hover to let image shine */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content Part (30%) - White Background */}
      <div className="h-[30%] bg-white p-6 flex flex-col justify-center border-t border-gray-100 relative z-10">
        <h3 className="font-bold text-gray-900 text-2xl mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
        {/* Small decorative arrow */}
        <div className="absolute opacity-0 group-hover:opacity-100 right-6 top-1/2 -translate-y-1/2 text-primary text-xl transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          →
        </div>
      </div>
    </Link>
  );

  return (
    <div className="pb-0 bg-gray-50">
      <Hero />

      {/* Categories Grid - Explora Conil Section */}
      <section className="relative z-20 -mt-24 mb-20 px-4">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 -mx-4 px-4 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 scrollbar-hide">
            <div className="min-w-[85vw] md:min-w-0 snap-center">
              <CategoryNavCard
                title="Dónde Dormir"
                subtitle="Hoteles, apartamentos y campings"
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
                href="/donde-dormir"
              />
            </div>
            <div className="min-w-[85vw] md:min-w-0 snap-center">
              <CategoryNavCard
                title="Gastronomía"
                subtitle="Restaurantes y chiringuitos"
                image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
                href="/gastronomia"
              />
            </div>
            <div className="min-w-[85vw] md:min-w-0 snap-center">
              <CategoryNavCard
                title="Qué Hacer"
                subtitle="Playas, surf y naturaleza"
                image="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?q=80&w=800&auto=format&fit=crop"
                href="/que-hacer"
              />
            </div>
            <div className="min-w-[85vw] md:min-w-0 snap-center">
              <CategoryNavCard
                title="Agenda"
                subtitle="Eventos y vida nocturna"
                image="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop"
                href="/agenda"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Inspiración</span>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Experiencias Inolvidables</h2>
              <p className="text-gray-600 max-w-xl text-lg">
                Desde rutas al atardecer hasta clases de surf. Vive Conil intensamente.
              </p>
            </div>
            <Button variant="ghost" href="/experiencias" className="mt-4 md:mt-0">Ver todas las experiencias →</Button>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 -mx-4 px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:pb-0 scrollbar-hide">
            {featuredExperiences.map((exp) => (
              <Card
                key={exp.id}
                title={exp.title}
                description={exp.description}
                image={exp.image}
                href={`/experiencias/${exp.id}`}
                label={exp.category.toUpperCase()}
                className="hover-lift min-w-[85vw] md:min-w-0 snap-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Recomendados</span>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Dónde Dormir y Comer</h2>
              <p className="text-gray-600 max-w-xl text-lg">
                Nuestra selección de los mejores alojamientos y restaurantes locales.
              </p>
            </div>
            <Button variant="ghost" href="/donde-dormir" className="mt-4 md:mt-0">Ver todos los sitios →</Button>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 -mx-4 px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:pb-0 scrollbar-hide">
            {featuredPlaces.map((place) => (
              <Card
                key={place.id}
                title={place.name}
                description={place.description}
                image={place.image}
                href={`/${place.categorySlug}/${place.id}`}
                rating={place.rating}
                label={place.type}
                className="min-w-[85vw] md:min-w-0 snap-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* B2B Call to Action - Parallax */}
      <section className="py-32 relative overflow-hidden">
        {/* Parallax Background - Using bg-cover as bg-fixed has mobile issues often, but we can try basic fixed for desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-slate-900/80" /> {/* Dark overlay */}

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-xl">¿Tienes un negocio en Conil?</h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md font-light">
            Únete al portal de referencia de la Costa de la Luz. Mejora tu visibilidad y recibe reservas directas.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary" href="/empresas" className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Anuncia tu negocio
            </Button>
            <Button variant="outline" href="/empresas" className="text-lg px-10 py-4 border-slate-300 text-white hover:bg-white/10 hover:text-white backdrop-blur">
              Más información
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
