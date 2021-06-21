import React, { Component } from "react";
import Header from "./Header";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

export class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      title: "",
      open: false,
    };
  }

  _handleRoutes(route) {
    window.history.pushState(null, null, window.location.href);
    window.location.replace(route);
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("data", JSON.stringify(json));
      });

    const task = localStorage.getItem("data");
    const data = JSON.parse(task);
    this.setState({ data });
  }

  deleteData = (row) => {
    const result = localStorage.getItem("data");
    const data = JSON.parse(result);
    const tasks = data.filter((task) => task.id !== row.id);
    localStorage.setItem("data", JSON.stringify(tasks));
    this.setState({ data: tasks });
  };
  onClose = () => {
    console.log("gg");
    this.setState({ open: false });
  };
  createTask = () => {
    const { title } = this.state;
    if (!title) {
        alert("title is required !");
        return;
    } else {
      const result = localStorage.getItem("data");
      const data = JSON.parse(result);
      let body = {
        id: data.length + 1,
        completed: false,
        useId: "3",
        title,
      };
      const mergeData = data.concat(body);
      console.log(mergeData);
      localStorage.setItem("data", JSON.stringify(mergeData));
      this.setState({ data: mergeData,open:false });

    }
  };

  render() {
    const username = localStorage.getItem("username");
    const { password } = this.state;
    if (!username && !password) {
      this._handleRoutes("/login");
    }
    const result = localStorage.getItem("data");
    const data = JSON.parse(result);

    return (
      <>
        <Header />

        <div className="container-fluid mt-5" style={{ width: "72%" }}>
          {data &&
            data.map((row, index) => (
              <div className="row " key={index}>
                <div className="col"> {row.id}</div>
                <div className="col"> {row.title}</div>
                <div className="col"> {row.completed}</div>
                <div className="col">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteData(row)}
                  >
                    Delete
                  </button>
                </div>
                <hr className="mt-4" />
              </div>
            ))}
          <button
            className="btn btn-primary mb-5"
            style={{ display: "flex" }}
            onClick={() => this.setState({ open: true })}
          >
            Add task
          </button>
        </div>

        <Modal open={this.state.open} onClose={() => this.onClose()} center>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              
                <h4 class="modal-title">Create a Task</h4>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Create a Task"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => this.setState({ title: e.target.value })}
                  />
                </div>{" "}
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  onClick={() => this.createTask()}
                >
                  Create
                </button>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  onClick={() => this.onClose()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Task;
