'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 3000
})


server.start((err) => {
  if (err) console.error(`Error al inicializar el servidor: ${err}`)
  console.log(`Server corriendo en ${server.info.uri}`)
})


