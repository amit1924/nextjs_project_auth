import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const { nextUrl } = req;

  if (nextUrl.pathname == "/login") return null;

  if (!isLoggedIn && nextUrl.pathname != "/login")
    return Response.redirect(new URL("/login", nextUrl));
});

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/dashboard", "/profile"],
};
