import React from "react";
import ReactDOM from "react-dom";

const fName = "Django";
const lName = "Dog";
const fullName = fName + " " + lName;
const number = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>Hello {fullName}</h1>
    <p>
      {fullName}'s lucky number is {number}
    </p>
  </div>,
  document.getElementById("root")
);
