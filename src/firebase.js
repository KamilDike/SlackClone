import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBBt4EjwCab--8pqtkPE20tH-674vLZzxY",
    authDomain: "slack-clone-172b8.firebaseapp.com",
    databaseURL: "https://slack-clone-172b8.firebaseio.com",
    projectId: "slack-clone-172b8",
    storageBucket: "slack-clone-172b8.appspot.com",
    messagingSenderId: "374390114010",
    appId: "1:374390114010:web:9cb8ae7ece3804713987e3",
    measurementId: "G-33FF2BV3B5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
