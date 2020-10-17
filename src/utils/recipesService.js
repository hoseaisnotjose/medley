import tokenService from './tokenService';
const BASE_URL = '/api/recipes';

export default {
    getAll,
    index,
    create,
    show,
    update,
    deleteOne,
};

function getAll() {
    return fetch(BASE_URL).then(res => res.json());
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function create(recipes) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(recipes)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}
function show(recipes) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(recipes)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function update(recipes) {
    console.log(recipes)
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(recipes)
    };
    return fetch(`${BASE_URL}/${recipes._id}`).then(res => res.json());
}
function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(id)
    };
    return fetch(`${BASE_URL}/${id}`).then(res => res.json());
}
