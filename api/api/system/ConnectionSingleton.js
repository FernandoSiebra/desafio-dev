
const mariadb = require('mariadb');

const ConnectionSingleton = (function(){
    let instance;

    async function createInstance()
    {
        // const client = new Client({
        //     connectionString: `postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?user=${process.env.DB_USER}&password=${process.env.DB_PASS}`
        // });
        // // console.log( `postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?user=${process.env.DB_USER}&password=${process.env.DB_PASS}`);
        // await client.connect();
        // return client;

        const pool = mariadb.createPool({
            host: process.env.DB_HOST, 
            user:process.env.DB_USER, 
            password: process.env.DB_PASS,
            connectionLimit: 5
       });


    }

    return {
        getInstance : async () =>
        {
            if( !instance )
            {
                instance = await createInstance();
            }
            return instance;
        }
    }

})();



module.exports = ConnectionSingleton 