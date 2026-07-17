import { z } from "zod";
import { TranslationRow } from "@/lib/translations/models";

const COLUMN = {
  ID: 0,
  SOURCE: 1,
  EN: 2,
  DE: 3,
  FR: 4,
} as const;

const TranslationSchema = z.object({
  id: z.string().min(1),

  source: z.string().min(1),

  en: z.string(),

  de: z.string(),

  fr: z.string(),
});

export function parseTranslationRow(
  row: string[]
): TranslationRow {
  return TranslationSchema.parse({
    id: row[COLUMN.ID],

    source: row[COLUMN.SOURCE],

    en: row[COLUMN.EN] ?? "",

    de: row[COLUMN.DE] ?? "",

    fr: row[COLUMN.FR] ?? "",
  });
}