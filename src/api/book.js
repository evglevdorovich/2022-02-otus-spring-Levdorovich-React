const BASE_URL = 'http://localhost:9000/api/books/';

export async function getById(id) {
    return fetch(`${BASE_URL}${id}`)
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

    return fetch(`${BASE_URL}${id}`, {
        method: 'PUT',
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
    return fetch(`${BASE_URL}`)
        .then(res => {
            if (res.ok) {
                const rese = res.json();
                console.log('getting all data', rese)
                return rese;
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching books', e);
            return {};
        });
}

export async function remove(id) {
    const body = {id: id}
    console.log(JSON.stringify(body))
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res)
        .catch((e) => {
            console.error(`Error while deleting a book, id: ${id}`, e)
        })
}

export async function create(data) {

    return fetch(`${BASE_URL}`, {
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



