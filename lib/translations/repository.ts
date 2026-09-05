import { sheets } from "@/lib/google";
import { SHEETS } from "@/lib/config";

import { parseTranslationRow } from "@/lib/parsers/translations";
import { TranslationRow } from "./models";

export async function getTranslations() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: `${SHEETS.TRANSLATIONS}!A:G`,
  });

  const rows = response.data.values ?? [];

  return rows.slice(1).map(parseTranslationRow);
}

export async function appendTranslation(
  translation: TranslationRow
) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: `${SHEETS.TRANSLATIONS}!A:G`,
    valueInputOption: "RAW",

    requestBody: {
      values: [[
        translation.id,
        translation.source,
        translation.en,
        translation.de,
        translation.fr,
        translation.uk,
        translation.hr,
      ]],
    },
  });
}

/**
 * Update only the source column (column B)
 */
export async function updateTranslation(
  translation: TranslationRow
) {
  const response =
    await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: `${SHEETS.TRANSLATIONS}!A:G`,
    });

  const rows = response.data.values ?? [];

  const index = rows.findIndex(
    (row, i) => i > 0 && row[0] === translation.id
  );

  if (index === -1) {
    throw new Error(
      `Translation '${translation.id}' not found.`
    );
  }

  const sheetRow = index + 1;

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,

    range: `${SHEETS.TRANSLATIONS}!A${sheetRow}:G${sheetRow}`,

    valueInputOption: "RAW",

    requestBody: {
      values: [[
        translation.id,
        translation.source,
        translation.en,
        translation.de,
        translation.fr,
        translation.uk,
        translation.hr,
      ]],
    },
  });
}