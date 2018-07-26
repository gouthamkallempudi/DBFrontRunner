import React, { Component } from 'react';


class User extends Component {

	constructor(props) {
    super(props);
    this.state = {
      broker_id: " ",
      PassWord : " ",
      message : " "
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({broker_id: event.target.value});
  }

  handleChange2(event) {
    this.setState({PassWord : event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.broker_id);
    alert('An essay was submitted: ' + this.state.PassWord);
    event.preventDefault();
  }

  componentDidMount() {
  	let url =" "

    fetch(url , { method: 'POST',  body: JSON.stringify(this.state),  headers:{ 'Content-Type': 'application/json'} })
      .then(res => res.json())
      .then( (result) => { this.setState({ message : result.text() }); },
      
        (error) => {
          this.setState({
            message : "error"
          });
        }
      )
  }


  render() {
    return (
    <div>	
      <form onSubmit={this.handleSubmit}>

       BrokerId :  <input type="text" value={this.state.broker_id}  onChange={this.handleChange1}/>
       PassWord :  <input type="text" value={this.state.PassWord}  onChange={this.handleChange2}/>
        
        <input type="submit" value="Submit"/>
      </form>
      </div>
    );
  }
}




export default User;