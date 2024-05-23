import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const sessionCookie = cookies().get('session')?.value;
        if (!sessionCookie) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const userdata = jwtDecode(sessionCookie);
        if (!userdata) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const userId = userdata.sub;
        const userCart = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
        if (!userCart.ok) {
            return new NextResponse("User not found", { status: 404 });
        }

        const userData = await userCart.json();
        return new NextResponse(JSON.stringify({ data: userData[0] }), { status: 200 });
    } catch (error) {
        console.error("Server Error:", error);
        return new NextResponse("Server Error", { status: 500 });
    }
}
