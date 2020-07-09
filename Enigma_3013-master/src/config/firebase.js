import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDSGD3aI8U7vWoIqkcJ49vPO8nB3mAqgms",
    authDomain: "enigma-hunt.firebaseapp.com",
    databaseURL: "https://enigma-hunt.firebaseio.com",
    projectId: "enigma-hunt",
    storageBucket: "enigma-hunt.appspot.com",
    messagingSenderId: "410551597890",
    appId: "1:410551597890:web:deacab2a8baa3970a1a6db",
    measurementId: "G-S1M46K3DWJ"
  };
  firebase.initializeApp(firebaseConfig)
  export default {
      firestore:firebase.firestore(),
      auth: firebase.auth()
  }