import React from 'react';

import Container from './styles';

export default ({titulo, conteudo}) => {

  return(
    <Container>
      <span>{titulo && titulo}</span>
      <div className="conteudo">{conteudo && conteudo}</div>
    </Container>
  )
}