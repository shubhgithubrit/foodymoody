// import firebase from 'firebase/compat/app';
//  import 'firebase/compat/auth';
//  import 'firebase/compat/firestore';
import firebase from '@react-native-firebase/app';
//import firebase from "firebase/app";
// import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDlKG4t2u5cgIP_Kc_05LSVqFng5G50WDI",
  authDomain: "foodapp-c78d8.firebaseapp.com",
  databaseURL: "https://foodapp-c78d8-default-rtdb.firebaseio.com",
  projectId: "foodapp-c78d8",
  storageBucket: "foodapp-c78d8.appspot.com",
  messagingSenderId: "368386655059",
  appId: "1:368386655059:web:dac7ae9b6dcecb0de397a6",
  measurementId: "G-993P4YDSRG"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig )
} else {
    app = firebase.app()
}

export const db = firebase.firestore();
