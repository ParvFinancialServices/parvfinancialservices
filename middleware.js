import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let role = request.cookies.get("role");
  let jwtToken = request.cookies.get("jwt");
  if (
    request.nextUrl.pathname.startsWith("/dashboard/admin") &&
    role?.value !== "Admin" &&
    !jwtToken
  ) {
    // const url = new URL()
    return NextResponse.redirect(new URL("/login", request.url));
  }else{
    console.log("else",role);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/admin/:role*",
};
