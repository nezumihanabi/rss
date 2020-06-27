import firebase from 'firebase/app';
import {firestore} from "../plugins/firebase.js";

const collection = 'rss';
const ref = firestore.collection(collection).doc('url');

export const rssDB = {
  get: () => ref.get().then(s => s.exists ? s.data().url : []),
  create: (rss) => {
    return ref.update({
      url: firebase.firestore.FieldValue.arrayUnion(rss)
    }).catch((e)=> console.error(e));
  }
};