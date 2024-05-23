import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  const cookie = req.cookies.get("session");
  const token = cookie?.value;
  if (token){
    
    return NextResponse.json({ data: true});
  }
  else{
    return NextResponse.json({ data: false });
  }
  
}

