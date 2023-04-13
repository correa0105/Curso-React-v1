import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import * as botaoLoginActions from '../../store/modules/botaoLogin/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(botaoLoginActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
