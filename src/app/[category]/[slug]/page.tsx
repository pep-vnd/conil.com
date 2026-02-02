import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { places } from '@/data/places';
import { experiences } from '@/data/experiences';
import Button from '@/components/ui/Button';

// SSG: Generate params for all items
export function generateStaticParams() {
    const placeParams = places.map((place) => ({
        category: place.categorySlug,
        slug: place.id,
    }));

    const experienceParams = experiences.map((exp) => ({
        category: 'experiencias',
        slug: exp.id,
    }));

    return [...placeParams, ...experienceParams];
}

interface PageProps {
    params: Promise<{ category: string; slug: string }>;
}

export default async function DetailPage({ params }: PageProps) {
    const { category, slug } = await params;

    let item: any = null;

    if (category === 'experiencias') {
        item = experiences.find((e) => e.id === slug);
    } else {
        item = places.find((p) => p.id === slug && p.categorySlug === category);
    }

    if (!item) {
        notFound();
    }

    const title = item.name || item.title;
    const isPlace = !!item.location;

    return (
        <div className="pb-20">
            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="container mx-auto px-4 pb-12 text-white">
                        <span className="bg-primary px-3 py-1 rounded text-sm font-bold uppercase mb-4 inline-block">
                            {item.type || item.category || 'Detalle'}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                        {isPlace && (
                            <p className="text-xl flex items-center gap-2">
                                📍 {item.location}
                            </p>
                        )}
                        {item.rating && (
                            <div className="flex items-center mt-2 text-yellow-400 text-xl font-bold">
                                {'★'.repeat(Math.round(item.rating))}
                                <span className="text-white ml-2 text-base font-normal">{item.rating}/5</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Descripción</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </section>

                        {/* Simulated Map */}
                        <section className="bg-gray-100 rounded-xl p-8 text-center h-64 flex flex-col items-center justify-center">
                            <span className="text-4xl mb-4">🗺️</span>
                            <p className="text-gray-500 font-medium">Mapa no disponible en MVP</p>
                            <p className="text-sm text-gray-400">Aquí iría un Google Maps embebido</p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Información y Reservas</h3>

                            <div className="space-y-4 mb-8">
                                {item.price && (
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Precio</span>
                                        <span className="font-medium">{item.price}</span>
                                    </div>
                                )}
                                {item.duration && (
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Duración</span>
                                        <span className="font-medium">{item.duration}</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-3">
                                <Button className="w-full justify-center bg-green-600 hover:bg-green-700">
                                    Reserva por WhatsApp
                                </Button>
                                <Button variant="outline" className="w-full justify-center">
                                    Enviar Email
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
