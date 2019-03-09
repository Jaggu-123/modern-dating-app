import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FaceBookSignIn } from "../actions/authActions";
import { createProfile } from "../actions/projectActions";

class Controls extends Component {
  constructor() {
    super();

    this.state = {
      image: null,
      url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      console.log(this.state);
    }
    console.log(this.state);
  }

  handleCancel(e) {
    this.props.createProfile(this.state);
  }
  render() {
    console.log(this.props.auth);
    const {
      resetLabel,
      incrementLabel,
      decrementLabel,
      increment,
      decrement,
      resetCount
    } = this.props;

    return (
      <div className="controls">
        <div
          onClick={() => {
            increment();
          }}
        >
          <span>{incrementLabel}</span>
        </div>
        <div
          onClick={() => {
            resetCount(0);
          }}
        >
          <span>{resetLabel}</span>
        </div>
        <div
          onClick={() => {
            decrement();
          }}
        >
          <span>{decrementLabel}</span>
        </div>

        <button
          onClick={() => {
            this.props.FaceBookSignIn();
          }}
        >
          Button
        </button>

        <button
          onClick={() => {
            this.handleCancel();
            // this.props.createProfile(this.props.auth);
          }}
        >
          Profile
        </button>

        <input type="file" onChange={this.handleSubmit} />
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  resetCount: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string
};

Controls.defaultProps = {
  resetLabel: "RESET",
  incrementLabel: "+",
  decrementLabel: "-"
};

const mapStateToProps = state => ({
  auth: state.user
});

export default connect(
  mapStateToProps,
  { FaceBookSignIn, createProfile }
)(Controls);
