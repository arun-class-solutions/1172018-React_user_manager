import React, { Component } from "react";
import axios from "axios";
import update from "immutability-helper";

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: ""
    }
  }

  componentDidMount() {
    axios
    .get(`http://myapi-profstream.herokuapp.com/api/2aebd5/persons/${this.props.match.params.id}`)
    .then((response) => {
      this.setState(response.data);
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
    axios
    .put(`http://myapi-profstream.herokuapp.com/api/2aebd5/persons/${this.props.match.params.id}`, this.state)
    .then((response) => {
      // Change route back to user list page
      this.props.history.push("/users");
    });
  }

  render() {
    return (
      <div>
        <div className="small-container">
        	<h1>User Manager</h1>

        	<div>
        		<a href="#" className="btn btn-primary">Back</a>
        	</div>
        </div>

        <div className="small-container margin-top-20">
        	<div className="well">
        		<div className="bold">
        			First Name
        		</div>
        		<div className="margin-top-20">
        			<input onChange={this.handleChange.bind(this)} name="firstname" value={this.state.firstname} type="text" className="form-control" />
        		</div>
        		<div className="bold margin-top-20">
        			Last Name
        		</div>
        		<div className="margin-top-20">
        			<input onChange={this.handleChange.bind(this)} name="lastname" value={this.state.lastname} type="text" className="form-control" />
        		</div>
        		<div className="bold margin-top-20">
        			Username
        		</div>
        		<div className="margin-top-20">
        			<input onChange={this.handleChange.bind(this)} name="username" value={this.state.username} type="text" className="form-control" />
        		</div>
        		<div className="bold margin-top-20">
        			Email
        		</div>
        		<div className="margin-top-20">
        			<input onChange={this.handleChange.bind(this)} name="email" value={this.state.email} type="text" className="form-control" />
        		</div>
        		<div className="margin-top-20 txt-right">
        			<a href="#" className="btn btn-default">Cancel</a>
        			<button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary">Edit User</button>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default EditUser;
