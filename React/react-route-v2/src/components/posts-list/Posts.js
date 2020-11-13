import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import {Post} from "../post/Post";

class Posts extends Component {

    _postService = new PostService()

    state = {
        posts: []
    }

    componentDidMount() {
        this._postService.getAllPosts()
            .then(value => {
                this.setState({posts: value})
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(value => (<Post item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default Posts;