import {call, put, take, takeLatest} from 'redux-saga/effects';
import {rssDB} from '../api/rss';
import {RSS_CREATE, RSS_GET, rssCreateAction, rssListSetAction} from '../action/rss';

export function* createRss() {
  while (true) {
    const {rss} = yield take(RSS_CREATE);
    const tmpRss = yield call(rssDB.create, rss);
    yield put(rssCreateAction(tmpRss));
  }
}

export function* getRss() {
  while (true) {
    const tmpRss = yield call(rssDB.get);
    yield put(rssListSetAction(tmpRss));
  }
}

export const rssSaga = [
  takeLatest(RSS_CREATE, createRss),
  takeLatest(RSS_GET, getRss)
];