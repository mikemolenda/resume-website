import fetch from 'isomorphic-unfetch';
import { google } from 'googleapis';

class GoogleApisService {
    async get(collection, document, ...queryParams) {
        // https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents/get
    }

    async getAll(collection, ...queryParams) {
        // https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents/get
    }

    async query(collection, ...queries) {
        // https://cloud.google.com/firestore/docs/query-data/queries
    }

    buildUrl() {}

    async fetchWithToken(url) {}
}

const googleApisService = new GoogleApisService();

export { googleApisService };
