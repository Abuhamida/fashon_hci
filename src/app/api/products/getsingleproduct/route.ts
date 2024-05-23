import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    
    const { productId } = await req.json();
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    if (response.ok) {
      const data = await response.json();
    //   
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Server Error:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
