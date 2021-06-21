import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  _handleRoutes(route) {
    window.history.pushState(null, null, window.location.href);
    window.location.replace(route);
  }

  submitData = () => {
    const { username, password } = this.state;

    if (username === "") {
      alert("username is Required!!!");
      return false;
    }
    if (
      /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test(username) === false
    ) {
      alert("Please enter proper username ");
      return false;
    } else if (password === "") {
      alert("password is Required!!!");
      return false;
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      this._handleRoutes("/");
    }
  };

  render() {
    return (
      <div class=" login-container mt-5 ">
        <div class=" login-form-1">
          <h3>Login </h3>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <button class="btn btn-primary" onClick={() => this.submitData()}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
