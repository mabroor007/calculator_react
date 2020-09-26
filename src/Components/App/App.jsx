import React, { Component } from "react";
import "./App.css";
import { Numbers } from "../Numbers/Numbers";
import Operations from "../Operations/Operations";

class App extends Component {
  state = {
    value: '',
    prev: null,
    op: null,
  };

  // set prev op press
  setPrev = () => {
    this.setState((state) => ({
      prev: state.value,
      value:''
    }));
  };

  // reset calc clearpress
  reset = () => {
    this.setState((state) => ({
      value: '',
      prev: null,
      op:null
    }));
  };

  // set result or equalpress
  setResult = () => {
    if ((this.state.op !== null, this.state.prev !== null)) {
      if (this.state.op === "+") {
        this.setState((state) => ({
          value:(Number(state.value) + Number(state.prev)),
          prev:'',
          op:null
        }));
      } else if (this.state.op === "-") {
        this.setState((state) => ({
          value: (Number(state.prev) - Number(state.value)),
          prev:'',
          op:null
        }));
      } else if (this.state.op === "×") {
        this.setState((state) => ({
          value: (Number(state.value) * Number(state.prev)),
          prev:'',
          op:null
        }));
      } else if (this.state.op === "÷") {
        this.setState((state) => ({
          value: (Number(state.prev) / Number(state.value)),
          prev:'',
          op:null
        }));
      }
    }
  };
  // set operations
  setOP = (OP) => {
    this.setResult();
    this.setPrev();
    this.setState({
      op: OP,
    });
  };

  // styles for input
  instyle = {
    width: "100%",
    height: "150px",
    fontSize: "4rem",
    backgroundColor: "black",
    border: "none",
    textAlign: "right",
    color: "white",
    paddingRight:'10px'
  };

  // handel input change
  handleChange = (e) => {
    this.setState({
      value: e.target.value.replace(/[^\d.-]/g, ''),
    });
  };

  // num pressed
  numInput = (value) => {
    this.setState(state => ({
      value:state.value+String(value)
    }))
  }

  render() {
    return (
      // main div
      <div
        style={{
          boxShadow: "0 0 10px black",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
        className="App"
      >
        {/* previous input show */}
        <p
          style={{
            color: "white",
            position: "absolute",
            top: ".5%",
            left: "5%",
          }}
        >
          {this.state.prev}
          {this.state.op}
        </p>

        {/* input */}
        <input 
          placeholder="0"
          onChange={this.handleChange}
          value={this.state.value}
          style={this.instyle}
          type="text"
        />

        {/* lowerpart of calculator */}
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <Numbers setResult={this.setResult} numInput={this.numInput} />
          <Operations setOP={this.setOP} />
        </div>
        <button
          onClick={this.reset}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "orange";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";
          }}
          style={{
            width: "100%",
            height: "100px",
            border: "none",
            outline: "none",
            transition: ".4s all",
            backgroundColor: "white",
            cursor:'pointer',
            fontSize:'2rem'
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
