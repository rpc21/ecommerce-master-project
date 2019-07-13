import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiLHNYOu0vqOWUOsx3kzrsH-3udZrym0E",
    authDomain: "react-master-18103.firebaseapp.com",
    databaseURL: "https://react-master-18103.firebaseio.com",
    projectId: "react-master-18103",
    storageBucket: "",
    messagingSenderId: "185331206015",
    appId: "1:185331206015:web:b303d7c52ed0d0d0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


