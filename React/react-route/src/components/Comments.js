import React, {Component} from 'react';

class Comments extends Component {

    state = {
        comments: []
    }

    #goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(result => result.json())
            .then(comments => this.setState({comments}))
    }

    render() {
        return (
            <div>
                <button onClick={this.#goToHome}>home</button>

                {
                    this.state.comments.map(comment => (
                        <div>
                            <p>PostId: {comment.postId}</p>
                            <p>Id: {comment.id}</p>
                            <p>Name: {comment.name}</p>
                            <p>Body: <br/>{comment.body}</p>

                            <hr/>
                        </div>
                    ))

                }
            </div>
        );
    }
}

export default Comments;