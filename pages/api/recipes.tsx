import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

// Определяем интерфейс для рецепта
interface Recipe {
  title: string;
  ingredients: Array<{
    name: string;
    src: string;
    quantity: number;
    unit: string;
  }>;
  instructions: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), "data", "recipes.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const recipes: Recipe[] = JSON.parse(fileContents).recipes; // Указываем тип для recipes

    if (req.method === "GET") {
      return res.status(200).json(recipes);
    } else if (req.method === "POST") {
      const { title, ingredients, instructions }: Recipe = req.body; // Указываем тип для тела запроса

      if (!title || !ingredients || !instructions) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      recipes.push({ title, ingredients, instructions }); // В данном примере мы просто добавляем рецепт в массив
      return res.status(201).json({ message: "Recipe added (not saved)" });
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("API error:", error);
    return res
      .status(500)
      .json({
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
  }
}

// Экспортируем по умолчанию
export default handler;
