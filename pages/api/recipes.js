const fs = require("fs");
const path = require("path");

async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "recipes.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const recipes = JSON.parse(fileContents).recipes;

    if (req.method === "GET") {
      return res.status(200).json(recipes);
    } else if (req.method === "POST") {
      const { title, ingredients, instructions } = req.body;
      if (!title || !ingredients || !instructions) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      recipes.push({ title, ingredients, instructions });
      return res.status(201).json({ message: "Recipe added (not saved)" });
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: error.message });
  }
}

// Экспортируем по умолчанию
export default handler;
