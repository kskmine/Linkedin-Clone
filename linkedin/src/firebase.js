import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9UQH5rndH1qNoBkOWUpLXxN5ANplsZzo",
  authDomain: "linkledimfire.firebaseapp.com",
  projectId: "linkledimfire",
  storageBucket: "linkledimfire.appspot.com",
  messagingSenderId: "1077340070180",
  appId: "1:1077340070180:web:6e393fbf38bcc9d23193b1",
  measurementId: "G-206ZCMRMDN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}