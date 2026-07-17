import { NextResponse } from "next/server";

import { fillMissingTranslations } from "@/lib/translations/engine";

export async function GET() {

  const row = {
    id: "mushroom_soup",
    source: "Crema di funghi porcini",
    en: "",
    de: "",
    fr: "",
  };

  const translated = await fillMissingTranslations(row);

  return NextResponse.json(translated);

}