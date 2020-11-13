import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";
import {Comment} from "../comment/Comment";

class Comments extends Component {

    _commentService = new CommentService();

    state = {
        comments: []
    }

    componentDidMount() {
        this._commentService.getAllComments()
            .then(value => {
                this.setState({comments: value})
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(value => (<Comment item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default Comments;