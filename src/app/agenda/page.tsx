import { sql } from '@vercel/postgres';
import AgendaHero from '@/components/agenda/AgendaHero';

export default async function AgendaPublica() {
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;
  const destacado = events[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* BANNER PRINCIPAL CON DEGRADADO VIVO */}
      <AgendaHero events={events as any} />

      {/* LISTADO DE ACTIVIDADES CON TARJETAS MODERNAS */}
      <section id="eventos" className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black text-slate-900 italic uppercase">
            Próximas <span className="text-indigo-600 underline decoration-yellow-400">Citas</span>
          </h2>
          <div className="h-1 flex-grow mx-8 bg-slate-200 rounded-full hidden md:block"></div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-inner border border-slate-100">
            <p className="text-slate-400 text-xl italic font-medium">Estamos cocinando nuevos eventos para ti...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((ev) => (
              <div key={ev.id} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 flex flex-col">

                {/* Contenedor Imagen con Overlay */}
                <div className="relative h-64 overflow-hidden">
                  {ev.image_url ? (
                    <img src={ev.image_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={ev.title} />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 italic">Sin imagen</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Fecha flotante */}
                  <div className="absolute top-5 right-5 bg-white px-4 py-2 rounded-2xl shadow-lg text-center">
                    <span className="block text-xs font-black text-indigo-600 uppercase tracking-tighter leading-none">
                      {new Date(ev.date).toLocaleDateString('es-ES', { month: 'short' })}
                    </span>
                    <span className="block text-xl font-black text-slate-900 leading-none mt-1">
                      {new Date(ev.date).toLocaleDateString('es-ES', { day: '2-digit' })}
                    </span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                      {ev.category || "Evento"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors uppercase italic">
                    {ev.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                    {ev.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center text-slate-600 text-xs font-bold">
                      <span className="mr-2 text-lg text-indigo-500">📍</span> {ev.location}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}