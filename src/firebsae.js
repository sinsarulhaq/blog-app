import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkn3tRAqIqThkJZdAplq6AcumUljR6B9s",
    authDomain: "blog-ec0db.firebaseapp.com",
    projectId: "blog-ec0db",
    storageBucket: "blog-ec0db.appspot.com",
    messagingSenderId: "507125309472",
    appId: "1:507125309472:web:1d86f12f822cd374bd9c45",
    measurementId: "G-WH3Z067TGM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;