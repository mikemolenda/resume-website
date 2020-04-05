import apiConfig from '../apiConfig.json';
import { getAll } from '../utils/api.util';

class SkillService {
    async get() {
        const query = { view: 'visibleSort' };
        const data = await getAll(apiConfig.skillPath, [], query);
        const records = await data.map(it => it.fields);
        const skills = records.map(async it => {
            return {
                name: it.name,
                logo: it.logo ? it.logo[0].url : ''
            };
        });

        return Promise.all(skills);
    }
}

const skillService = new SkillService();
export { skillService };
