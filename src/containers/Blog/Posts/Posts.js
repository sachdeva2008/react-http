import React,{Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import {Route,Link} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{

  state = {
    posts : []
  }

  componentWillMount(){
    //console.log(this.props);
  }

  componentDidMount(){
    //console.log(this.props);
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
      <div>
        <section className='posts'>
          {posts}
        </section>
        <Route path='/:id' exact component={FullPost}/>
      </div>
    );
  }
}

export default Posts;
