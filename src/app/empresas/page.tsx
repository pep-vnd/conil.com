import React from 'react';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/layout/PageHeader';

export default function B2BPage() {
    return (
        <div className="pb-20">
            <PageHeader
                title="Impulsa tu negocio en Conil"
                subtitle="Llega a miles de turistas que buscan experiencias auténticas en Conil de la Frontera."
                image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                height="h-[60vh] min-h-[500px]"
            />

            <div className="container mx-auto px-4 py-20 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                    <div className="text-center mb-16">
                        <Button variant="primary" className="text-lg px-12 py-4 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all font-bold">
                            Empezar ahora (Gratis)
                        </Button>
                        <p className="mt-4 text-sm text-gray-500">Sin tarjeta de crédito requerida para el plan básico.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-6 hover:bg-gray-50 rounded-2xl transition-colors">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-primary shadow-lg">
                                🚀
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Más Visibilidad</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Aparece en las primeras posiciones cuando los turistas busquen qué hacer o dónde dormir en Conil.
                            </p>
                        </div>
                        <div className="p-6 hover:bg-gray-50 rounded-2xl transition-colors">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-primary shadow-lg">
                                ⭐
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Reputación Premium</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Asocia tu marca a un portal de calidad con diseño cuidado y fotografía profesional.
                            </p>
                        </div>
                        <div className="p-6 hover:bg-gray-50 rounded-2xl transition-colors">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-primary shadow-lg">
                                💾
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Reservas Directas</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Sin comisiones intermedias. El cliente contacta directamente contigo por WhatsApp o Email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
