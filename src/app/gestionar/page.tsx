import { sql } from '@vercel/postgres';

export default async function AgendaPublica() {
  // Obtenemos todos los eventos
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;
  
  // El primer evento será nuestro "Banner Destacado"
  const destacado = events[0];
  const restoEventos = events.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* BANNER PRINCIPAL DINÁMICO */}
      <section className="relative h-[500px] w-full bg-slate-900 overflow-hidden">
        {destacado?.image_url ? (
          <img src={destacado.image_url} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Banner" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-80" />
        )}
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            AGENDA CONIL
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl font-light">
            {destacado ? `Destacado hoy: ${destacado.title}` : "Descubre los mejores eventos, fiestas y cultura en Conil."}
          </p>
          {destacado && (
            <div className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full font-bold animate-pulse">
              ¡NUEVA ACTIVIDAD!
            </div>
          )}
        </div>
      </section>

      {/* LISTADO DE ACTIVIDADES */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 border-b-4 border-blue-500 inline-block">
          Próximas Citas
        </h2>

        {events.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
            <p className="text-gray-400 text-xl font-medium">Estamos preparando nuevas sorpresas para Conil...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
              <div key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img src={event.image_url || "/api/placeholder/400/320"} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black text-blue-600 uppercase">
                    {event.category}
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">
                    {new Date(event.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'long' })}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-500 mt-3 text-sm leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-slate-400 text-xs italic">
                    <span className="text-blue-500 mr-2">📍</span> {event.location}
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