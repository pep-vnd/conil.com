import { sql } from '@vercel/postgres';

export async function getEvents() {
    try {
        const { rows } = await sql`SELECT * FROM events WHERE date >= NOW() ORDER BY date ASC LIMIT 5`;
        return rows;
    } catch (error) {
        console.error('Failed to fetch events:', error);
        return [];
    }
}
