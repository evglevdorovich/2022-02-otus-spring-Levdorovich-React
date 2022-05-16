const BASE_URL = 'http://localhost:9000/api/authors';

export async function getAll() {
    return fetch(`${BASE_URL}`)
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
