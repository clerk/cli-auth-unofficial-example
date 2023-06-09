import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';
import React from 'react';
import { AuthCli } from '@/app/cli-token/AuthCli';

export default function Page({ searchParams }: any) {
  return (
    <div>
      <SignedOut>
        <SignIn redirectUrl={`/cli-token?redirectUrl=${searchParams.redirectUrl}`} />
      </SignedOut>
      <SignedIn>
        <AuthCli />
      </SignedIn>
    </div>
  );
}
