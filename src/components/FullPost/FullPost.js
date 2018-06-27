import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedData : null,
    error : false
  }
  componentDidUpdate (){
    if(this.props.id){
      if(!this.state.loadedData || (this.state.loadedData && this.state.loadedData.id !== this.props.id) ){
      axios.get('https://jsonplaceholder.typicode.com/postsqqqqqq/'+this.props.id)
      .then(response=>{
          this.setState({loadedData:response.data});
      });

    }
  }
}

deleteDataHandler = () => {
  axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
  .then(response=>{
      console.log(response);
  }).catch(error => {
    this.setState({error:true});
  });
}




    render (){
        let post = <p>Please select a Post!</p>;
        if(!this.state.error){
          <p>Something went wrong</p>
        }
        if(this.props.id){
          post = <p>Loading!!!!!</p>
        }

        if(this.state.loadedData){
          post = (
              <div className="FullPost">
                  <h1>{this.state.loadedData.title}</h1>
                  <p>{this.state.loadedData.body}</p>
                  <div className="Edit">
                      <button onClick={this.deleteDataHandler} className="Delete">Delete</button>
                  </div>
              </div>

          );
        }

        return post;
    }
}

export default FullPost;
