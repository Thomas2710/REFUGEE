import { NextResponse } from "next/server";

import {
  syncTranslations,
} from "@/lib/translations/sync";

export async function GET() {

  await syncTranslations();

  return NextResponse.json({
    success: true,
  });

}