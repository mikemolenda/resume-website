import { MomentObjectOutput } from 'moment';

export type AirTableResponseRecord<T> = {
    id: string;
    fields: T;
    createdTime: string;
};

export type Experience = {
    company: string;
    title: string;
    location: Location;
    startDate: MomentObjectOutput;
    endDate: MomentObjectOutput;
};

export type ExperienceResponseData = {
    company: string;
    title: string;
    location: Array<string>;
    startDate: string;
    endDate: string;
    visible: number;
    experienceCategories: Array<string>;
    experienceDetails: Array<string>;
    logo?: Array<LogoImage>;
    displayName: string;
};

export type ExperienceDetail = {
    text: string;
};

export type ExperienceDetailResponseData = {
    text: string;
};

export type Location = {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
};

export type LogoImage = {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: {
        small: LogoImageThumbnail;
        large: LogoImageThumbnail;
        full: LogoImageThumbnail;
    };
};

export type LogoImageThumbnail = {
    url: string;
    width: number;
    height: number;
};

export type Skill = {
    name: string;
    logo: string;
};

interface SkillResponseData {
    name: string;
    priority: number;
    skillCategories?: Array<string>;
    experienceCategoris?: Array<string>;
    visible: number;
    logo?: Array<LogoImage>;
}
