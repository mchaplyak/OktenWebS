import React, {Component} from 'react';
import {UserService} from "../../services/UserService";

class Users extends Component {

    _userService = new UserService();

    state = {
        users: []
    }

    #goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    #detUser = () => {

    }

    componentDidMount() {
        this._userService.getAllUsers()
            .then(result => this.setState({users: result}))
    }


    render() {

        return (
            <div>
                <button onClick={this.#goToHome}>home</button>
                {
                    this.state.users.map(user => (
                        <div>
                            <p>Name: {user.name}</p>
                            <p>UserName: {user.username}</p>
                            <p>Email: {user.email}</p>

                            <button onClick={this.#detUser}>Details</button>

                            <hr/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Users;