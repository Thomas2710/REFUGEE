import { z } from "zod";
import { MenuItem } from "@/types/menu";

const COLUMN = {
  ID: 0,
  SECTION: 1,
  ORDER: 2,
  TITLE: 3,
  DESCRIPTION: 4,
  VEGETARIAN: 5,
  VEGAN: 6,
  GLUTEN_FREE: 7,
  MILK: 8,
  NUTS: 9,
  AVAILABLE: 10,
} as const;

const MenuRowSchema = z.object({
  id: z.string().min(1),

  section: z.enum([
    "starter",
    "main",
    "dessert",
  ]),

  order: z.coerce.number().int().positive(),

  title: z.string().min(1),
  description: z.string(),

  vegetarian: z.enum(["TRUE", "FALSE"]),
  vegan: z.enum(["TRUE", "FALSE"]),
  gluten_free: z.enum(["TRUE", "FALSE"]),
  milk: z.enum(["TRUE", "FALSE"]),
  nuts: z.enum(["TRUE", "FALSE"]),
  available: z.enum(["TRUE", "FALSE"]),
});

function parseBoolean(value: "TRUE" | "FALSE") {
  return value === "TRUE";
}

export function parseMenuRow(row: string[]): MenuItem {
  const parsed = MenuRowSchema.parse({
    id: row[COLUMN.ID],
    section: row[COLUMN.SECTION],
    order: row[COLUMN.ORDER],
    title: row[COLUMN.TITLE],
    description: row[COLUMN.DESCRIPTION],

    vegetarian: row[COLUMN.VEGETARIAN],
    vegan: row[COLUMN.VEGAN],
    gluten_free: row[COLUMN.GLUTEN_FREE],
    milk: row[COLUMN.MILK],
    nuts: row[COLUMN.NUTS],

    available: row[COLUMN.AVAILABLE],
  });

  return {
    id: parsed.id,

    section: parsed.section,
    order: parsed.order,

    title: parsed.title,
    description: parsed.description,

    vegetarian: parseBoolean(parsed.vegetarian),
    vegan: parseBoolean(parsed.vegan),
    glutenFree: parseBoolean(parsed.gluten_free),

    milk: parseBoolean(parsed.milk),
    nuts: parseBoolean(parsed.nuts),

    available: parseBoolean(parsed.available),
  };
}