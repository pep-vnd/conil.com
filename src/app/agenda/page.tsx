import { sql } from '@vercel/postgres';

export default async function AgendaPublica() {
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;
  const destacado = events[0];

  return (
    <div className="min-h-screen bg-white">
      {/* BANNER DINÁMICO */}
      <section className="relative h-[450px] bg-slate-900 flex items-center justify-center overflow-hidden">
        {destacado?.image_url && (
          <img src={destacado.image_url} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Banner" />
        )}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-black text-white tracking-tighter mb-2 italic">AGENDA CONIL</h1>
          <p className="text-blue-300 text-lg uppercase tracking-[0.3em] font-light">
            {destacado ? destacado.title : "Próximamente"}
          </p>
        </div>
      </section>

      {/* LISTADO DE ACTIVIDADES */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        {events.map(ev => (
          <div key={ev.id} className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            {ev.image_url && <img src={ev.image_url} className="h-48 w-full object-cover" />}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-slate-800">{ev.title}</h3>
              <p className="text-slate-500 text-sm italic">📍 {ev.location}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}