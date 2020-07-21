import React,  { Component } from 'react'
import axios from 'axios'


export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeBeforebreakfast = this.onChangeBeforebreakfast.bind(this);
    this.onChangeAfterbreakfast = this.onChangeAfterbreakfast.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      afterbreakfast: 0,
      beforebreakfast: 0,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeBeforebreakfast(e) {
    this.setState({
      beforebreakfast: e.target.value
    })
  }

  onChangeAfterbreakfast(e) {
    this.setState({
      afterbreakfast: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const log = {
      username: this.state.username,
      beforebreakfast: this.state.beforebreakfast,
      afterbreakfast: this.state.afterbreakfast
      
    }

    console.log(log);

    axios.post('http://localhost:8080/mernapp/add/', log)
    .then(res => console.log(res.data))



  }

  render() {
    return (
    <div>
      <h3>Create Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>beforebreakfast: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.beforebreakfast}
              onChange={this.onChangeBeforebreakfast}
              />
        </div>
        <div className="form-group">
          <label>afterbreakfast: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.afterbreakfast}
              onChange={this.onChangeAfterbreakfast}
              />
        </div>
    

        <div className="form-group">
          <input type="submit" value="Create Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}