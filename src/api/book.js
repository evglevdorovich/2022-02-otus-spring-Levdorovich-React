const BASE_URL = 'api/books/';

export async function getById(id) {
    return await fetch(`${BASE_URL}${id}`)
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

export async function getAll() {
    return await fetch(`${BASE_URL}`)
        .then(res => {
            if (res.ok) {
                console.log('getting all data')
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching books', e);
            return {};
        });
}

export async function remove(id) {
    const body = {id: id}
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        body: JSON.stringify(body)
    })
        .then(res => res)
        .catch((e) => {
            console.error(`Error while deleting a book, id: ${id}`)
        })
}

