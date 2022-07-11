import {BASE_API} from './baseApi'

const BOOK_BASE_URL = BASE_API.BASE_URL + 'api/books/';
const BOOK_PROJECTION_NAME = BASE_API.PROJECTION_NAME;

export async function getById(id) {

    return fetch(`${BOOK_BASE_URL}${id}?` +
        new URLSearchParams({projection: BOOK_PROJECTION_NAME}))
        .then(res => {
            if (res.ok) {
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error(`Error while fetching book, id: ${id}`, e);
            return {};
        });
}

export async function update(id, data) {

    return fetch(`${BOOK_BASE_URL}${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res)
        .catch((e) => {
            console.error(`Error while creating a book`, e)
        })
}

export async function getAll() {
    return fetch(`${BOOK_BASE_URL}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching books', e);
            return {};
        });
}

export async function remove(selfHref) {
    return fetch(convertToBaseUrl(selfHref), {
        method: 'DELETE',
        body: JSON.stringify(selfHref),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res)
        .catch((e) => {
            console.error(`Error while deleting a book, href: ${selfHref}`, e)
        })
}

export async function create(data) {

    return fetch(`${BOOK_BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res)
        .catch((e) => {
            console.error(`Error while creating a book`, e)
        })
}

function convertToBaseUrl(url) {
    const indexOfApi = url.indexOf("/api/");
    return BASE_API.BASE_URL + url.slice(indexOfApi + 1)
}



