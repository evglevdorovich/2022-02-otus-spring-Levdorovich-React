import {BASE_API} from './baseApi'

const GENRES_BASE_URL = BASE_API.BASE_URL + 'api/genres';

export async function getAll() {
    return fetch(`${GENRES_BASE_URL}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching genres', e);
            return {};
        });
}

