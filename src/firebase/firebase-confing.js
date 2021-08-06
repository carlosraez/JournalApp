import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyD9sDrFHC1WiMCscEAL8B4iolZUSLjOnPA",
    authDomain: "journal-app-e52f5.firebaseapp.com",
    projectId: "journal-app-e52f5",
    storageBucket: "journal-app-e52f5.appspot.com",
    messagingSenderId: "778683387497",
    appId: "1:778683387497:web:8f541ce0d0d725533bdcf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {
    db,
    googleAuthProvider,
    firebase
  }