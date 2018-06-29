import React, { Component } from 'react';
import axios from 'axios';

import {Route,NavLink,Switch} from 'react-router-dom';

import './Blog.css';

import Posts from './Posts/Posts';
import  NewPost from './NewPost/NewPost';


class Blog extends Component {

  render () {
        return (
            <div>
              <header>
                <nav>
                  <ul>
                    <li><NavLink to='/'exact>Home</NavLink></li>
                    <li><NavLink to={{
                      pathname:'/new-post'
                    }}>New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              {/*<Route path='/' exact render={() => <h1>Home</h1>} />*/}
              <Switch>
                <Route path='/new-post' exact component={NewPost}/>
                <Route path='/' component={Posts}/>
              </Switch>
            </div>
        );
    }
}

export default Blog;
