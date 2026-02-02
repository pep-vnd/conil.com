import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200';

    const variants = {
        primary: 'bg-primary text-white hover:bg-sky-700',
        secondary: 'bg-secondary text-primary hover:bg-sky-200',
        outline: 'border-2 border-primary text-primary hover:bg-sky-50',
        ghost: 'text-gray-600 hover:text-primary hover:bg-gray-100',
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={styles}>
            {children}
        </button>
    );
}
