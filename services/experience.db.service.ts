import { logObject } from '../utils/debug.util';
import { firebase, auth, firestore } from '../config/firebase.config';

class ExperienceService {
    public async get() {
        const data = await firestore.collection('test').get();
        const docs = data.docs.map((doc) => doc.data());

        logObject(docs, { depth: 4, colorize: true });
    }
}

const experienceService = new ExperienceService();
export { experienceService };
