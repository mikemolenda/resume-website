import fetch from 'isomorphic-unfetch';
import { google } from 'googleapis';
import * as serviceAccount from '../keys/firestore-user.json';
import { ApiDocument } from '../typings';

class GoogleApisService {
    // TODO move to configs
    private baseUrl = 'https://firestore.googleapis.com/v1';

    private scopes = ['https://www.googleapis.com/auth/datastore'];

    /**
     * Performs a query on Google Firestore DB
     * See https://cloud.google.com/firestore/docs/query-data/queries
     * @param collection
     * @param queries
     */
    public async query(collection: string, ...queries: Array<string>) {
        // TODO implement in GoogleFireStoreService
    }

    /**
     * Fetches a document from Google Firestore using HTTP API
     * See https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents/get
     * @param path Path to the document: `collection`, or `collection/documentId`
     * @param queries _Optional_ Query string values to append
     */
    public async get<T>(path: string, ...queries: Array<string>): Promise<T> {
        const jwtClient = new google.auth.JWT(
            serviceAccount.client_email,
            null,
            serviceAccount.private_key,
            this.scopes
        );

        const tokens = await jwtClient.authorize();

        const queryString = this.buildQueryString(queries);

        const queriesWithToken = queryString
            ? `${queryString}&access_token=${tokens.access_token}`
            : `access_token=${tokens.access_token}`;

        const response = await fetch(`${this.baseUrl}/${path}?${queriesWithToken}`);

        const documents = await response.json();

        if (documents.fields) {
            return documents.fields;
        } else if (documents.documents) {
            return documents.documents.map((doc: ApiDocument<T>) => doc.fields);
        } else {
            throw new Error('Document not found or had unexpected type');
        }
    }

    // TODO move to utils, Array<QueryStringPair>, {key: string}
    // TODO get() should take only path and querystring
    private buildQueryString(queries: Array<string>): string {
        if (queries.length <= 0) return '';
        return queries.join('&');
    }
}

const googleApisService = new GoogleApisService();
export { googleApisService };
