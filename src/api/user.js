import firebase from 'firebase/app';
import {firestore} from "../plugins/firebase.js";

const collection = 'account';
const ref = firestore.collection(collection);

export const accountDB = {
  get: (id) => ref.doc(id).get(),
  create: (user) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((result)=>{
      result.user.updateProfile({
        displayName:user.name
      })
    }).catch((e)=>{
      console.log(e);
    });
    return firebase.auth().currentUser;
  },
  auth: (user) => {
    console.log(user);
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch((e)=>{
      console.log(e);
      return false;
    });
    console.log(true);
    return true;
  }
};