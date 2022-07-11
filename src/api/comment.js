import {BASE_API} from './baseApi'

const COMMENTS_BASE_URL = BASE_API.BASE_URL + 'api/comments/search/findAllByBookId';

export async function getByBookId(bookId) {
    return fetch(`${COMMENTS_BASE_URL}?`
    + new URLSearchParams({bookId: bookId}))
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

function convertToBaseUrl(url) {
    const indexOfApi = url.indexOf("/api/");
    return BASE_API.BASE_URL + url.slice(indexOfApi + 1)
}
