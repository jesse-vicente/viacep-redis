const axios = require('axios');

const client = require('../cache/redis');
const connection = require('../database/connection');

module.exports = {
  async store(request, response) {
    try {
      const { cep_number } = request.body;

      const { data } = await axios.get(`https://viacep.com.br/ws/${cep_number}/json`);

      if (data.erro)
        return response.status(404).send({ message: 'Nenhum resultado foi encontrado.' });

      const { cep, bairro, logradouro, localidade, uf } = data;

      const address = { cep, bairro, logradouro, localidade, uf };

      // Salvar no cache
      client.setex(cep_number, 3600, JSON.stringify(address));

      // Salvar no banco
      await connection('addresses').insert(address);

      return response.status(201).send(address);
    } catch (error) {
      return response.status(400).send({
        message: 'O CEP informado é inválido.'
      });
    }
  }
}
