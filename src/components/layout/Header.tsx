'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import Button from '@/components/ui/Button';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-black text-primary tracking-tight z-50 relative" onClick={closeMenu}>
                    conil<span className="text-secondary">.com</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/${category.slug}`}
                            className="text-gray-600 hover:text-primary font-bold text-sm uppercase tracking-wide transition-colors"
                        >
                            {category.name}
                        </Link>
                    ))}
                    <Link
                        href="/agenda"
                        className="text-gray-600 hover:text-primary font-bold text-sm uppercase tracking-wide transition-colors"
                    >
                        Agenda
                    </Link>
                    <Link
                        href="/empresas"
                        className="bg-primary text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-sky-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Anúnciate
                    </Link>
                </nav>

                {/* Mobile Menu Button - Hamburger / Close */}
                <button
                    className="md:hidden z-50 p-2 text-primary focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                        }`}
                >
                    <nav className="flex flex-col space-y-6 text-center w-full px-6">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/${category.slug}`}
                                className="text-2xl font-black text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
                                onClick={closeMenu}
                            >
                                {category.name}
                            </Link>
                        ))}
                        <Link
                            href="/agenda"
                            className="text-2xl font-black text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
                            onClick={closeMenu}
                        >
                            Agenda
                        </Link>

                        <div className="pt-8 w-full">
                            <Link
                                href="/empresas"
                                className="block w-full bg-primary text-white py-4 rounded-xl font-bold text-xl shadow-xl active:scale-95 transition-transform"
                                onClick={closeMenu}
                            >
                                Anuncia tu Negocio
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
