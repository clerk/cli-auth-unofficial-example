import { Server, Socket } from 'net';

const PORT = '1337';
const LOCALHOST_REDIRECT_URL = `http://localhost:${PORT}`;

const successHtml = `
<body>
  <main style="height: 100%; width: 100%; display: flex;justify-content: center;align-items: center">
    <div>
      <h1>Signed in</h1>
      <h2>You can safely close this tab and return to your terminal</h2>
    </div>
  </main>
</body>
`;

// Force destroy server + open connections
const makeDestroyable = (server: Server) => {
  const connections: Socket[] = [];
  server.on('connection', c => connections.push(c));
  return () => {
    server.close();
    connections.forEach(c => c.destroy());
  };
};

export const createLocalhostAuthServer = async () => {
  const express = await import('express');
  const app = express();

  const listenForAuthRedirect = () => {
    return new Promise(resolve => {
      const server: Server = app.listen(PORT);
      const destroyServer = makeDestroyable(server);

      app.get('/', (req, res) => {
        const code = req.query.token as string;
        res.send(successHtml);
        destroyServer();
        resolve(code);
      });
    }) as Promise<string>;
  };

  return { LOCALHOST_REDIRECT_URL, listenForAuthRedirect };
};
