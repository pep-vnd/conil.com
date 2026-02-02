import { sql } from '@vercel/postgres';
import { createEvent, deleteEvent } from '@/actions/agendaActions';

export default async function AdminAgenda() {
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date ASC`;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Administrador de Agenda - Conil.com</h1>
      
      <form action={createEvent} className="bg-gray-100 p-6 rounded-lg mb-10 space-y-4">
        <h2 className="font-semibold">Añadir Nuevo Evento</h2>
        <input name="title" placeholder="Título del evento" className="w-full p-2 border" required />
        <textarea name="description" placeholder="Descripción" className="w-full p-2 border" />
        <input name="date" type="datetime-local" className="w-full p-2 border" required />
        <input name="location" placeholder="Lugar (ej: Playa de los Bateles)" className="w-full p-2 border" required />
        <select name="category" className="w-full p-2 border">
          <option value="Concierto">Concierto</option>
          <option value="Fiesta">Fiesta / DJ</option>
          <option value="Cultura">Cultura</option>
          <option value="Gastronomía">Gastronomía</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">Publicar Evento</button>
      </form>

      <div className="space-y-4">
        <h2 className="font-semibold">Eventos Publicados</h2>
        {events.map((event) => (
          <div key={event.id} className="border p-4 flex justify-between items-center bg-white shadow-sm">
            <div>
              <p className="font-bold">{event.title}</p>
              <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
            </div>
            <form action={async () => { 'use server'; await deleteEvent(event.id); }}>
              <button className="text-red-500 text-sm">Eliminar</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}