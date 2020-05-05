import React, { useEffect } from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

export default () => {

  const dispatch = useDispatch();
  const { post } = useSelector(state => state);

  useEffect(() => {

    const fetch = () => {
      dispatch({ type: 'GET_POST' });
    }

    fetch();
  }, [dispatch]);

  return (
    <Container>
      <span>{post.titulo}</span>
      <span className='last-line'>{post.conteudo}</span>
      <Link to='/add'>Adicionar</Link>
    </Container>
  );
}