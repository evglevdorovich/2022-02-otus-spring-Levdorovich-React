import {URLSearchParams as FormatData} from "url";

const BASE_URL = 'api/books/';

export async function getById(id) {
    return await fetch(`${BASE_URL}${id}`)
        .then(res => res.ok ? res.json() : throw res)
        .catch((e) => {
            console.error(`Error while fetching book, id: ${id}`, e);
            return {};
        });
}

export async function getAll() {
    return await fetch(`${BASE_URL}`)
        .then(res => res.ok ? res.json() : throw res)
        .catch((e) => {
            console.error('Error while fetching books', e);
            return {};
        });
}

export async function remove(id) {
    const formData = new FormatData();
    formData.append("id", id);
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        body: formData})
        .then(res => res.json())
        .catch((e) => {
            console.error(`Error while deleting a book, id: ${id}`)
        })
}

