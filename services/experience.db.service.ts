import admin, { ServiceAccount } from 'firebase-admin';
import { logObject } from '../utils/debug.util';
import * as serviceAccount from '../keys/firestore-user.json';

class ExperienceService {
    public async get() {
        const app = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount)
        });

        const db = app.firestore();

        const experience = await db.collection('experience').get();

        console.log(experience);
    }
}

const experienceService = new ExperienceService();
export { experienceService };
