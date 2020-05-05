import React, { useState } from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import * as PostActions from '../../store/actions/PostActions';

export default () => {

  const dispatch = useDispatch();

  const [ titulo, setTitulo ] = useState('');
  const [ conteudo, setConteudo ] = useState('');

  return (
    <Container>
      <form>

        <input 
          placeholder='Titulo'
          onChange={e => setTitulo(e.target.value)} />

        <textarea 
          placeholder='Conteudo'
          onChange={e => setConteudo(e.target.value)} />

        <button onClick={e => {
          e.preventDefault();
          dispatch(PostActions.add({ titulo, conteudo }))
        }}>Adicionar</button>

      </form>

      <Link to='/'>Listagem</Link>
    </Container>
  )
}