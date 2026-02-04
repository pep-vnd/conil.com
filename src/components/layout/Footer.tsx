import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-3xl font-bold text-white mb-6 block">
                            conil<span className="text-primary">.com</span>
                        </Link>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            La guía esencial para vivir y sentir Conil de la Frontera. Descubre el lado más auténtico de la Costa de la Luz.
                        </p>
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                                <span>IG</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-colors">
                                <span>FB</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-sky-500 hover:text-white transition-colors">
                                <span>TW</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Explora</h4>
                        <ul className="space-y-3 text-slate-300">
                            <li><Link href="/donde-dormir" className="hover:text-primary transition-colors">Dónde dormir</Link></li>
                            <li><Link href="/gastronomia" className="hover:text-primary transition-colors">Gastronomía</Link></li>
                            <li><Link href="/que-hacer" className="hover:text-primary transition-colors">Qué hacer</Link></li>
                            <li><Link href="/experiencias" className="hover:text-primary transition-colors">Experiencias</Link></li>
                            <li><Link href="/agenda" className="hover:text-primary transition-colors">Agenda Cultural</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Empresas</h4>
                        <ul className="space-y-3 text-slate-300">
                            <li><Link href="/empresas" className="hover:text-primary transition-colors">Anúnciate aquí</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Acceso Profesionales</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Kit Digital</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
                        <p className="text-slate-300 mb-2">¿Tienes dudas o sugerencias?</p>
                        <a href="mailto:hola@conil.com" className="text-xl font-bold text-white hover:text-primary transition-colors">hola@conil.com</a>

                        <div className="mt-6">
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Desarrollado en</p>
                            <p className="text-slate-200 font-medium">Conil de la Frontera, Cádiz</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
                    <p>© {new Date().getFullYear()} Conil.com. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/aviso-legal" className="hover:text-white">Aviso Legal</Link>
                        <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
                        <Link href="/cookies" className="hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
