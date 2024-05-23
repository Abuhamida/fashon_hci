import { deleteSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest) {
  try {
    deleteSession();
    // redirect("/");
    return NextResponse.redirect(new URL("/", req.nextUrl).toString());

  } catch (error) {
    return NextResponse.json({ error: "Logged out failed" });
  }
}
