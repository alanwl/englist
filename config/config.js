var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'englist'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/englist-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'englist'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/englist-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'englist'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/englist-production'
  }
};

module.exports = config[env];
