import { useState } from 'react';

import { Container, Form, Error, Content } from './styles';

import api from '../../services/api';

function Home() {

  const [address, setAddress] = useState(null);
  const [cep_number, setCepNumber] = useState('');

  const [inputError, setInputError] = useState('');
  const [buttonText, setButtonText] = useState('Buscar');

  async function handleSubmit(e) {
    e.preventDefault();

    // Evita requisições desnecessárias
    if (!address || cep_number !== address.cep.replace('-', '')) {
      try {
        setButtonText('Aguarde...');

        const response = await api.post('cep', { cep_number });

        const { cep, bairro, logradouro, localidade, uf } = response.data;

        const addressInfo = { cep, bairro, logradouro, localidade, uf };

        setAddress(addressInfo);

        setInputError('');
        setButtonText('Buscar');
      } catch (error) {
        setAddress(null);
        setButtonText('Buscar');
        setInputError(error.response.data.message);
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} hasError={!!inputError}>
        <input
          required
          value={cep_number}
          minLength={8}
          maxLength={8}
          placeholder="Digite o CEP"
          onChange={e => setCepNumber(e.target.value)}
        />
        <button type="submit">{buttonText}</button>
      </Form>

      { inputError && <Error>{inputError}</Error>}

      {address && (
        <Content>
          <p>Resultados para:
            <strong> {address.cep}</strong>
          </p>

          <p>{address.logradouro}, {address.bairro} | {address.localidade} - {address.uf}</p>
        </Content>
      )}
    </Container>
  )
}

export default Home;
