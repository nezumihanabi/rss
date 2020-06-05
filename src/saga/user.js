import {call, put, take, takeLatest} from 'redux-saga/effects';
import {accountDB} from '../api/user';
import {USER_CREATE, USER_GET, userCreateAction, userUpdateAction} from '../action/user';

export function* createUser() {
  while (true) {
    const {user} = yield take(USER_CREATE);
    const account = yield call(accountDB.create(), user);
    yield put(userCreateAction(account));
  }
}

export function* getUser() {
  while (true) {
    const {user} = yield take(USER_GET);
    const account = yield call(accountDB.get, user.id);
    yield put(userUpdateAction(account));
  }
}

export const userSaga = [
  takeLatest(USER_CREATE, createUser),
  takeLatest(USER_GET, getUser)
];