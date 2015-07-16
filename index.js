var net = require('net')

net.createServer(function (c) {
  c.pipe(c)
}).listen(7)
