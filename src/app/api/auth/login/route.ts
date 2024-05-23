import { NextResponse, NextRequest } from "next/server";
import { createSession } from "@/lib/session";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { username, password } = await req.json();
    try {
      const user = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (user.ok) {
        const token = await user.json();
        await createSession(token.token);
      } else if (user.status === 401) {
        return NextResponse.json({ error: "Invalid Credentials" });
      } else {
        // Handle other error cases
        return NextResponse.json({
          error: "An error occurred while logging in",
        });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: "An error occurred while processing your request",
      });
    }
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" });
  }
  return NextResponse.redirect(new URL("/", req.nextUrl).toString());
}
