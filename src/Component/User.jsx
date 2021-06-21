import React, { Component } from "react";
import Header from "./Header";

export class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      togged: false,
      password: localStorage.getItem("password"),
    };
  }

  logOut = () => {
    localStorage.clear();
    this._handleRoutes("/login");

  };
  changesPasswordValue = () => {
    const { password,togged } = this.state;
    if (!password) {
      alert("password is requird !!!");
    } else {
      localStorage.setItem("password", password);
      this.setState({ togged: !togged });
      alert("password changes")
    }
  };

  _handleRoutes(route) {
    window.history.pushState(null, null, window.location.href);
    window.location.replace(route);
  }
  render() {
    const username = localStorage.getItem("username");
    const { togged, password } = this.state;
    console.log(password);
    if (!username && !password) {
      this._handleRoutes("/login");
    }
    return (
      <div>
        <Header />

        <div className="container-small">
          <div className="da">
            <div className="row">
              <div className="col">
                {" "}
                <b>username :</b> {username}
              </div>
            </div>
            <div className="d-flex " style={{ marginTop: "3%" }}>
              {" "}
              <div className="">
                {" "}
                <b>password :</b>{" "}
                {togged ? (
                  <input
                    type="text"
                    class="input-box"
                    placeholder="password"
                    aria-label="password"
                    value={password}
                    aria-describedby="basic-addon1"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                ) : (
                  <>********</>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col useer">
              {togged ? (
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={() => this.changesPasswordValue()}
                >
                  save password
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={() => this.setState({ togged: !togged })}
                >
                  change password
                </button>
              )}
              <button
                type="button"
                class="btn btn-outline-secondary"
                onClick={() => this.logOut()}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
