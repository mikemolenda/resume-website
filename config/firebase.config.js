import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import * as firebaseConfig from '../keys/firebase-user.json';

try {
    firebase.initializeApp({
        apiKey: firebaseConfig.apiKey,
        authDomain: firebaseConfig.authDomain,
        projectId: firebaseConfig.projectId
    });
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
