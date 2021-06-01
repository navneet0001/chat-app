import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB2Tlbcl9QqbxST3jye6jdn6arxajYrNf0",
    authDomain: "specialchat-f872d.firebaseapp.com",
    projectId: "specialchat-f872d",
    storageBucket: "specialchat-f872d.appspot.com",
    messagingSenderId: "796340256160",
    appId: "1:796340256160:web:a87275f5c135e56eb278c5"
  }).auth();