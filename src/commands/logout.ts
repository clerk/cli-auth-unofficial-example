import { Command, ux } from '@oclif/core';
import { createClerkClient } from '../libs/clerk';

export default class Logout extends Command {
  static description = 'describe the command here';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Logout);
    ux.action.start('Logging out...');
    const clerkClient = await createClerkClient(this.config);
    await clerkClient.signOut();
    ux.action.stop('Logged out.');
  }
}
