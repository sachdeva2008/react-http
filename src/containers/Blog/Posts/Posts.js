import React,{Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import {Link} from 'react-router-dom';
class Posts extends Component{

  state = {
    posts : []
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

  render(){
    const posts = this.state.posts.map(post => {
      return (<Link to={'/'+post.id} key={post.id}><Post

                title={post.title}
                Author={post.Author} Clicked = {() => this.postSelectedHandler(post.id)}/> </Link>);
    });
    return(
      <section className='posts'>
        {posts}
      </section>
    );
  }
}

export default Posts;
