import React from 'react';

import Container from './styles';

export default ({titulo, conteudo}) => {

  return(
    <Container>
      <span>{titulo && titulo}</span>
      <span>{conteudo && conteudo}</span>
    </Container>
  )
}