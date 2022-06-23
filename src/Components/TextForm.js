import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("You dummy Text is here");

  const handleUpClick = () => {
    if (text !== null && text.length > 0) {
      setText(text.toUpperCase());
    }
  };

  const TextChanging = (event) => {
    setText(event.target.value);
  };

  const HandleLowerClick = () => {
    if (text !== null && text.length > 0) {
      setText(text.toLowerCase());
      props.showAlert("Converted to lowercase", "info");
    }
  };

  const HandleClearText = () => {
    if (text !== null && text.length > 0) {
      setText("");
      props.showAlert("Reset All Text", "danger");
    }
  };

  // this function is using to Copy the whole text from the input box.
  const HandleCopy = () => {
    if (text !== null && text.length > 0) {
      var text1 = document.getElementById("mytext");
      text1.select();
      navigator.clipboard.writeText(text1.value);
      document.getSelection().removeAllRanges(); // This line of code is using to re-selct
      props.showAlert("Show Text Copied Now", "success");
    }
  };

  // This function is Removing the extra spaces
  const HandleExtraSpaces = () => {
    var newTest = text.split(/[ ]+/);
    setText(newTest.join(" "));
  };
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={TextChanging}
            id="mytext"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Upper Case
        </button>{" "}
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={HandleLowerClick}
        >
          Lower Case Convert
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={HandleClearText}
        >
          Reset
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={HandleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={HandleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h5 className="text-info">Pragraph Summary</h5>
        <p>
          {text.trim() === "" ? 0 : text.split(" ").length} Words &{" "}
          {text.length} Charactors |{" "}
          {(
            0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          ).toFixed(1)}{" "}
          Minutes Read
        </p>
      </div>

      <div className="container">
        <h3 className="text-success">Preview </h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
