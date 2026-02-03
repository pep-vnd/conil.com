'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

// Fallback slides if no events are present or for initial state
const defaultSlides = [
    {
        id: 'default-1',
        image: '/images/71146e9cc58652bef6b025f36af2b0df.jpg',
        title: 'Conil no se visita, se vive',
        titleRender: (
            <>
                Conil no se visita,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                    se vive
                </span>
            </>
        ),
        subtitle: 'Playas infinitas, gastronomía única y la mejor vida nocturna.',
        link: '/que-hacer'
    },

];

interface HeroProps {
    events?: any[];
}

export default function Hero({ events = [] }: HeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Use events if available, otherwise defaults
    const hasEvents = events.length > 0;
    const slides = hasEvents ? events : defaultSlides;

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, [slides.length]);

    const currentEvent = hasEvents ? slides[currentSlide] : null;

    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden bg-slate-900">

            {/* Background Slider */}
            {slides.map((slide: any, index: number) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${hasEvents ? (slide.image_url || '/images/71146e9cc58652bef6b025f36af2b0df.jpg') : slide.image})`
                        }}
                    />
                    {/* Darker Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center mt-10">
                <div className="animate-fade-in-up max-w-4xl mx-auto">

                    {hasEvents ? (
                        <>
                            <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-bold uppercase tracking-wider mb-6 text-white shadow-lg animate-pulse">
                                Próximo Evento
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight drop-shadow-2xl text-white">
                                {currentEvent.title}
                            </h1>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-2xl font-light text-gray-200 mb-10">
                                <span className="flex items-center gap-2">
                                    🗓️ {new Date(currentEvent.date).toLocaleDateString()}
                                </span>
                                <span className="hidden md:block">•</span>
                                <span className="flex items-center gap-2">
                                    📍 {currentEvent.location}
                                </span>
                            </div>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 line-clamp-2">
                                {currentEvent.description}
                            </p>

                            <div className="flex justify-center gap-4">
                                <Button
                                    variant="primary"
                                    className="md:w-auto w-full px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
                                    href="/agenda"
                                >
                                    Ver Agenda Completa
                                </Button>
                            </div>
                        </>
                    ) : (
                        // Default Static Content
                        <>
                            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl text-white">
                                {(defaultSlides[currentSlide] as any).titleRender || defaultSlides[currentSlide].title}
                            </h1>
                            <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                                {defaultSlides[currentSlide].subtitle}
                            </p>

                            {/* Original Search Bar */}
                            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-3 rounded-3xl flex flex-col md:flex-row gap-3 border border-white/20 shadow-2xl mb-12">
                                <div className="flex-1 relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 text-xl">🔍</span>
                                    <input
                                        type="text"
                                        placeholder="Buscar..."
                                        className="w-full bg-transparent text-white placeholder-white/60 rounded-2xl px-14 py-4 focus:outline-none font-medium"
                                    />
                                </div>
                                <Button
                                    variant="primary"
                                    className="md:w-auto w-full px-8 py-4 rounded-2xl font-bold uppercase tracking-wide border-none"
                                >
                                    Buscar
                                </Button>
                            </div>
                        </>
                    )}

                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_: any, index: number) => (
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
        </div>
    );
}
