import apiConfig from '../apiConfig.json';
import { buildFieldsQuery, get, getAll } from '../utils/api.util';

class ExperienceService {
    async get() {
        const query = { view: 'visible' };
        const data = await getAll(apiConfig.experiencePath, [], query);
        const records = await data.map(it => it.fields);
        const experience = records.map(async it => {
            const experienceDetails = await this.getLinkedDetails(it.company);
            const location = await this.getLinkedLocation(it.company);
            return {
                company: it.company,
                title: it.title,
                startDate: it.startDate,
                endDate: it.endDate,
                location,
                details: experienceDetails,
                logo: it.logo ? it.logo[0].url : ''
            };
        });

        return Promise.all(experience);
    }

    async getLinkedDetails(company) {
        const filterByFormula = '{experience}=' + `"${company}"`;
        const query = {
            view: 'visibleSort',
            filterByFormula,
            ...buildFieldsQuery('text')
        };
        const data = await getAll(apiConfig.experienceDetailPath, [], query);
        return data.map(it => it.fields.text);
    }

    async getLinkedLocation(company) {
        const filterByFormula = '{name}=' + `"${company}"`;
        const query = {
            filterByFormula,
            ...buildFieldsQuery('address1', 'address2', 'city', 'state', 'zip')
        };
        const data = await getAll(apiConfig.locationPath, [], query);
        return data[0].fields;
    }
}

const experienceService = new ExperienceService();
export { experienceService };
