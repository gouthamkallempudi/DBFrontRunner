import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

	constructor(props) {
    super(props);
    this.state = {
      id: " ",
      password : " ",
    };
    

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({id: event.target.value});
  }

  handleChange2(event) {
    this.setState({password : event.target.value});
  }

  handleSubmit(event) {
    //alert('An essay was submitted: ' + this.state.is);
     //alert('An essay was submitted: ' + this.state.password);
    event.preventDefault();
    var url ="http://localhost:7777/users/login";
    console.log(this.state.id);
    var data = {
     id: this.state.id,
      password: this.state.password
      }

    axios.post( url ,  data)
     .then(function (response) {
    console.log(response);
      })
     .catch(function (error) {
    console.log(error);
      });

  }

  componentDidMount() {
    
  	
  }


  render() {
    return (
    <div>	
      <form onSubmit={this.handleSubmit}>

       BrokerId :  <input type="text" value={this.state.id}  onChange={this.handleChange1}/>
       PassWord :  <input type="text" value={this.state.pasword}  onChange={this.handleChange2}/>
        
        <input type="submit" value="Submit"/>
      </form>
      </div>
    );
  }
}




export default User;