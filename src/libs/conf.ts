// This needs to be replaced with a secure store as we're storing user credentials
import { Command } from '@oclif/core';
import * as fs from 'fs-extra';
import * as path from 'path';

export class Config extends Command {
  async run() {
    const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'));
    this.log('User config:');
    console.dir(userConfig);
  }
}
