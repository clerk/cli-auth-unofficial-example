'use client';
import React from 'react';

export const AuthCli = () => {
  const getTokenAndRedirect = async () => {
    const res = await fetch('/api/cli-token');
    const payload = await res.json();
    const redirectUrl = new URL(new URL(window.location.href).searchParams.get('redirectUrl') || '');
    redirectUrl.searchParams.set('token', payload.token);
    console.log(redirectUrl);
    window.location = redirectUrl.href;
  };

  return (
    <div>
      <h2>Do you want to authorize this CLI?</h2>
      <button onClick={getTokenAndRedirect}>Yes, sign me in</button>
    </div>
  );
};
