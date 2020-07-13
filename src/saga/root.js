import { all } from 'redux-saga/effects'
import {userSaga} from './user';
import {rssSaga} from './rss';

function* rootSaga() {
  yield all([
    ...userSaga,
    ...rssSaga
  ])
}

export default rootSaga