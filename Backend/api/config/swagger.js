const swaggerAutogen = require('swagger-autogen')({openapi:'3.0.0'});
require('dotenv').config(); 


const doc = {
    info:{
        title:'Adopcion Api',
        description: 'Api para gestinar los centros de adopcion'
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }],
    host:process.env.API_HOST,
    schemes:['http','https'],
    consumes: ['application/json'],
    produces: ['application/json']
};

const outputFile = '../swagger-output.json';
const endpointsFiles = [
    '../app.js'
]

swaggerAutogen(outputFile,endpointsFiles,doc).then(
    ()=>{
        require('../app')
    }
);
