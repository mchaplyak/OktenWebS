export class CommentService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllComments() {
        fetch(`${this._url}/comments`)
            .then(result => result.json)
    }

    getCommentById(id) {
        fetch(`${this._url}/comments/${id}`)
            .then(result => result.json)
    }

}