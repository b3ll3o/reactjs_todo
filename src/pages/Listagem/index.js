import React, { useEffect } from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import Posts from './Posts';

export default () => {

  const dispatch = useDispatch();
  const { posts } = useSelector(state => state);

  useEffect(() => {

    const fetch = () => {
      dispatch({ type: 'GET_POSTS' });
    }

    fetch();
  }, [dispatch]);

  return (
    <Container>
      { posts && <Posts posts={posts} /> }
      <Link to='/add'>Adicionar</Link>
    </Container>
  );
}