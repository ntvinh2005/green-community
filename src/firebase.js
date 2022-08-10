import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCef3oOFW-SPY5PAthAV65bAGYTgJkRlJA",
    authDomain: "green-community-22a96.firebaseapp.com",
    projectId: "green-community-22a96",
    storageBucket: "green-community-22a96.appspot.com",
    messagingSenderId: "669575674109",
    appId: "1:669575674109:web:98cae3bd016b8be1a1a694"
});

export const auth = app.auth();
export const firestore = app.firestore();
export const database = {
  shop_item: firestore.collection("shop_item"),
  profile: firestore.collection("profile"),
  purchase: firestore.collection("purchase"),
  formatDoc: (doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export default app;
