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
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(recipes)
    }).then(res => res.json());
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
    return fetch(`${BASE_URL}/${recipes._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(recipes)
    }).then(res => res.json());
}
function deleteOne(id) {
    console.log(id)
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    };
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
}
