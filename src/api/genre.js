const BASE_URL = 'api/genres';

export async function getAll() {
    return await fetch(`${BASE_URL}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching genres', e);
            return {};
        });
}

