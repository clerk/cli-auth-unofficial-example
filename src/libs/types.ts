export interface TokenCache {
  getToken: (key: string) => string | undefined | null;
  saveToken: (key: string, token: string) => void;
}
