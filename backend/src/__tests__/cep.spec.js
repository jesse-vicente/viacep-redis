const request = require('supertest')

const app = require('../app');

describe('CEP info', () => {
  it('should be able to get cep info from viaCEP and save to database', async () => {
    const response = await request(app).post('/cep').send({
      cep_number: '01310100',
    });

    expect(response.status).toBe(201);
  });

  it('should be able to get cep info from cache', async () => {
    const response = await request(app).post('/cep').send({
      cep_number: '01310100',
    });

    expect(response.status).toBe(200);
  });

  it('should not be able to get cep info from an nonexistent cep', async () => {
    const response = await request(app).post('/cep').send({
      cep_number: '12345678',
    });

    expect(response.status).toBe(404);
  });

  it('should not be able to get cep info from an invalid cep', async () => {
    const response = await request(app).post('/cep').send({
      cep_number: '123456789',
    });

    expect(response.status).toBe(400);
  });
});