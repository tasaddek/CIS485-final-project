const WebSocket = require('ws');

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          type: 'BOOK_SHARED',
          data: JSON.parse(message)
        }));
      }
    });
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server+WS running on port ${PORT}`);
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});