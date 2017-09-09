'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/exam-dev'
  },

  sql: {
    maxLimit: 100,
    host: 'sql12.freemysqlhosting.net',
    user : 'sql12191887',
    password: 'gyEXd3imH1',
    database: 'sql12191887'
  },

  log: {
    logLevel : 'debug' 
  },
  seedDB: false
};
