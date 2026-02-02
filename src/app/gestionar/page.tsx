import { sql } from '@vercel/postgres';
import { createEvent, deleteEvent } from '@/actions/agendaActions';

export default async function AdminPanel() {
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;

  return (
    <div className="min-h-screen bg-white p-10 text-black">
      <h1 className="text-3xl font-bold mb-8">Panel de Control: Conil.com</h1>
      
      <form action={createEvent} className="max-w-2xl bg-gray-50 border p-6 rounded-xl space-y-4 mb-12">
        <h2 className="text-xl font-semibold">Publicar Nuevo Evento</h2>
        <input name="title" placeholder="Título" className="w-full p-2 border rounded" required />
        <input name="image_url" placeholder="URL de la imagen (jpg/png)" className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Descripción" className="w-full p-2 border rounded" />
        <input name="date" type="datetime-local" className="w-full p-2 border rounded" required />
        <input name="location" placeholder="Lugar" className="w-full p-2 border rounded" required />
        <select name="category" className="w-full p-2 border rounded">
          <option value="Fiesta">Fiesta / DJ</option>
          <option value="Cultura">Cultura</option>
          <option value="Gastronomía">Gastronomía</option>
        </select>
        <button type="submit" className="w-full bg-black text-white p-3 rounded font-bold">Publicar Ahora</button>
      </form>

      <div className="max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Eventos Activos</h2>
        {events.map((event) => (
          <div key={event.id} className="flex justify-between p-4 border-b">
            <span>{event.title}</span>
            <form action={async () => { 'use server'; await deleteEvent(event.id); }}>
              <button className="text-red-600">Eliminar</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}