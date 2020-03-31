import apiConfig from '../apiConfig.json';
import fetch from 'isomorphic-unfetch';

const { apiKey, baseUrl } = apiConfig;

export const get = async (path, id) => {
    const url = `${baseUrl}${path}/${id}?api_key=${apiKey}`;
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

export const getAll = async (path, view) => {
    const url = `${baseUrl}${path}?view=${view ? view : 'default'}&api_key=${apiKey}`;
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

export const buildUrl = (path, id, view) => {

}
