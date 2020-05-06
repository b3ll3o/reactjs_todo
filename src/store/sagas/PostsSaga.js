import { put, takeLatest } from 'redux-saga/effects';

import LocalStorageService from '../../services/LocalStorageService';

function* readEffect(action){

  const posts = LocalStorageService.read();

  yield put({ type: 'GET_POSTS_SUCCESS', payload: { posts }});
}


function* mySaga(){
  yield takeLatest('GET_POSTS', readEffect);
}

export default mySaga;