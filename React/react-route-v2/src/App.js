import React from "react";

import './App.css';
import {Route, Switch} from "react-router";
import Users from "./components/user-list/Users";
import {NavLink} from "react-router-dom";
import Comments from "./components/comments-list/Comments";

function App() {
    return (
        <>
            <div>
                <Route exact path='/' render={() => <h1>Home</h1>}/>
                <Route path='/users' component={Users}/>
                <Route path='/comments' component={Comments}/>

            </div>
            <div>
                <NavLink to='/'>Home</NavLink><br/>
                <NavLink to='/users'>Users</NavLink><br/>
                <NavLink to='/posts'>Posts</NavLink><br/>
                <NavLink to='/comments'>Comments</NavLink>
            </div>
        </>
    );
}

export default App;
