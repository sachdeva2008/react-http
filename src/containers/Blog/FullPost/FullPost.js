import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';


class FullPost extends Component {
  state = {
    loadedData : null,
    error : false
  }


  componentDidMount (){
    //console.log(this.props);
    this.loadData();
}

componentDidUpdate(){
    this.loadData();
}

loadData(){
      if(this.props.match.params.id){
        if(!this.state.loadedData || (this.state.loadedData && this.state.loadedData.id != this.props.match.params.id) ){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
        .then(response=>{
            this.setState({loadedData:response.data});
        }).catch(error=>{
          console.log(error);
        });

      }
    }
}

deleteDataHandler = () => {
  axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
  .then(response=>{
      console.log(response);
  });
}




    render (){
        let post = <p>Please select a Post!</p>;
        if(!this.state.error){
          <p>Something went wrong</p>
        }
        if(this.props.match.params.id){
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
