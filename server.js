'use strict'
const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 3000
})


server.register({
  register: require('inert')
}, (err) => {
  if  (err) throw err

  server.route({
    method: 'GET',
    path: '/file.js',
    handler: (request, reply) => {
      reply.file('public/js/file.js')
    } 
  })

  server.route({
    method: 'GET',
    path: '/js/{file*}',
    handler: {
      directory: {
        path: 'public/js',
        listing: false
      }
    }
  })

})



server.start(function(err) {
  if (err) throw err
  console.log(`Server start at ${server.info.uri}`)
})
