import { NextResponse } from "next/server";

import {
  getTranslations,
} from "@/lib/translations/repository";

export async function GET() {
  const translations =
    await getTranslations();

  return NextResponse.json(
    translations
  );
}