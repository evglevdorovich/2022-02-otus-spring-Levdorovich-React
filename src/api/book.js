const BASE_URL = 'api/books/';

export async function getById(id) {
    try {
        return await fetch(`${BASE_URL}${id}`).then(res => res.json());
    } catch (e) {
        console.log('error while fetching book', e)
        return [];
    }
}

export async function getAll() {
    try {
        return await fetch(`${BASE_URL}`).then(res => res.json());
    } catch (e) {
        console.log('error while fetching books')
        return [];
    }
}