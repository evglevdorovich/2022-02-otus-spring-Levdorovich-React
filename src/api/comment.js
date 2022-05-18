import {BASE_API} from './baseApi'

const COMMENTS_BASE_URL = BASE_API.BASE_URL + 'api/comments/';

export async function getByBookId(bookId) {
    return fetch(`${COMMENTS_BASE_URL}${bookId}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching authors', e, `${COMMENTS_BASE_URL}${bookId}`);
            return {};
        });
}
