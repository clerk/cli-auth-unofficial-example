import { Command } from '@oclif/core';
import { createClerkClient } from '../libs/clerk';

export default class Status extends Command {
  static description = 'describe the auth status';
  static args = {};

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Status);
    const clerkClient = await createClerkClient(this.config);
    const signedIn = !!clerkClient.user;
    this.log(signedIn ? `Signed in: ${clerkClient.user?.id} ${clerkClient.user?.firstName} ` : 'Signed out');
  }
}
