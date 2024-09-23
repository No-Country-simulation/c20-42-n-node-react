const request = require('supertest');
const app = require('../../app');

describe('CentroAdopcion Controller',()=>{

    it('shoud get all CentroAdopcion', async ()=>{
        const res = await request(app).get('/centroadopcion/list');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

});