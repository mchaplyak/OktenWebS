export class PostService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllPosts() {
        fetch(`${this._url}/posts`)
            .then(result => result.json)
    }

    getPostById() {
        fetch(`${this._url}/comments/${id}`)
            .then(result => result.json)
    }
}