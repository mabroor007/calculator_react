import React, { Component } from "react";

export class Numbers extends Component {
  state = {
    Numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", 0],
  };
  render() {
    return (
      <div
        style={{
          height: "400px",
          width: "75%",
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.Numbers.map((num) => (
          <Numbtn
            numInput={this.props.numInput}
            clname={"num"}
            key={num}
            value={num}
          />
        ))}
        <Numbtn setResult={this.props.setResult} clname={"equal"} key={"="} value={"="} />
      </div>
    );
  }
}
export class Numbtn extends Component {
  render() {
    if (this.props.clname === "equal") {
      return (
        <div
          onClick={(e) => this.props.setResult()}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(.9)";
            if (e.target.classList[0] === "equal") {
              e.target.style.backgroundColor = "lightgreen";
            } else {
              e.target.style.backgroundColor = "yellow";
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "white";
          }}
          className={this.props.clname}
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            cursor: "pointer",
            transition: ".3s all",
          }}
        >
          {this.props.value}
        </div>
      );
    } else {
      return (
        <div
          onClick={(e) => this.props.numInput(this.props.value)}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(.9)";
            if (e.target.classList[0] === "equal") {
              e.target.style.backgroundColor = "lightgreen";
            } else {
              e.target.style.backgroundColor = "yellow";
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "white";
          }}
          className={this.props.clname}
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            cursor: "pointer",
            transition: ".3s all",
          }}
        >
          {this.props.value}
        </div>
      );
    }
  }
}

export default Numbers;
