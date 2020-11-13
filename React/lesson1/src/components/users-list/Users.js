import React, {Component} from 'react';
import {users} from "../../data/data";
import User from "../user/User";

class Users extends Component {


    render() {
        return (
            <div className={'myClassName'}>
                {
                    users.map((singleUser, index) => {
                        return (<User sUser={singleUser} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default Users;