export class UserService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllUsers() {
        return fetch(`${this._url}/users`)
            .then(result => result.json)
    }
    getUserById(id) {
       return fetch(`${this._url}/users/${id}`)
           .then(result => result.json)
    }
}