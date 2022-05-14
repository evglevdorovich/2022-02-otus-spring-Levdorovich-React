const BASE_URL = 'api/genres';

export async function getAll(){
    try {
        return await fetch(`${BASE_URL}`).then(res => res.json());
    }
    catch (e) {
        console.log('error while fetching genres',e)
        return [];
    }
}
