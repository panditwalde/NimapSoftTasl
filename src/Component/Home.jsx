import React, { Component } from "react";
import Header from "./Header";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "data1   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data2   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data3   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data4   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data5   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data6   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data7   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data8   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data9   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data10   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",
        "data11  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde consectetur at. A facere cupiditate rem officiis provident dolore earum ut porro, natus rerum quaerat consectetur autem dolor, laboriosam culpa!",

      ],
      value: "",
    };
  }

  componentDidMount() {
    this.setState({ value: this.state.data[0] });
  }
  
  _handleRoutes(route) {
    window.history.pushState(null, null, window.location.href);
    window.location.replace(route);
  }
  render() {
    const { value, data } = this.state;

    const username = localStorage.getItem("username");
    const { password } = this.state;
    if (!username && !password) {
      this._handleRoutes("/login");
    }
    return (
      <div>
        <Header />

        <label class="dropdown">
          <div class="dd-button">Dropdown</div>

          <input type="checkbox" class="dd-input" id="test" />

          <ul class="dd-menu">
            {data && data.map((row, index) => <li key={index} onClick={()=>this.setState({value:row})}>Data {index+1}</li>)}
          </ul>
        </label>

        <div className="text1">
          {" "}
          <p>{value}</p>
        </div>
      </div>
    );
  }
}

export default Home;
