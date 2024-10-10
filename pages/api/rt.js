import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const result = await sql`CREATE TABLE IF NOT EXISTS Recipes (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      ingredients TEXT NOT NULL,
      instructions TEXT NOT NULL
    );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
