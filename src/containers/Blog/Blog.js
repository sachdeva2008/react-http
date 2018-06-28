import React, { Component } from 'react';
import axios from 'axios';

import './Blog.css';

class Blog extends Component {

  state = {
    posts : [],
    selectedId : null
  }

  componentDidMount(){
        axios.get('/posts')
        .then(response=>{
          const posts = response.data.slice(0,4);
          const updatedPosts = posts.map(posts=> {
            return {
              ...posts,
              Author:'Max'
            }
          });

            this.setState({posts:updatedPosts});
          //console.log(response);
        });

    }

    postSelectedHandler = (id) => {
      this.setState({ selectedId : id});
    }

    render () {
      const posts = this.state.posts.map(post => {
        return <Post key={post.id} title={post.title} Author={post.Author} Clicked = {() => this.postSelectedHandler(post.id)}/>
      });
        return (
            <div>
              <header>
                <nav>
                  <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/new-post'>New Post</a></li>
                  </ul>
                </nav>
              </header>
                <section className="Posts">
                    {posts}

                </section>
                <section>
                    <FullPost id = {this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
