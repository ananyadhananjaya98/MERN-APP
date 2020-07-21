import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Log = props => (
    <tr>
      <td>{props.log.username}</td>
      <td>{props.log.beforebreakfast}</td>
      <td>{props.log.afterbreakfast}</td>
      <td>
      <Link to={"/edit/"+props.log._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteLog(props.log._id) }}>delete</a>
      </td>
    </tr>
  )

  export default class LogsList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteLog = this.deleteLog.bind(this)
  
      this.state = {logs: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:8080/mernapp/')
        .then(response => {
          this.setState({ logs: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteLog(id) {
      axios.delete('http://localhost:8080/mernapp/'+id)
        .then(response => { console.log(response.data)});
      this.setState({
        logs: this.state.logs.filter(el => el._id !== id)
      })
    }
  
    logList() {
      return this.state.logs.map(currentlog => {
        return <Log log={currentlog} deleteLog={this.deleteLog} key={currentlog._id}/>;
      })
    }

  
    render() {
      return (
        <div>
          <h3>Loaded logs</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>beforebreakfast</th>
                <th>afterbreakfast</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.logList()}
            </tbody>
          </table>
        </div>
      )
    }
  }
