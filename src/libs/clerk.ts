import Clerk from '@clerk/clerk-js/headless';
import type ClerkType from '@clerk/clerk-js';
import { Config } from '@oclif/core';
import { createTokenCache } from './tokenCache';

const KEY = '__clerk_client_jwt';

global.window = global.window || {};

const clerkFactory = (options: { publishableKey: string }) => {
  const { publishableKey } = options;
  let clerkInstance: ClerkType;

  return async (config: Config) => {
    const tokenCache = createTokenCache(config);
    const getToken = () => tokenCache.getToken(KEY);
    const saveToken = (token: string) => tokenCache.saveToken(KEY, token);

    if (clerkInstance) {
      return clerkInstance;
    }

    clerkInstance = new Clerk(publishableKey);
    clerkInstance.__unstable__onBeforeRequest(async requestInit => {
      requestInit.credentials = 'omit';
      requestInit.url?.searchParams.append('_is_native', '1');
      (requestInit.headers as Headers).set('authorization', getToken() || '');
    });

    clerkInstance.__unstable__onAfterResponse(async (_, response) => {
      const authHeader = response?.headers.get('authorization');
      if (authHeader) {
        saveToken(authHeader);
      }
    });

    await clerkInstance.load({ standardBrowser: false });
    return clerkInstance;
  };
};

export const createClerkClient = clerkFactory({
  publishableKey: 'pk_test_Y2xlcmsuZGVzdGluZWQuYm9uZWZpc2gtODcubGNsLmRldiQ',
});
