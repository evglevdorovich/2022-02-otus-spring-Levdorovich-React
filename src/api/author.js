import {BASE_API} from './baseApi'

const AUTHOR_BASE_URL = BASE_API.BASE_URL + 'api/authors';

export async function getAll() {
    return fetch(`${AUTHOR_BASE_URL}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching authors', e);
            return {};
        });
}
