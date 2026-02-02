export type Category = {
    id: string;
    slug: string;
    name: string;
    image?: string;
};

export const categories: Category[] = [
    { id: '1', slug: 'donde-dormir', name: 'Dónde dormir', image: '/images/categories/dormir.jpg' },
    { id: '2', slug: 'gastronomia', name: 'Gastronomía', image: '/images/categories/gastronomia.jpg' },
    { id: '3', slug: 'que-hacer', name: 'Qué hacer', image: '/images/categories/que-hacer.jpg' },
    { id: '4', slug: 'experiencias', name: 'Experiencias', image: '/images/categories/experiencias.jpg' },
    { id: '5', slug: 'agenda', name: 'Agenda', image: '/images/categories/agenda.jpg' },
];

export const heroSlides = [
    { id: 1, image: '/images/hero/beach.jpg', title: 'Conil no se visita, se vive' },
];
