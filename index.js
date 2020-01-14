'use strict';

require('dotenv').config()
const hapi = require('@hapi/hapi')
const config = require('./config/index')
const routes = require('./routes/index')
const db = require('./models/dbConnection')
const inert = require('inert')

const init = async () => {

    const server = hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    await server.register(require('@hapi/vision'));
    await server.register(inert);

    server.route(routes(server));
    db.mongoDBConnection();

    //Starting the server......
    await server.start()
    console.log('Server running on %s', server.info.uri);    
};

process.on('unhandledRejection', (err) => {                                     

    console.log(err);
    process.exit(1);
});

init();


