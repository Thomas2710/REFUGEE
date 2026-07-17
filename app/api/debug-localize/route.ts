// app/api/debug-localized/route.ts

import { NextResponse } from "next/server";
import { getLocalizedMenu } from "@/lib/sheets";

export async function GET() {
  return NextResponse.json(await getLocalizedMenu());
}