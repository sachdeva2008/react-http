import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

  state = {
    posts : [],
    selectedId : null
  }

  componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
