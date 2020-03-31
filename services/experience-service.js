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
        this.getExperienceCategories = this.getExperienceCategories.bind(this);
        this.getExperienceDetails = this.getExperienceDetails.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

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
            this.getExperienceCategories(experienceCategories);

        const experienceDetailsData =
            (experienceDetails &&
                this.getExperienceDetails(experienceDetails)) ||
            [];

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

    async getExperienceCategories(ids) {
        const experienceCategories = [];

        ids.forEach(async id => {
            const data = await get(this.experienceCategoryPath, id);
            experienceCategories.push(data.fields.category);
        });

        return experienceCategories;
    }

    async getExperienceDetails(ids) {
        const experienceDetails = [];

        ids.forEach(async id => {
            const data = await get(this.experienceDetailPath, id);
            if (data.fields.visible === '1') {
                const details = {};
                Object.keys(data.fields).forEach(it => {
                    if (
                        ['id', 'employer', 'visible', 'displayStyle'].includes(
                            it
                        )
                    )
                        return;
                    if (typeof data.fields[it] != undefined) {
                        details[it] = data.fields[it];
                    }
                });
                experienceDetails.push(details);
            }
        });

        return experienceDetails;
    }

    // TODO move to location service
    async getLocation(id) {
        const data = await get(this.locationPath, id);
        const location = {};
        Object.keys(data.fields).forEach(it => {
            if (it === 'experience') return;
            if (typeof data.fields[it] != undefined) {
                location[it] = data.fields[it];
            }
        });
        return location;
    }
}

const experienceService = new ExperienceService();
export { experienceService };
