import {call, put, take, takeLatest} from 'redux-saga/effects';
import {rssDB} from '../api/rss';
import {RSS_CREATE, RSS_GET, rssCreateAction, rssUpdateAction} from '../action/rss';

export function* createRss() {
  while (true) {
    const {rss} = yield take(RSS_CREATE);
    const tmpRss = yield call(rssDB.create(), rss);
    yield put(rssCreateAction(tmpRss));
  }
}

export function* getRss() {
  while (true) {
    const {rss} = yield take(RSS_GET);
    const tmpRss = yield call(rssDB.get, rss.id);
    yield put(rssUpdateAction(tmpRss));
  }
}

export const rssSaga = [
  takeLatest(RSS_CREATE, createRss),
  takeLatest(RSS_GET, getRss)
];