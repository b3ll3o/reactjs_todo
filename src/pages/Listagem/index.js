import React, { useEffect } from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import Post from './Post';

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
      { post && <Post titulo={post.titulo} conteudo={post.conteudo} /> }
      <Link to='/add'>Adicionar</Link>
    </Container>
  );
}