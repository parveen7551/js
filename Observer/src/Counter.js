const customEE = require('events').EventEmitter;

let number = 0;
setInterval(() => {
  customEE.emit('ping', count);
  count++;
  if (count > 10) process.exit(0)
}, 3500);

module.exports = customEE;
