import React, { Component } from "react";

import toast from "react-hot-toast";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submit logic here

    if (this.state.password === this.state.confirmPassword) {
      console.log(this.state.password);
      const infos = {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        photo: this.state.photo,
        password: this.state.password,
      };
      console.log(infos);
      fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(infos),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast("Service added successfully!", {
              icon: "👏",
            });
          }
        });
    } else {
      alert("Password is wrong");
    }
  };

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              required
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              required
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo:</label>
            <input
              required
              type="file"
              className="form-control"
              id="photo"
              name="photo"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              required
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
