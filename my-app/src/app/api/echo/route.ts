import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);
  console.log({ userId });
  if (!userId) {
    return new NextResponse(null, { status: 401, statusText: 'Unauthorized' });
  }
  return NextResponse.json({ userId });
}
