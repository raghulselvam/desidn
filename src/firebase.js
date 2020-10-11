import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAFTmS_hyGT12ZiVZUwntnYo7ZYMXogQi4",
    authDomain: "design-d68e3.firebaseapp.com",
    databaseURL: "https://design-d68e3.firebaseio.com",
    projectId: "design-d68e3",
    storageBucket: "design-d68e3.appspot.com",
    messagingSenderId: "565334259794",
    appId: "1:565334259794:web:7eee6ec573d4301322c78b",
    measurementId: "G-ENK02EBK6H"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth}