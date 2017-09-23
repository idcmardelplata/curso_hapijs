'use strict'
const Boom = require('boom')

const Handler = {
  index: {
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    },
    handler: (request, reply) => {
      reply.view('index', null, {layout: 'hero'})
    }
  },

  css: {
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    },
    handler: {
      directory: { path: '../public/css' }
    }
  },
  js: {
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    },
    handler: {
      directory: { path: '../public/js' }
    }
  },
  images: {
    plugins: {
      'hapi-auth-cookie': {
        redirect: false
      }
    },
    handler: {
      directory: {
        path: '../public/images'
      }
    }
  },

  missing: {
    handler: (request, reply) => {
      const accept = request.headers.accept
      if (accept && accept.match(/json/)) {
        return reply(Boom.notFound('Mierda este recurso no esta disponible!'))
      }
      reply.view('404').code(404)
    }
  }
}

module.exports = Handler
