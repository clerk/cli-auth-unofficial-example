import { Config } from '@oclif/core';
import { TokenCache } from './types';
import * as fs from 'fs-extra';
import * as path from 'path';

// TODO: This needs to be replaced by a secure store as we're reading credentials
export const createTokenCache = (config: Config): TokenCache => {
  const filePath = path.join(config.configDir, 'config.json');
  fs.ensureFileSync(path.join(config.configDir, 'config.json'));
  const readConfig = () => JSON.parse(fs.readFileSync(filePath).toString() || '{}');
  const writeConfig = (json: any) => fs.writeJSONSync(filePath, json);
  return {
    saveToken: (key, token) => {
      writeConfig({ ...readConfig(), [key]: token });
    },
    getToken: key => {
      return readConfig()[key];
    },
  };
};
