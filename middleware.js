import { NextResponse } from "next/server";
import { pageAccess } from "./config/middlewareConfig";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let role = request.cookies.get("role");
  let jwtToken = request.cookies.get("jwt");
  let isAuthorised = false;
  console.log(role?.value);
  
  if (role && jwtToken) {
    pageAccess[role.value].forEach((path) => {
      console.log(path);
      if (request.nextUrl.pathname.startsWith(path)) {
        isAuthorised = true;
        return;
      }
    });

    console.log("isAuthorized",isAuthorised);

    if (isAuthorised) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    console.log("else",role,jwtToken);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/admin/:role*",
};
