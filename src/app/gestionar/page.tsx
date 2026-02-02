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
import { sql } from '@vercel/postgres';
import { createEvent, deleteEvent } from '@/actions/agendaActions';

export default async function PanelGestion() {
  const { rows: events } = await sql`SELECT * FROM events ORDER BY date DESC`;

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-black mb-6 border-b pb-4">Panel de Gestión - Conil.com</h1>
        
        {/* FORMULARIO PARA AÑADIR */}
        <form action={createEvent} className="space-y-4 mb-10 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="font-bold text-blue-800">Añadir Actividad</h2>
          <div className="grid grid-cols-2 gap-4">
            <input name="title" placeholder="Título" className="p-2 border rounded" required />
            <input name="image_url" placeholder="URL de la imagen (JPG/PNG)" className="p-2 border rounded" />
            <input name="date" type="datetime-local" className="p-2 border rounded" required />
            <input name="location" placeholder="Lugar" className="p-2 border rounded" required />
          </div>
          <textarea name="description" placeholder="Descripción corta" className="w-full p-2 border rounded" />
          <select name="category" className="w-full p-2 border rounded">
            <option value="Fiesta">Fiesta / DJ</option>
            <option value="Gastronomía">Gastronomía</option>
            <option value="Cultura">Cultura</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700">
            Publicar en la Agenda
          </button>
        </form>

        {/* LISTA PARA BORRAR */}
        <h2 className="font-bold mb-4">Actividades Publicadas</h2>
        <div className="space-y-2">
          {events.map((event) => (
            <div key={event.id} className="flex justify-between items-center p-3 bg-gray-50 rounded border">
              <span>{event.title}</span>
              <form action={async () => { 'use server'; await deleteEvent(event.id); }}>
                <button className="text-red-500 font-bold px-3 py-1 hover:bg-red-50">Eliminar</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}