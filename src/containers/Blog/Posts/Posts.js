import React,{Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';

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
      return <Post key={post.id} title={post.title} Author={post.Author} Clicked = {() => this.postSelectedHandler(post.id)}/>
    });
    return(
      <section className='posts'>
        {posts}
      </section>
    );
  }
}

export default Posts;
