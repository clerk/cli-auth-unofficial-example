import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs';

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);
  if (!userId) {
    return;
  }
  const ticket = await clerkClient.signInTokens.createSignInToken({ userId, expiresInSeconds: 20 });
  return NextResponse.json({ token: ticket.token });
}
