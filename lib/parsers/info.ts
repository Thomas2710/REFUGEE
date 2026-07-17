import { z } from "zod";
import { InfoItem } from "@/types/info";

const COLUMN = {
  ID: 0,
  ORDER: 1,
  ICON: 2,
  TITLE: 3,
  VALUE: 4,
  AVAILABLE: 5,
} as const;

const InfoRowSchema = z.object({
  id: z.string().min(1),

  order: z.coerce.number().int().positive(),

  icon: z.string().min(1),

  title: z.string().min(1),

  value: z.string().min(1),

  available: z.enum(["TRUE", "FALSE"]),
});

function parseBoolean(value: "TRUE" | "FALSE"): boolean {
  return value === "TRUE";
}

export function parseInfoRow(row: string[]): InfoItem {
  const parsed = InfoRowSchema.parse({
    id: row[COLUMN.ID],
    order: row[COLUMN.ORDER],
    icon: row[COLUMN.ICON],
    title: row[COLUMN.TITLE],
    value: row[COLUMN.VALUE],
    available: row[COLUMN.AVAILABLE],
  });

  return {
    id: parsed.id,
    order: parsed.order,

    icon: parsed.icon,
    title: parsed.title,
    value: parsed.value,

    available: parseBoolean(parsed.available),
  };
}