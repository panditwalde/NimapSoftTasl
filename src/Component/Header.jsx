import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#">
              LOGO
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-12">
                <li class="nav-item active">
                  <NavLink class="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/task">
                    Task
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/user">
                    User
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
