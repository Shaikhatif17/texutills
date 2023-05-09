import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let loText = text.toLowerCase();
    setText(loText);
  };

  const handleDel = () => {
    let delText = "";
    setText(delText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows={8}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            convert to upperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            convert to lowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleDel}>
            delete
          </button>
        </div>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>your text summary</h1>
          <h5>
            {text.split(" ").length} words and {text.length} characters
          </h5>
          <h5>{0.008 * text.split(" ").length} minutes to read</h5>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
