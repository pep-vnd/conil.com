import { sql } from '@vercel/postgres';

export default async function AgendaPage() {
  // Traemos los eventos de la base de datos ordenados por fecha
  const { rows: events } = await sql`SELECT * FROM events WHERE date >= NOW() ORDER BY date ASC`;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Agenda Conil</h1>
          <p className="text-lg text-slate-600">Descubre los mejores eventos, fiestas y cultura en Conil.</p>
        </header>

        {events.length === 0 ? (
          <p className="text-center text-gray-500">No hay eventos programados para hoy. ¡Vuelve pronto!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase">
                      {event.category}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      {new Date(event.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center text-slate-500 text-sm">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}