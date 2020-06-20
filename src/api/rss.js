import firebase from 'firebase/app';
import {firestore} from "../plugins/firebase.js";

const collection = 'rss';
const ref = firestore.collection(collection).doc('url');

export const rssDB = {
  get: () => ref.get(),
  create: (rss) => {
    return ref.update({
      url: firebase.firestore.FieldValue.arrayUnion(rss)
    });
  }
};