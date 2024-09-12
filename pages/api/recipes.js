const { sql } = require("@vercel/postgres");
const fs = require("fs");
const path = require("path");

async function loadInitialData() {
  const filePath = path.join(process.cwd(), "data", "recipes.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const recipes = JSON.parse(fileContents).recipes;

  for (const recipe of recipes) {
    const { title, ingredients, instructions } = recipe;
    await sql`
      INSERT INTO Recipes (title, ingredients, instructions)
      VALUES (${title}, ${JSON.stringify(ingredients)}, ${instructions})
      ON CONFLICT (title) DO NOTHING;
    `;
  }
}

module.exports = async (req, res) => {
  try {
    // Создание таблицы, если она не существует
    await sql`CREATE TABLE IF NOT EXISTS Recipes (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      ingredients TEXT NOT NULL,
      instructions TEXT NOT NULL
    );`;

    // Загрузка начальных данных
    await loadInitialData();

    if (req.method === "GET") {
      const result = await sql`SELECT * FROM Recipes`;
      return res.status(200).json(result.rows);
    } else if (req.method === "POST") {
      const { title, ingredients, instructions } = req.body;
      if (!title || !ingredients || !instructions) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const result = await sql`
        INSERT INTO Recipes (title, ingredients, instructions)
        VALUES (${title}, ${ingredients}, ${instructions})
        RETURNING *;
      `;
      return res.status(201).json(result.rows[0]);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: error.message });
  }
};
