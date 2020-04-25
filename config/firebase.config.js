import admin from 'firebase-admin';
import '@firebase/firestore';
import * as serviceAccount from '../keys/firestore-user.json';

export const loadDB = () => {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        return admin.firestore();
    } catch (err) {
        console.log('INIT FAILED');
        console.error('Failed to initialize Firebase', err.stack);
    }
};
