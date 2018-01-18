import React, { Component } from "react";
import axios from "axios";

class EditUser extends Component {
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
        			<input type="text" className="form-control" />
        		</div>
        		<div className="bold margin-top-20">
        			Last Name
        		</div>
        		<div className="margin-top-20">
        			<input type="text" className="form-control" />
        		</div>
        		<div className="bold margin-top-20">
        			Username
        		</div>
        		<div className="margin-top-20">
        			<input type="text" className="form-control" />
        		</div>
        		<div className="bold margin-top-20">
        			Email
        		</div>
        		<div className="margin-top-20">
        			<input type="text" className="form-control" />
        		</div>
        		<div className="margin-top-20 txt-right">
        			<a href="#" className="btn btn-default">Cancel</a>
        			<button type="submit" className="btn btn-primary">Edit User</button>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default EditUser;
