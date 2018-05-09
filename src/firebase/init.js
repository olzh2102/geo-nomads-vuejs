import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCE3boZd7NglPybsUCzHm0vbzBtoS0Ual0",
  authDomain: "geo-nomads.firebaseapp.com",
  databaseURL: "https://geo-nomads.firebaseio.com",
  projectId: "geo-nomads",
  storageBucket: "",
  messagingSenderId: "151200640303"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();