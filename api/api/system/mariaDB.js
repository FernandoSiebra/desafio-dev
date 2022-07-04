const mariadb = require('mariadb');

// here we create a new connection pool
const pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    user:process.env.DB_USER, 
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    connectionLimit: 100
});

// here we are exposing the ability to creating new connections
module.exports={
    getConnection: function(){
      return new Promise(function(resolve,reject){
        pool.getConnection().then(function(connection){
          resolve(connection);
        }).catch(function(error){
          reject(error);
        });
      });
    }
  }