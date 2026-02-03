import React from 'react';
import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { places } from '@/data/places';
import { experiences } from '@/data/experiences';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/layout/PageHeader';

// SSG: Generate params for all categories
export function generateStaticParams() {
    return categories.map((category) => ({
        category: category.slug,
    }));
}

interface PageProps {
    params: Promise<{ category: string }>;
}

// Map categories to images
const categoryImages: Record<string, string> = {
    'donde-dormir': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop', // Resort
    'gastronomia': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop',   // Food
    'que-hacer': 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?q=80&w=2000&auto=format&fit=crop',     // Activity/Surf
    'experiencias': 'https://images.unsplash.com/photo-1502208327471-d5dde4d78995?q=80&w=2000&auto=format&fit=crop',  // Nature
    'agenda': 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2000&auto=format&fit=crop',        // Event/Concert
};

export default async function CategoryPage({ params }: PageProps) {
    const { category: categorySlug } = await params;
    const category = categories.find((c) => c.slug === categorySlug);

    if (!category) {
        notFound();
    }

    // Filter content based on category
    interface Item {
        id: string;
        title: string;
        description: string;
        image: string;
        href: string;
        label: string;
        rating?: number;
    }

    let items: Item[] = [];
    const title = category.name;
    const bgImage = categoryImages[categorySlug] || categoryImages['que-hacer'];

    if (categorySlug === 'experiencias') {
        items = experiences.map(e => ({
            id: e.id,
            title: e.title,
            description: e.description,
            image: e.image,
            href: `/experiencias/${e.id}`,
            label: e.category.toUpperCase(),
            rating: undefined
        }));
    } else {
        items = places
            .filter((p) => p.categorySlug === categorySlug)
            .map(p => ({
                id: p.id,
                title: p.name,
                description: p.description,
                image: p.image,
                href: `/${categorySlug}/${p.id}`,
                rating: p.rating,
                label: p.type
            }));
    }

    return (
        <div className="pb-20">
            <PageHeader
                title={title}
                subtitle={`Descubre las mejores opciones de ${title.toLowerCase()} en Conil.`}
                image={bgImage}
            />

            <div className="container mx-auto px-4 py-12">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:pb-0 scrollbar-hide">
                    {items.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            href={item.href}
                            rating={item.rating}
                            label={item.label}
                            className="hover-lift min-w-[85vw] md:min-w-0 snap-center"
                        />
                    ))}
                </div>

                {items.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-xl">Próximamente más contenido en esta sección.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
