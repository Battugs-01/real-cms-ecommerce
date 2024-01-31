import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  apiRoutes: ["/api/stores"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
