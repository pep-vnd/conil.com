import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image: string;
    height?: string;
}

export default function PageHeader({
    title,
    subtitle,
    image,
    height = 'h-[50vh] min-h-[400px]'
}: PageHeaderProps) {
    return (
        <div className={`relative ${height} flex items-center justify-center text-white overflow-hidden`}>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* Dark Overlay for Readability (Fix #1) */}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-md text-white">{title}</h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-white font-light max-w-2xl mx-auto drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
