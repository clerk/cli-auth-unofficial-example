import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  afterAuth: auth => {},
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
