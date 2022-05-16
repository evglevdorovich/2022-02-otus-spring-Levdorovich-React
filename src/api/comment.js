const BASE_URL = 'http://localhost:9000/api/comments/';

export async function getByBookId(bookId) {
    return fetch(`${BASE_URL}${bookId}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else throw res;
        })
        .catch((e) => {
            console.error('Error while fetching authors', e, `${BASE_URL}${bookId}`);
            return {};
        });
}
