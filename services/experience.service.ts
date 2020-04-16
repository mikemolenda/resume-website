import moment from 'moment';
import apiConfig from '../apiConfig.json';
import { buildFieldsQuery, get, getAll } from '../utils/api.util';
import {
    AirTableResponseRecord,
    Experience,
    ExperienceResponseData,
    ExperienceDetail,
    ExperienceDetailResponseData
} from '../typings';

class ExperienceService {
    public async get(): Promise<Array<Experience>> {
        const query = { view: 'visible' };
        const data = await getAll(apiConfig.experiencePath, [], query);
        const records = await data.map(
            (it: AirTableResponseRecord<ExperienceResponseData>) => it.fields
        );
        const experience = records.map(async (it: ExperienceResponseData) => {
            const experienceDetails = await this.getLinkedDetails(it.company);
            const location = await this.getLinkedLocation(it.company);
            return {
                company: it.displayName ? it.displayName : it.company,
                title: it.title,
                location,
                startDate: moment(it.startDate).toObject(),
                endDate: moment(it.endDate).toObject(),
                details: experienceDetails,
                logo: it.logo ? it.logo[0].url : ''
            };
        });

        return Promise.all(experience);
    }

    private async getLinkedDetails(
        company: string
    ): Promise<Array<ExperienceDetail>> {
        const filterByFormula = '{experience}=' + `"${company}"`;
        const query = {
            view: 'visibleSort',
            filterByFormula,
            ...buildFieldsQuery('text')
        };
        const data = await getAll(apiConfig.experienceDetailPath, [], query);
        return data.map(
            (it: AirTableResponseRecord<ExperienceDetailResponseData>) =>
                it.fields.text
        );
    }

    private async getLinkedLocation(company: string): Promise<Location> {
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
