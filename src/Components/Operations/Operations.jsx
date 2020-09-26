import React, { Component } from "react";

export class Operations extends Component {
  render() {
    return (
      <div
        style={{
          width: "25%",
          height: "400px",
          backgroundColor: "white",
        }}
      >
        <Opbtn
          onClick={() => {
            this.props.setOP("+");
          }}
          value={"+"}
        />
        <Opbtn
          onClick={() => {
            this.props.setOP("-");
          }}
          value={"-"}
        />
        <Opbtn
          onClick={() => {
            this.props.setOP("×");
          }}
          value={"×"}
        />
        <Opbtn
          onClick={() => {
            this.props.setOP("÷");
          }}
          value={"÷"}
        />
      </div>
    );
  }
}

class Opbtn extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "orange";
          e.target.style.transform = "scale(.9)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "blue";
          e.target.style.transform = "scale(1)";
        }}
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem",
          cursor: "pointer",
          transition: ".3s all",
        }}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Operations;
