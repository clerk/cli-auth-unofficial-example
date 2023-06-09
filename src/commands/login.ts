import { Args, Command, Flags, ux } from '@oclif/core';
import { createClerkClient } from '../libs/clerk';
import * as open from 'open';
import { createLocalhostAuthServer } from '../utils/localhostServer';

export default class Login extends Command {
  static description = 'describe the command here';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    name: Flags.string({ char: 'n', description: 'name to print' }),
    force: Flags.boolean({ char: 'f' }),
  };

  static args = {
    file: Args.string({ description: 'file to read' }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Login);
    ux.action.start('Logging in');
    const clerkClient = await createClerkClient(this.config);
    this.log(clerkClient.version);
    const localhostServer = await createLocalhostAuthServer();
    const url = encodeURI(`http://localhost:3000/cli-token?redirectUrl=${localhostServer.LOCALHOST_REDIRECT_URL}`);
    await open(url);
    const token = await localhostServer.listenForAuthRedirect();
    this.log('Received token', token);
    const res = await clerkClient.client?.signIn.create({ strategy: 'ticket', ticket: token });
    if (res && res.status !== 'complete') {
      throw new Error(`Flow did not complete: ${JSON.stringify(res)}`);
    }
    ux.action.stop('Success');
  }
}
