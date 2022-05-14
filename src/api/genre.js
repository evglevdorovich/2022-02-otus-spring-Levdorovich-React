const BASE_URL = 'api/genres';

export async function getAll() {
    return await fetch(`${BASE_URL}`)
        .then(res => res.ok ? res.json() : throw res)
        .catch((e) => {
            console.error('Error while fetching genres', e);
            return {};
        });
}

