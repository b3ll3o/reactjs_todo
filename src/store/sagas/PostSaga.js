
import { put, takeLatest } from 'redux-saga/effects';

const KEY = 'post';

const create = (titulo, conteudo) => {
  localStorage.setItem(KEY, JSON.stringify({ titulo, conteudo }));
};

const read = () => (
  JSON.parse(localStorage.getItem(KEY))
);

function addEffect(action){

  const { titulo, conteudo } = action.payload;
  create(titulo, conteudo);
}

function* readEffect(action){

  const post = read();

  yield put({ 
    type: 'GET_POST_SUCCESS', 
    payload: {
      post
    }
  });
}

function* mySaga(){
  yield takeLatest('ADD_POST', addEffect);
  yield takeLatest('GET_POST', readEffect);
}

export default mySaga;