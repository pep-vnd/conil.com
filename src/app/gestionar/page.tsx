import { sql } from '@vercel/postgres';

export default async function AgendaPublica() {
  // Obtenemos todos los eventos
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;
  
  // El primer evento será nuestro "Banner Destacado"
  const destacado = events[0];
import { sql } from '@vercel/postgres';
import { createEvent, deleteEvent } from '@/actions/agendaActions';

export default async function PanelGestion() {
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;

  return (
    <div className="min-h-screen bg-white p-8 text-slate-900">
      <div className="max-w-4xl mx-auto border rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-black mb-8">Gestión de Agenda</h1>
        
        {/* Formulario */}
        <form action={createEvent} className="bg-slate-50 p-6 rounded-xl border mb-12 space-y-4 text-black">
          <h2 className="font-bold text-lg">Publicar Nueva Actividad</h2>
          <div className="grid grid-cols-2 gap-4">
            <input name="title" placeholder="Título" className="p-2 border rounded" required />
            <input name="image_url" placeholder="URL Imagen (JPG/PNG)" className="p-2 border rounded" />
            <input name="date" type="datetime-local" className="p-2 border rounded" required />
            <input name="location" placeholder="Lugar" className="p-2 border rounded" required />
          </div>
          <textarea name="description" placeholder="Descripción" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold">Publicar Ahora</button>
        </form>

        {/* Lista de eventos */}
        <h2 className="font-bold mb-4">Eventos publicados:</h2>
        <div className="divide-y border-t">
          {events.map((event) => (
            <div key={event.id} className="py-4 flex justify-between items-center text-black">
              <span>{event.title}</span>
              <form action={async () => { 'use server'; await deleteEvent(event.id); }}>
                <button className="text-red-600 font-bold px-4 py-1 rounded-md border border-red-100 bg-red-50">Eliminar</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}