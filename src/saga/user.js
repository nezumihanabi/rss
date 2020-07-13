import {call, put, take, takeLatest} from 'redux-saga/effects';
import {accountDB} from '../api/user';
import {USER_CREATE, USER_GET, USER_AUTH, userUpdateAction, userVerifyAction} from '../action/user';
import {fork} from '@redux-saga/core/effects';

export function* createUser() {
  while (true) {
    const {user} = yield take(USER_CREATE);
    const account = yield call(accountDB.create, user);
    user.id = account.uid;
    yield put(userUpdateAction(user));
  }
}

export function* getUser() {
  while (true) {
    const {user} = yield take(USER_GET);
    const account = yield call(accountDB.get, user.id);
    yield put(userUpdateAction(account));
  }
}

export function* authUser() {
  while (true) {
    const {user} = yield take(USER_AUTH);
    const result = yield call(accountDB.auth, user);
    yield put(userVerifyAction(result));
  }
}

export const userSaga = [
  fork(createUser),
  fork(getUser),
  fork(authUser),
];