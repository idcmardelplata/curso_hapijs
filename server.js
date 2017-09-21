'use strict'
const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 3000
})


server.register([

])

server.start(function(err) {
  if (err) throw err
  console.log(`Server start at ${server.info.uri}`)
})
