import firebase from 'firebase/app';
import {firestore} from "../plugins/firebase.js";

const collection = 'rss';
const ref = firestore.collection(collection);

export const rssDB = {
  get: () => ref.get(),
  create: (rss) => {
    return ref.update({
      rss: firebase.firestore.FieldValue.arrayUnion(rss)
    });
  }
};