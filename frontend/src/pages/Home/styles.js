import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  max-width: 700px;
  height: 100vh;
  margin: 0 auto;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;

  input {
    flex: 1;
    width: 70%;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    font-size: 18px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 30%;
    height: 70px;
    max-width: 210px;

    color: #fff;
    background: #04d361;

    border: 0;
    border-radius: 0 5px 5px 0;

    font-weight: bold;
    font-size: 1rem;

    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }
`;

export const Error = styled.span`
  color: #c53030;
  margin-top: 10px;
  align-self: flex-start;
`;

export const Content = styled.div`
  margin-top: 80px;

  background: #fff;
  padding: 24px;
  border-radius: 5px;

  width: 100%;

  transition: all 0.2s;

  p {
    font-size: 1.2rem;

    &:first-of-type {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    strong {
      font-family: 'Montserrat-Medium', sans-serif;
    }
  }
`;
