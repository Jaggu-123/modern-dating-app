import React, { Component } from "react";
import Counter from "./containers/Counter";
// import { connect } from "react-redux";
// import { FaceBookSignIn } from "./actions/authActions";

class App extends Component {
  constructor() {
    super();

    this.FaceBookSignIn = this.FaceBookSignIn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  FaceBookSignIn() {
    console.log("entered");
  }
  handleSubmit(e) {
    console.log("heelo");
  }
  render() {
    return (
      <div>
        <Counter />
        <form onSubmit={this.handleSubmit}>
          <button>Heelo</button>
        </form>
        <button onClick={this.FaceBookSignIn}>SignIn</button>
      </div>
    );
  }
}

export default App;
