'use strict'

const Hapi = require('hapi')
const Boom = require('boom')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 3000
})


const rootHandler = (request, reply) => {
  reply.view('index', {
    title: 'examples/views/jade/index.js | Hapi',
    message: 'Index - Hello World'
  })
}

const aboutHandler = (request, reply) => {
  reply.view('about', {
    title: 'examples/views/jade/index.js | Hapi',
    message: 'About - Hello World'
  })
}

server.register(require('vision'), (err) => {
  if (err) throw err
  
  server.views({
    engines: {
      pug: require('pug')
    },
    path: './views',
    compileOptions: {
      pretty: true
    }
  })

  server.route({method: 'GET', path: '/', handler: rootHandler})
  server.route({method: 'GET', path: '/about', handler: aboutHandler})
  server.route({
    method: 'GET',
    path: '/code',
    config: {
      response: {
        emptyStatusCode: 204
      },
      handler: (request, reply) => reply() 
    }
  })
  server.route({
    method: 'GET',
    path:'/error',
    config: {
      handler: (req, res) => {
        res(Boom.badRequest('Your data is invalid'))
      }
    }
  })

  server.start(function(err) {
    if (err) throw err
    console.log(`Server start at ${server.info.uri}`)
  })
})


