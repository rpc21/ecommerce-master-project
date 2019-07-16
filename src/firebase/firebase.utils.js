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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // only perform if a user signed in, not if they signed out
    /**
     * Firestore gives back either a QueryReference or QuerySnapshot
     * Can be either document or collection versions
     * ALWAYS returns these objects, even if not exists from the query
     */
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); // use .get() to get the document snapshot

    // Use document reference for CRUD (create, retrieve, update and delete) methods
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


