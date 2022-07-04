const { Client } = require("pg");

const ConnectionSingleton = (function(){
    let instance;

    async function createInstance()
    {
        const client = new Client({
            connectionString: `postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?user=${process.env.DB_USER}&password=${process.env.DB_PASS}`
        });
        // console.log( `postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?user=${process.env.DB_USER}&password=${process.env.DB_PASS}`);
        await client.connect();
        return client;
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