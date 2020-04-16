import apiConfig from '../apiConfig.json';
import { getAll } from '../utils/api.util';
import { AirTableResponseRecord, Skill, SkillResponseData } from '../typings';

class SkillService {
    public async get(): Promise<Array<Skill>> {
        const query = { view: 'visibleSort' };
        const data = await getAll(apiConfig.skillPath, [], query);
        const records = await data.map(
            (it: AirTableResponseRecord<SkillResponseData>) => it.fields
        );
        const skills = records.map(async (it: SkillResponseData) => {
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
