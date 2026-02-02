import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary">
                    conil<span className="text-secondary">.com</span>
                </Link>

                <nav className="hidden md:flex space-x-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/${category.slug}`}
                            className="text-gray-600 hover:text-primary font-medium transition-colors"
                        >
                            {category.name}
                        </Link>
                    ))}
                    <Link
                        href="/empresas"
                        className="text-primary font-medium hover:text-sky-700"
                    >
                        Anúnciate
                    </Link>
                </nav>

                {/* Mobile Menu Button - Placeholder */}
                <button className="md:hidden text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
