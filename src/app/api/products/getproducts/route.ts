import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    
    const { category } = await req.json();
    const response = await fetch(
      `https://fakestoreapi.com/products/categories${category}`
    );
    if (response.ok) {
      const data = await response.json();
    ;
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Server Error:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
