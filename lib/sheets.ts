import { sheets } from "./google";
import { SHEETS } from "./config";

import { parseMenuRow } from "./parsers/menu";
import { parseInfoRow } from "./parsers/info";

import { getTranslations } from "@/lib/translations/repository";
import { localizeMenu } from "@/lib/translations/localize";

export async function getRawMenu() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: `${SHEETS.MENU}!A:K`,
  });

  return response.data.values ?? [];
}

export async function getMenu() {
  const rows = await getRawMenu();

  return rows
    .slice(1)
    .map(parseMenuRow)
    .filter((dish) => dish.available);
}

export async function getRawInfo() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: `${SHEETS.INFO}!A:F`,
  });

  return response.data.values ?? [];
}

export async function getInfo() {
  const rows = await getRawInfo();

  return rows
    .slice(1)
    .map(parseInfoRow)
    .filter((item) => item.available);
}

export async function getLocalizedMenu() {
  const menu = await getMenu();

  const translations = await getTranslations();

  return localizeMenu(
    menu,
    translations
  );
}