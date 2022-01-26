import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCr4QvT4urIcPV2C8hu0sGj24YADxKXW6g",
  authDomain: "vector-food.firebaseapp.com",
  projectId: "vector-food",
  storageBucket: "vector-food.appspot.com",
  messagingSenderId: "1058823872479",
  appId: "1:1058823872479:web:f77038218eb1ca3e3b2e6a",
  measurementId: "G-5TZE0141YR",
});

export default app;
