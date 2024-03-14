const stun = require('node-stun');

const stunPort = 3478; // 标准的STUN端口是 3478
const server = stun.createServer();
server.listen(stunPort);

server.on('listening', (e) => {
  console.log(`STUN server started on port ${stunPort}`, e);
});

server.on('bindingRequest', (e) => {

  console.log('Received STUN binding request', e);
});
