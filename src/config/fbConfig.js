 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 import 'firebase/storage'

 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCe7UN-4oOsMxZmaIQ_QbeMDGluXzXmrhM",
    authDomain: "cinema-d6dec.firebaseapp.com",
    databaseURL: "https://cinema-d6dec.firebaseio.com",
    projectId: "cinema-d6dec",
    storageBucket: "cinema-d6dec.appspot.com",
    messagingSenderId: "340482285388",
    appId: "1:340482285388:web:0a1f8ef10b899afb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: false});

  export default firebase;