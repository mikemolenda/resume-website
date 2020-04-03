import apiConfig from '../apiConfig.json';
import fetch from 'isomorphic-unfetch';

const { apiKey, baseUrl } = apiConfig;

export const get = async (path, pathParams, query) => {
    const url = buildUrl(path, pathParams, query);
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
        console.error(
            `Error retrieving from ${path}: ${JSON.stringify(data.error)}`
        );
        return {};
    }

    return data;
};

export const getAll = async (path, pathParams, query) => {
    const url = buildUrl(path, pathParams, query);
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
        console.error(
            `Error retrieving from ${path}: ${JSON.stringify(data.error)}`
        );
        return [];
    }

    return data.records;
};

export const buildUrl = (path, pathParams, query) => {
    const pathParamsString = buildPathParamsString(pathParams);

    const queryString = buildQueryString(query ? query : {});

    return baseUrl + path.trim() + pathParamsString + queryString;
};

export const buildQueryString = query => {
    const queryArray = [];

    Object.entries(query).forEach(([k, v]) => {
        const key = encodeURIComponent(k.trim());
        const val = encodeURIComponent(v.trim());
        if (k.trim().length > 0) {
            queryArray.push(`${key}=${val}`);
        }
    });

    let queryString = '?' + queryArray.join('&');
    queryString += queryString.length > 1 ? '&' : '';
    queryString += `api_key=${apiKey}`;

    return queryString;
};

export const buildPathParamsString = pathParams => {
    if (!pathParams || pathParams.length === 0) return '';
    let pathParamsString = '/';
    pathParamsString += pathParams.map(encodeURIComponent).join('/');
    return pathParamsString;
};

export const buildFieldsQuery = (...fields) => {
    let fieldsObj = {};
    fields.forEach((f, i) => {
        const key = `fields[${i}]`;
        const entry = {};
        entry[key] = f;
        fieldsObj = { ...fieldsObj, ...entry };
    });
    return fieldsObj;
};
