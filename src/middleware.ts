import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

// Specify protected and public routes
const protectedRoutes = ["/products","/products/product-details/Fashion-set","/cart"];
const publicRoutes = ["/sign-in", "/sign-up"];

export default async function middleware(req: NextRequest) {
  // Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // Decrypt the session from the cookie
  const cookie = req.cookies.get("session"); // Get the cookie object
  const token = cookie?.value; // Extract the token value
  let userData
  if (token){
    userData = jwtDecode(token);
 
  }
  // Redirect to login if the user is not authenticated and trying to access a protected route
  if (isProtectedRoute && !userData?.sub) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Redirect to profile if the user is authenticated and tries to access a public route
  if (isPublicRoute && userData?.sub) {
    return NextResponse.redirect(new URL('/', req.url));
  }
 
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
