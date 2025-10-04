const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Request received') // los console.log solo se ven en el servidor
  res.end('Hello from Node.js HTTP server!')
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

/*
server.listen(0, () => {
    const address = server.address()
    console.log(`Server is listening on port ${address.port}`)
}) // puerto aleatorio, no recomendable para produccion
*/
