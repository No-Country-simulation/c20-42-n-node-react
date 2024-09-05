const swaggerAutogen = require('swagger-autogen')({openapi:'3.0.0'});

const doc = {
    info:{
        title:'Adopcion Api',
        description: 'Api para gestinar los centros de adopcion'
    },
    host:'localhost:3000',
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
