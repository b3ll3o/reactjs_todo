
import { takeLatest } from 'redux-saga/effects';

import LocalStorageService from '../../services/LocalStorageService';

function addEffect(action){

  const { titulo, conteudo } = action.payload;
  LocalStorageService.create({ titulo, conteudo });
}

function* mySaga(){
  yield takeLatest('ADD_POST', addEffect);
}

export default mySaga;