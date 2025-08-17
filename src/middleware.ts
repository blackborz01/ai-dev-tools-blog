export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    // Protected routes that require authentication
    "/dashboard/:path*",
    "/settings/:path*",
    "/profile/:path*",
  ]
}
