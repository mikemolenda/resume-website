import { MomentObjectOutput } from 'moment';

export type AirTableResponseRecord<T> = {
    id: string;
    fields: T;
    createdTime: string;
};

export type ApiDocument<T> = {
    name: string;
    fields: T;
    createTime: string;
    updateTime: string;
};

export type ApiDocumentMultiple<T> = {
    documents: Array<ApiDocument<T>>;
};

export type ApiDocumentArray<T> = {
    arrayValue: {
        values: Array<T>;
    };
};

export type ApiDocumentBoolean = {
    booleanValue: boolean;
};

export type ApiDocumentGeoPoint = {
    geoPointValue: GeoPoint;
};

export type ApiDocumentInteger = {
    integerValue: string;
};

export type ApiDocumentReference = {
    referenceValue: string;
};

export type ApiDocumentString = {
    stringValue: string;
};

export type ApiDocumentImage = {
    mapValue: {
        fields: {
            alt: ApiDocumentString;
            filename: ApiDocumentString;
            src: ApiDocumentString;
        };
    };
};

export type Experience = {
    company: string;
    title: string;
    location: LocationData;
    startDate: MomentObjectOutput;
    endDate?: MomentObjectOutput;
    details: Array<ExperienceDetail>;
    logo?: Image;
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

export type ExperienceApiDocument = {
    company: ApiDocumentString;
    title: ApiDocumentString;
    location: ApiDocumentReference;
    startDate: ApiDocumentString;
    endDate?: ApiDocumentString;
    visible: ApiDocumentBoolean;
    tags?: ApiDocumentArray<ApiDocumentString>;
    details?: ApiDocumentArray<ApiExperienceDetail>;
    logo?: ApiDocumentImage;
    displayName?: ApiDocumentString;
    references?: Array<ApiDocumentReference>;
};

export type ApiExperienceDetail = {
    mapValue: {
        fields: {
            priority?: ApiDocumentInteger;
            style?: ApiDocumentString;
            text: ApiDocumentString;
            visible?: ApiDocumentBoolean = true;
        };
    };
};

export type ExperienceDetail = {
    style?: string;
    text: string;
    visible?: boolean;
};

export type ExperienceDetailResponseData = {
    text: string;
};

export type GeoPoint = {
    latitude: number;
    longitude: number;
};

// TODO rename LogoImage
export type Image = {
    alt?: string;
    filename?: string;
    src: string;
};

export type LocationData = {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    latitude?: number;
    longitude?: number;
};

export type LocationApiDocument = {
    address1: ApiDocumentString;
    address2: ApiDocumentString;
    city: ApiDocumentString;
    name: ApiDocumentString;
    state: ApiDocumentString;
    zip: ApiDocumentString;
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
