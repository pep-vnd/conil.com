'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

interface Event {
    id: string;
    title: string;
    description: string;
    date: Date | string;
    location: string;
    category: string;
    image_url?: string;
}

interface AgendaHeroProps {
    events: Event[];
}

export default function AgendaHero({ events = [] }: AgendaHeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Use events directly. If no events, we can show a fallback or just a static image.
    // For now assuming we might receive empty array, handle gracefully.
    const hasEvents = events.length > 0;

    // Fallback if no events exist
    const fallbackSlide = {
        title: "Agenda Conil",
        description: "Descubre los mejores eventos de la Costa de la Luz.",
        image_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2500&auto=format&fit=crop", // Party/Event generic image
        date: new Date(),
        location: "Conil de la Frontera"
    };

    const activeEvents = hasEvents ? events.slice(0, 5) : [fallbackSlide]; // Show top 5 events in slider

    useEffect(() => {
        if (activeEvents.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % activeEvents.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [activeEvents.length]);

    const currentEvent = activeEvents[currentSlide];

    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Slider */}
            {activeEvents.map((evt, index) => (
                <div
                    key={index} // Using index because fallback doesn't have ID likely
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${evt.image_url || fallbackSlide.image_url})`
                        }}
                    />
                    <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
                </div>
            ))}

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <div className="animate-fade-in-up">
                    {hasEvents && (
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-bold uppercase tracking-wider text-white shadow-lg">
                            Próximo Evento
                        </div>
                    )}

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight drop-shadow-2xl text-white">
                        {currentEvent.title}
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-2xl font-light text-gray-200 mb-8">
                        <span className="flex items-center gap-2">
                            🗓️ {new Date(currentEvent.date).toLocaleDateString()}
                        </span>
                        <span className="hidden md:block opacity-50">•</span>
                        <span className="flex items-center gap-2">
                            📍 {currentEvent.location}
                        </span>
                    </div>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 line-clamp-2 leading-relaxed">
                        {currentEvent.description}
                    </p>

                    <Button
                        variant="primary"
                        href="#eventos"
                        className="font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-1 transition-all"
                    >
                        Ver todos los eventos
                    </Button>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {activeEvents.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                            ? 'w-8 h-2 bg-white'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                            }`}
                        aria-label={`Ir a diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
