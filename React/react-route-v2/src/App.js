import React from "react";

import './App.css';
import {Route} from "react-router";
import Users from "./components/user-list/Users";
import {NavLink} from "react-router-dom";
import Comments from "./components/comments-list/Comments";
import Posts from "./components/posts-list/Posts";

function App() {
    return (
        <>
            <div>
                <Route exact path='/' render={() => <h1>Home</h1>}/>
                <Route path='/users' component={Users}/>
                <Route path='/comments' component={Comments}/>
                <Route path='/posts' component={Posts}/>

            </div>
            <div>
                <NavLink to='/'>Home</NavLink><br/>
                <NavLink to='/users'>Users</NavLink><br/>
                <NavLink to='/comments'>Comments</NavLink><br/>
                <NavLink to='/posts'>Posts</NavLink>
            </div>
        </>
    );
}

export default App;
