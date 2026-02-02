'use server'
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function createEvent(formData: FormData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const date = formData.get('date');
  const location = formData.get('location');
  const category = formData.get('category');

  await sql`
    INSERT INTO events (title, description, date, location, category)
    VALUES (${title as string}, ${description as string}, ${date as string}, ${location as string}, ${category as string})
  `;

  revalidatePath('/agenda');
  revalidatePath('/admin/agenda');
}

export async function deleteEvent(id: number) {
  await sql`DELETE FROM events WHERE id = ${id}`;
  revalidatePath('/agenda');
  revalidatePath('/admin/agenda');
}