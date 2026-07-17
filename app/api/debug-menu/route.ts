import { NextResponse } from "next/server";
import { getMenu } from "@/lib/sheets";

export async function GET() {
  return NextResponse.json(await getMenu());
}