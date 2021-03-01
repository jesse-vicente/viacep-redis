const { Router } = require('express');

const client = require('../cache/redis');
const AddressController = require('../controllers/AddressController');

const router = Router();

const middleware = (request, response, next) => {
  try {
    const { cep_number } = request.body;

    client.get(cep_number, (error, cached) => {
      if (error) {
        return response.status(500).send({ message: error });
      }

      if (cached) {
        return response.send(JSON.parse(cached));
      }

      return next();
    });
  } catch (error) {
    response.status(400).send({ message: 'O CEP informado é inválido.' });
  }
}

router.post('/cep', middleware, AddressController.store);

module.exports = router;
