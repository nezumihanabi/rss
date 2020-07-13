import {call, put, take, takeLatest} from 'redux-saga/effects';
import {rssDB} from '../api/rss';
import {RSS_CREATE, RSS_GET, rssCreateAction, rssListSetAction} from '../action/rss';
import {fork} from '@redux-saga/core/effects';

export function* createRss() {
  while (true) {
    const {rss} = yield take(RSS_CREATE);
    const tmpRss = yield call(rssDB.create, rss);
    yield put(rssCreateAction(tmpRss));
  }
}

export function* getRss() {
  while (true) {
    yield take(RSS_GET);
    const tmpRss = yield call(rssDB.get);
    yield put(rssListSetAction(tmpRss));
  }
}

export const rssSaga = [
  fork(createRss),
  fork(getRss)
];