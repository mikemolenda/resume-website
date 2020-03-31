import fetch from 'isomorphic-unfetch';
import apiConfig from '../apiConfig.json';
import { get, getAll } from '../utils/api.util';

class ExperienceService {
    constructor() {
        this.baseUrl = apiConfig.baseUrl;
        this.apiKey = apiConfig.apiKey;
        this.experiencePath = apiConfig.experiencePath;
        this.experienceCategoryPath = apiConfig.experienceCategoryPath;
        this.experienceDetailPath = apiConfig.experienceDetailPath;
        this.locationPath = apiConfig.locationPath;

        this.processRecords = this.processRecords.bind(this);
        this.getExperienceCategory = this.getExperienceCategory.bind(this);
        this.getExperienceDetail = this.getExperienceDetail.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    // TODO api util get(id):Object and getAll():Object[]
    async get() {
        const data = await getAll(this.experiencePath, 'visible');
        const experience = Promise.all(data.map(this.processRecords));
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

        const experienceCategoriesData =
            experienceCategories &&
            Promise.all(experienceCategories.map(this.getExperienceCategory));

        const experienceDetailsData =
            experienceDetails &&
            Promise.all(experienceDetails.map(this.getExperienceDetail));

        const locationData = this.getLocation(location[0]);

        const records = {
            company,
            title,
            startDate,
            endDate,
            location: await locationData,
            experienceCategories: await experienceCategoriesData,
            experienceDetails: await experienceDetailsData
        };

        return records;
    }

    async getExperienceCategory(id) {
        const data = await get(this.experienceCategoryPath, id);
        return data.fields.category;
    }

    async getExperienceDetail(id) {
        const data = await get(this.experienceDetailPath, id);
        const { summary, displayStyle, priority, text, visible } = data.fields;
        const detail = { displayStyle: displayStyle[0], priority, text };

        if (visible == 1) {
            return detail;
        }
    }

    // TODO move to location service
    async getLocation(id) {
        const data = await get(this.locationPath, id);
        const { name, address1, address2, city, state, zip } = data.fields;
        const location = { name, address1, address2, city, state, zip };
        return location;
    }
}

const experienceService = new ExperienceService();
export { experienceService };
