import React, {Component} from 'react';

class Posts extends Component {

    state = {
        posts: []
    }

    #goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result => result.json())
            .then(posts => this.setState({posts}))
    }

    render() {
        return (
            <div>
                <button onClick={this.#goToHome}>home</button>

                {
                    this.state.posts.map(post =>(
                        <div>
                            <p>PostId: {post.id}</p>
                            <p>PostTitle: {post.title}</p>
                            <p>PostBody: <br/>{post.body}</p>

                            <hr/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Posts;