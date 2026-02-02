export type Experience = {
    id: string;
    title: string;
    category: 'naturaleza' | 'playa' | 'ocio' | 'cultura';
    description: string;
    image: string;
    price?: string;
    duration?: string;
};

export const experiences: Experience[] = [
    {
        id: 'e1',
        title: 'Ruta de los Acantilados y Calas',
        category: 'naturaleza',
        description: 'Senderismo guiado recorriendo las impresionantes Calas de Roche, con paradas para baños en playas vírgenes y avistamiento de aves.',
        image: 'https://images.unsplash.com/photo-1502208327471-d5dde4d78995?q=80&w=1000&auto=format&fit=crop',
        duration: '3 horas',
        price: 'Gratis'
    },
    {
        id: 'e2',
        title: 'Curso de Surf Iniciación',
        category: 'playa',
        description: 'Domina las olas en la playa de Los Bateles. Clases para todas las edades con monitores titulados y material incluido.',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c70e096f?q=80&w=1000&auto=format&fit=crop',
        price: '35€ / sesión',
        duration: '2 horas'
    },
    {
        id: 'e3',
        title: 'Atardecer en Torre de Guzmán',
        category: 'cultura',
        description: 'Sube a la torre medieval para disfrutar de la mejor vista panorámica de Conil mientras el sol se pone sobre el Atlántico.',
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop',
        price: '2€',
        duration: '1 hora'
    },
    {
        id: 'e4',
        title: 'Ruta a Caballo en la Playa',
        category: 'naturaleza',
        description: 'Paseo inolvidable a caballo por la orilla del mar al atardecer. Experiencia romántica y relajante apta para principiantes.',
        image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop',
        price: '50€',
        duration: '1.5 horas'
    },
    {
        id: 'e5',
        title: 'Visita a la Bodega Sancha Pérez',
        category: 'cultura',
        description: 'Enoturismo y oleoturismo en una finca ecológica. Cata de vinos locales y aceites de oliva virgen extra.',
        image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1000&auto=format&fit=crop',
        price: '15€',
        duration: '2 horas'
    },
    {
        id: 'e6',
        title: 'Noche de Cócteles en el Casco Antiguo',
        category: 'ocio',
        description: 'Ruta por los pubs con más encanto del centro, disfrutando de la música en vivo y el ambiente nocturno de Conil.',
        image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1000&auto=format&fit=crop',
        price: 'Variable',
    }
];
