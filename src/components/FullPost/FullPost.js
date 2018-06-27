import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedData : null
  }
  componentDidUpdate (){
    if(this.props.id){
      if(!this.state.loadedData || (this.state.loadedData && this.state.loadedData.id !== this.props.id) ){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
      .then(response=>{
          this.setState({loadedData:response.data});
      });

    }
  }
}

    render (){
        let post = <p>Please select a Post!</p>;
        if(this.props.id){
          post = <p>Loading!!!!!</p>
        }

        if(this.state.loadedData){
          post = (
              <div className="FullPost">
                  <h1>{this.state.loadedData.title}</h1>
                  <p>Content</p>
                  <div className="Edit">
                      <button className="Delete">Delete</button>
                  </div>
              </div>

          );
        }

        return post;
    }
}

export default FullPost;
