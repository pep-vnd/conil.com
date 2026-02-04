import React from 'react';
import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    image: string;
    href: string;
    label?: string;
    rating?: number;
    className?: string;
}

export default function Card({ title, description, image, href, label, rating, className = '' }: CardProps) {
    return (
        <Link
            href={href}
            className={`group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative z-10 ${className}`}
        >
            <div className="relative h-64 overflow-hidden">
                {label && (
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur shadow-sm text-xs font-bold px-3 py-1.5 rounded-full text-gray-800 z-10 tracking-wide uppercase">
                        {label}
                    </span>
                )}

                {/* Rating Badge Overlay */}
                {rating && (
                    <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-2 py-1 rounded-lg font-bold shadow-lg flex items-center gap-1">
                        <span className="text-xs">★</span> {rating}
                    </div>
                )}

                {/* Gradient Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-0 duration-300" />

                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">
                    {description}
                </p>
                <span className="text-primary text-sm font-medium group-hover:underline">
                    Ver detalles →
                </span>
            </div>
        </Link>
    );
}
