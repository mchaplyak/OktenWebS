import React from 'react'
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

import './App.css';
import Users from "./components/users-list/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
    return (
        <>

            <div>
                <NavLink to='/'>Home</NavLink> <br/>
                <NavLink to='/users'>allUsers</NavLink> <br/>
                <NavLink to='/posts'>allPosts</NavLink><br/>
                <NavLink to='/comments'>allComments</NavLink>
            </div>

            <div>
                <Route exact path='/' render={() => <h1>Start Page</h1>}/>
                <Route path='/users' component={Users}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/comments' component={Comments}/>
            </div>
        </>
    );
}

export default App;
