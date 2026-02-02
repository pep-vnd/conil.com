import { sql } from '@vercel/postgres';

export default async function PaginaPublica() {
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;
  const destacado = events[0];

  return (
    <div className="min-h-screen bg-white">
      {/* BANNER DINÁMICO */}
      <div className="bg-blue-900 h-[400px] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {destacado?.image_url && <img src={destacado.image_url} className="absolute opacity-40 w-full h-full object-cover" />}
        <div className="relative z-10">
          <h1 className="text-6xl font-black text-white mb-2">AGENDA CONIL</h1>
          <p className="text-blue-200 text-xl font-light">
            {destacado ? `Hoy: ${destacado.title}` : "Descubre lo mejor de Conil"}
          </p>
          <div className="mt-4 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            ¡Nueva Actividad!
          </div>
        </div>
      </div>
      
      {/* LISTADO DE ACTIVIDADES ABAJO */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">
        {events.map(ev => (
          <div key={ev.id} className="rounded-xl shadow-lg border overflow-hidden">
            <img src={ev.image_url} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">{ev.title}</h3>
              <p className="text-gray-500 text-sm">{ev.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}