const BASE_URL = 'api/authors';

export async function getAll() {
    return await fetch(`${BASE_URL}`)
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
