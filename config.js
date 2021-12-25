import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD9m8pkmgwK5w23i7p4ulpVjjxxoa-Y25k",
  authDomain: "lets-bf0df.firebaseapp.com",
  projectId: "lets-bf0df",
  storageBucket: "lets-bf0df.appspot.com",
  messagingSenderId: "807778082703",
  appId: "1:807778082703:web:e2460a5d8e13678f28b5fa"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

