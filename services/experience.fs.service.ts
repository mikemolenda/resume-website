import {
    Experience,
    ExperienceApiDocument,
    LocationApiDocument,
    LocationData,
    ApiExperienceDetail,
    ExperienceDetail
} from '../typings';
import { googleApisService } from './goolgeApis.service';
import moment from 'moment';

class ExperienceService {
    // TODO move to config
    private basePath = 'projects/resume-website-271820/databases/(default)/documents';

    public async get(): Promise<Array<Experience>> {
        const experienceDocs = await googleApisService.get<Array<ExperienceApiDocument>>(
            `${this.basePath}/experience/`
        );

        const experience: Promise<Array<Experience>> = Promise.all(
            experienceDocs
                .filter((exp: ExperienceApiDocument) => exp.visible.booleanValue)
                .map(
                    async (exp: ExperienceApiDocument): Promise<Experience> => {
                        const location = await this.getLinkedLocation(exp.location.referenceValue);

                        const { alt, filename, src } = {
                            ...exp.logo?.mapValue?.fields
                        };

                        const details = exp.details?.arrayValue?.values
                            ?.filter((detail: ApiExperienceDetail) => {
                                return detail?.mapValue?.fields?.visible?.booleanValue !== false;
                            })
                            .map(
                                (detail: ApiExperienceDetail): ExperienceDetail => {
                                    return {
                                        text: detail?.mapValue?.fields?.text?.stringValue
                                    };
                                }
                            );

                        return {
                            company: exp.company.stringValue,
                            title: exp.title.stringValue,
                            location,
                            startDate: moment(exp.startDate.stringValue).toObject(),
                            endDate: exp.endDate && moment(exp.endDate.stringValue).toObject(),
                            details,
                            logo: {
                                alt: alt?.stringValue,
                                filename: filename?.stringValue,
                                src: src?.stringValue
                            }
                        };
                    }
                )
        );

        return experience;
    }

    private async getLinkedLocation(path: string): Promise<LocationData> {
        const locationDoc = await googleApisService.get<LocationApiDocument>(path);
        return {
            address1: locationDoc.address1.stringValue,
            address2: locationDoc.address2.stringValue,
            city: locationDoc.city.stringValue,
            state: locationDoc.state.stringValue,
            zip: locationDoc.zip.stringValue
        };
    }
}

const experienceService = new ExperienceService();
export { experienceService };
