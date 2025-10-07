const http = require('node:http')
const { findAvailablePort } = require('./10.free.port.js')

const server = http.createServer((req, res) => {
  console.log('Request received') // los console.log solo se ven en el servidor
  res.end('Hello from Node.js HTTP server!')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})

/*
server.listen(0, () => {
    const address = server.address()
    console.log(`Server is listening on port ${address.port}`)
}) // puerto aleatorio, no recomendable para produccion
*/
