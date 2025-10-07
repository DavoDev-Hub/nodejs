const http = require('node:http')
const fs = require('node:fs')

console.log(process.env) // variables de entorno

const desiredPort = process.env.PORT || 3000 // puerto por defecto o el que venga en las variables de entorno

const processRequest = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Welcome to the Home Page!!')
  } else if (req.url === '/Tuxito') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'image/png')
    fs.readFile('tuxito.png', (err, data) => {
      if (err) {
        res.statusCode = 500 // Internal Server Error
        res.end('Error loading image')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/Contacto') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('This is the Contact Page!!')
  } else {
    res.statusCode = 404 // Not Found
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('404 Not Found')
  }
  res.end('Hello from Node.js HTTP server!')
})

processRequest.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})

/*
server.listen(0, () => {
    const address = server.address()
    console.log(`Server is listening on port ${address.port}`)
}) // puerto aleatorio, no recomendable para produccion
*/
