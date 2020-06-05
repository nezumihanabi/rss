import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC2VEzsmiSrdSKQN-AvlRqCtu-Olmd5NMM",
  authDomain: "test-react-44a96.firebaseapp.com",
  databaseURL: "https://test-react-44a96.firebaseio.com",
  projectId: "test-react-44a96",
  storageBucket: "test-react-44a96.appspot.com",
  messagingSenderId: "152562650679",
  appId: "1:152562650679:web:a01a469fc9d3a4d06079b2",
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();

firestore.enablePersistence({synchronizeTabs: true});