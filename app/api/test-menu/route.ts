import { NextResponse } from "next/server";

import { getLocalizedMenu } from "@/lib/sheets";

export async function GET() {

  const menu = await getLocalizedMenu();

  return NextResponse.json(menu);

}