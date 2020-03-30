import apiConfig from '../apiConfig.json';
import fetch from 'isomorphic-unfetch';

class ExperienceService {
    constructor() {
        this.baseUrl = apiConfig.baseUrl;
        this.apiKey = apiConfig.apiKey;
        this.experiencePath = apiConfig.experiencePath;
        this.experienceCategoryPath = apiConfig.experienceCategoryPath;
        this.experienceDetailPath = apiConfig.experienceDetailPath;
        this.locationPath = apiConfig.locationPath;

        this.processRecords = this.processRecords.bind(this);
        this.getExperienceCategories = this.getExperienceCategories.bind(this);
        this.getExperienceDetails = this.getExperienceDetails.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    // TODO api util get(id):Object and getAll():Object[]
    async get() {
        const experienceUrl = `${this.baseUrl}${this.experiencePath}?view=visible&api_key=${this.apiKey}`;
        const res = await fetch(experienceUrl);
        const data = await res.json();

        if (data.error) {
            console.error(`Error reading experience data: ${JSON.stringify(data.error)}`);
            return [];
        }

        const experience = Promise.all(data.records.map(this.processRecords));
        return experience;
    }

    async processRecords(record) {
        const {
            company,
            title,
            startDate,
            endDate,
            location,
            experienceCategories,
            experienceDetails
        } = record.fields;

        const experienceCategoriesData = [];
        const experienceDetailsData = [];

        const records = {
            company,
            title,
            startDate,
            endDate,
            location: await this.getLocation(location[0]),
            experienceCategories: experienceCategoriesData,
            experienceDetails: experienceDetailsData
        };

        return records;
    }

    async getExperienceCategories() {}

    async getExperienceDetails() {}

    // TODO move to location service
    async getLocation(id) {
        const locationUrl = `${this.baseUrl}${this.locationPath}/${id}?api_key=${this.apiKey}`;
        const res = await fetch(locationUrl);
        const data = await res.json();

        if (data.error) {
            console.error(`Error reading location data: ${JSON.stringify(data.error)}`);
            return [];
        }

        const { name, address1, address2, city, state, zip } = data.fields;
        const location = { name, address1, address2, city, state, zip };
        return(location);
    }
}

const experienceService = new ExperienceService();
export { experienceService };
