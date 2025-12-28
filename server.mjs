import http from 'node:http'

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('あいうえお')
}).listen(3000)
