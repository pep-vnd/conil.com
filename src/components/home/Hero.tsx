'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const slides = [
    {
        id: 1,
        image: '/images/71146e9cc58652bef6b025f36af2b0df.jpg', // User provided Beach image
        alt: 'Playas infinitas de Conil'
    },
    {
        id: 2,
        image: '/images/aa7a499403bc4fc8d71d0a31b3f7e1ea.jpg', // User provided Gastronomy image
        alt: 'Gastronomía de almadraba'
    },
    {
        id: 3,
        image: '/images/6fed6033ead12e76afcf70f6cdf2c9fc.jpg', // User provided Village image
        alt: 'Calles blancas de Conil'
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">

            {/* Background Slider */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    {/* Dark Overlay per slide to ensure consistent text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="animate-fade-in-up">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl">
                        Conil no se visita,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-200" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                            se vive
                        </span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        Playas infinitas, gastronomía única y la mejor vida nocturna.
                    </p>

                    {/* Premium Search Bar - "Glassmorphism" */}
                    <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-xl p-4 rounded-3xl flex flex-col md:flex-row gap-4 border border-white/40 shadow-2xl ring-1 ring-white/10 mb-12">
                        <div className="flex-1 relative group">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 text-xl group-focus-within:text-white transition-colors">🔍</span>
                            <input
                                type="text"
                                placeholder="Buscar hoteles, restaurantes, planes..."
                                className="w-full bg-black/10 hover:bg-black/20 focus:bg-black/30 text-white placeholder-white/70 rounded-2xl px-14 py-4 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium border border-transparent focus:border-white/30"
                            />
                        </div>
                        <Button
                            variant="primary"
                            className="md:w-auto w-full bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] px-10 py-4 rounded-2xl font-black text-lg uppercase tracking-wide transform hover:scale-105 transition-all border-none"
                        >
                            Buscar
                        </Button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Button
                            variant="primary"
                            className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl px-8 py-3 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform border border-white"
                            href="/que-hacer"
                        >
                            Explorar todo
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white/20 shadow-xl px-8 py-3 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform backdrop-blur-sm"
                            href="/agenda"
                        >
                            Ver Agenda
                        </Button>
                    </div>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Ir a diapositiva ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}
