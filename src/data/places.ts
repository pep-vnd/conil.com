export type Place = {
    id: string;
    name: string;
    categorySlug: string; // 'donde-dormir' | 'gastronomia'
    type: string; // 'Hotel', 'Hostal', 'Restaurante', 'Bar'
    description: string;
    image: string;
    rating: number; // 1-5
    location: string;
    phone?: string;
    email?: string;
    featured?: boolean;
};

export const places: Place[] = [
    // HOTELES
    {
        id: 'h1',
        name: 'Hotel Fuerte Conil-Resort',
        categorySlug: 'donde-dormir',
        type: 'Resort',
        description: 'Espectacular resort en primera línea de la playa de la Fontanilla. Cuenta con spa, piscinas y jardines tropicales. Ideal para familias y parejas que buscan el máximo confort.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
        rating: 5,
        location: 'Playa de la Fontanilla, s/n',
        featured: true
    },
    {
        id: 'h2',
        name: 'Hipotels Gran Conil & Spa',
        categorySlug: 'donde-dormir',
        type: 'Hotel',
        description: 'Modernidad y lujo frente al mar. Disfruta de sus amplias habitaciones con terraza, su piscina infinita y una oferta gastronómica de primer nivel.',
        image: 'https://images.unsplash.com/photo-1571896349842-6e547cea9358?q=80&w=1000&auto=format&fit=crop',
        rating: 5,
        location: 'Av. de la Marina, s/n',
        featured: true
    },
    {
        id: 'h3',
        name: 'Hotel Almadraba Conil',
        categorySlug: 'donde-dormir',
        type: 'Hotel Boutique',
        description: 'Encantador hotel situado en el corazón del casco antiguo, una casa típica andaluza reformada con patio interior. A un paso del ambiente y la playa.',
        image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1000&auto=format&fit=crop',
        rating: 4,
        location: 'Plaza de España, 12'
    },
    {
        id: 'h4',
        name: 'Camping Conil',
        categorySlug: 'donde-dormir',
        type: 'Camping',
        description: 'Naturaleza pura entre pinos. Bungalows modernos y parcelas amplias para disfrutar del aire libre con piscina y animación.',
        image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000&auto=format&fit=crop',
        rating: 3.5,
        location: 'Ctra. N-340, Km. 18'
    },
    {
        id: 'h5',
        name: 'Hostal Torre de Guzmán',
        categorySlug: 'donde-dormir',
        type: 'Hostal',
        description: 'Económico y céntrico, perfecto para viajeros jóvenes. Habitaciones sencillas y limpias cerca de la zona de ocio nocturno.',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop',
        rating: 3,
        location: 'C/ Hospital, 5'
    },
    {
        id: 'h6',
        name: 'Apartamentos Loto Conil',
        categorySlug: 'donde-dormir',
        type: 'Apartamento',
        description: 'Apartamentos turísticos completamente equipados en zona tranquila, con piscina comunitaria y aparcamiento.',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop',
        rating: 4.5,
        location: 'C/ Laguna, 22'
    },

    // RESTAURANTES
    {
        id: 'r1',
        name: 'Restaurante El Roqueo',
        categorySlug: 'gastronomia',
        type: 'Restaurante',
        description: 'Cocina tradicional con toques de autor colgada sobre el acantilado. Especialidad en atún rojo de almadraba y arroces.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
        rating: 4.5,
        location: 'C/ Roqueo, s/n',
        featured: true
    },
    {
        id: 'r2',
        name: 'Bar Los Hermanos',
        categorySlug: 'gastronomia',
        type: 'Bar de Tapas',
        description: 'El templo del "pescaíto" frito. Un bar auténtico, sin pretensiones, donde se come el mejor cazón en adobo del pueblo.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
        rating: 4.5,
        location: 'C/ La Virgen, 4'
    },
    {
        id: 'r3',
        name: 'La Fontanilla',
        categorySlug: 'gastronomia',
        type: 'Restaurante',
        description: 'Referente histórico en la misma arena de la playa. Pescados frescos de la lonja y verduras de la huerta de Conil.',
        image: 'https://images.unsplash.com/photo-1537047902294-6228702af32f?q=80&w=1000&auto=format&fit=crop',
        rating: 4.8,
        location: 'Playa de la Fontanilla'
    },
    {
        id: 'r4',
        name: 'Venta Melchor',
        categorySlug: 'gastronomia',
        type: 'Venta',
        description: 'Cocina de producto y kilómetro cero. Famosos por sus platos de cuchara y la carne de retinto.',
        image: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?q=80&w=1000&auto=format&fit=crop',
        rating: 4.2,
        location: 'N-340, Km 18'
    },
    {
        id: 'r5',
        name: 'Pizzería El Horno',
        categorySlug: 'gastronomia',
        type: 'Italiano',
        description: 'Las mejores pizzas al horno de leña en un patio andaluz acogedor. Ideal para cenas informales.',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop',
        rating: 4,
        location: 'C/ Pascual Junquera, 8'
    },
];
