import { Command } from '@oclif/core';
import { createClerkClient } from '../libs/clerk';

export default class Ping extends Command {
  static description = 'describe the command here';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Ping);
    const clerkClient = await createClerkClient(this.config);
    const res = await fetch('http://localhost:3000/api/echo', {
      headers: { authorization: (await clerkClient.session?.getToken()) || '' },
    });
    this.log(`${res.status} -- ${res.statusText} -- ${res.ok && JSON.stringify(await res.json())}`);
  }
}
