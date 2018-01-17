import React, { Component } from "react";
import axios from "axios";
import update from "immutability-helper";

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      firstname: "",
      lastname: "",
      username: "",
      email: ""
    }
  }

  componentDidMount() {
    // Make an AJAX GET request to MyAPI endpoint
    axios
    .get("http://myapi-profstream.herokuapp.com/api/2aebd5/persons")
    .then((response) => {
      // Set the array from the API to the state so we can iterate over the users and display them on the UI
      this.setState({
        users: response.data
      });
    });
  }

  handleChange(event) {
    this.setState(update(this.state, {
      $merge: {
        [event.target.name]: event.target.value
      }
    }));
  }

  handleSubmit() {
    // We will submit the data via an AJAX POST request

    axios
    .post("http://myapi-profstream.herokuapp.com/api/2aebd5/persons", this.state)
    .then((response) => {
      this.setState({
        users: this.state.users.concat(response.data)
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
        	<h1>User Manager</h1>

        	<div>
        		<a href="#" className="btn btn-primary" data-target="#add-user-modal" data-toggle="modal">Add User</a>
        	</div>
        </div>

        <div className="container margin-top-20">
        	<table className="table striped">
        		<thead>
        			<th>First Name</th>
        			<th>Last Name</th>
        			<th>Username</th>
        			<th>Email</th>
        			<th>Action</th>
        		</thead>

        		<tbody>
              { this.state.users.map((user, index) => {
                return (
                  <tr key={index}>
            				<td>
            					{user.firstname}
            				</td>
            				<td>
            					{user.lastname}
            				</td>
            				<td>
            					{user.username}
            				</td>
            				<td>
            					{user.email}
            				</td>
            				<td>
            					<a href="#" className="btn btn-primary">Edit</a>
            				</td>
            			</tr>
                );
              }) }
        		</tbody>
        	</table>
        </div>

        <div id="add-user-modal" className="modal fade">
        	<div className="modal-dialog">
        		<div className="modal-content">
        			<div className="modal-header">
        				<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        				<h4 className="modal-title">Add a User</h4>
        			</div>
        			<div className="modal-body">
        				<div className="bold">
        					First Name
        				</div>
        				<div className="margin-top-20">
        					<input onChange={this.handleChange.bind(this)} name="firstname" type="text" className="form-control" placeholder="First Name" />
        				</div>
        				<div className="bold margin-top-20">
        					Last Name
        				</div>
        				<div className="margin-top-20">
        					<input onChange={this.handleChange.bind(this)} name="lastname" type="text" className="form-control" placeholder="Last Name" />
        				</div>
        				<div className="bold margin-top-20">
        					Username
        				</div>
        				<div className="margin-top-20">
        					<input onChange={this.handleChange.bind(this)} name="username" type="text" className="form-control" placeholder="Username" />
        				</div>
        				<div className="bold margin-top-20">
        					Email
        				</div>
        				<div className="margin-top-20">
        					<input onChange={this.handleChange.bind(this)} name="email" type="text" className="form-control" placeholder="Email" />
        				</div>
        			</div>
        			<div className="modal-footer">
        				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        				<button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary" data-dismiss="modal">Save User</button>
        			</div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default UserList;
