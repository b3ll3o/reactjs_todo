
import { all } from 'redux-saga/effects';

import PostSaga from './PostSaga';
import PostsSaga from './PostsSaga';

export default function* sagas(){
  yield all([
    PostSaga(), 
    PostsSaga()
  ]);
}