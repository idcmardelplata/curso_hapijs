'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 3000
})

server.route({
  method: 'GET',
  path: '/',
  handler: (req, res) => {
    const data = {
      id: 123,
      name: 'Martin Algañaraz',
      isDeveloper: true,
      func: function() {
        return 1
      }
    }
    res(data).code(201)
  }
})

server.start((err) => {
  if (err) console.error(`Error al inicializar el servidor: ${err}`)
  console.log(`Server corriendo en ${server.info.uri}`)
})


