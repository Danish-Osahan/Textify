import React, { useState } from "react";

export default function Textform(props) {
  // Functions
  const uppercase = () => {
    // console.log('upper case was clicked')
    let newtext = text.toUpperCase();
    update_text(newtext);
  };
  const handleonChange = (event) => {
    // console.log('On Change')
    update_text(event.target.value);
  };
  const clear = () => {
    update_text("");
  };
  const lowercase = () => {
    let newtext = text.toLowerCase();
    update_text(newtext);
  };
  const removespaces = () => {
    let newtext = text.split(/[ ]+/);
    update_text(newtext.join(" "));
  };

  // styles
  let h1_light = {
    boxShadow: `-3px -3px 8px#ffffff, 3px 3px 8px#00000090,
    -3px -3px 8px#ffffff, 3px 3px 8px#00000090`,
    color: "#5e5c5c ",
  };
  let h1_dark = {
    boxShadow: ` -3px -3px 12px#ffffff20, 3px 3px 12px#000000,
    -3px -3px 12px#ffffff20, 3px 3px 12px#000000`,
    color: " #fc466b",
  };
  let text_area_light = {
    border: "none",
    backgroundColor: " #9dc5c3",
    backgroundImage: "linear-gradient(315deg, #9dc5c3 0%, #998e8e 74%)",
    boxShadow: `-3px -3px 10px#ffffff, 3px 3px 10px#00000090,
    -3px -3px 10px#ffffff, 3px 3px 10px#00000090`,
  };
  let text_area_dark = {
    border: "none",
    backgroundColor: " #bf3a30",
    backgroundImage: "linear-gradient(315deg, #bf3a30 0%, #864ba2 74%)",
    boxShadow: ` -3px -3px 12px#ffffff20, 3px 3px 12px#000000,
    -3px -3px 12px#ffffff20, 3px 3px 12px#000000`,
  };

  let button_dark = {
    backgroundColor: "#bf3a30",
    backgroundImage: "linear-gradient(315deg, #bf3a30 0%, #864ba2 74%)",
  };
  let button_light={
    boxShadow: `-3px -3px 8px#ffffff, 3px 3px 8px#00000090,
    -3px -3px 8px#ffffff, 3px 3px 8px#00000090`,
    backgroundColor: " #9dc5c3",
    backgroundImage: "linear-gradient(315deg, #9dc5c3 0%, #998e8e 74%)"
  }
  let summarylight={
    backgroundColor: "#9dc5c3",
    backgroundImage: "linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%)"
  }
  let summarydark={
    backgroundColor: "#bf3a30",
    backgroundImage: "linear-gradient(315deg, #bf3a30 0%, #864ba2 74%)"
  }

  const [text, update_text] = useState("");
  //////////////////////////////////////////
  return (
    <>
      <div className="container">
        <div className="mb-4">
          <div className="my-4">
            <h1 style={props.mode === "Light" ? h1_dark : h1_light}>
              Enter Your Text To Analyze
            </h1>
          </div>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonChange}
            style={props.mode === "Light" ? text_area_dark : text_area_light}
          ></textarea>
        </div>
        <div className="d-flex flex-wrap align-content-around">
          <button
            className="btn  btn-primary flex-fill mx-2  mb-4"
            id="upper"
            onClick={uppercase}
            style={props.mode === "Light" ? button_dark : button_light}
            disabled={text.length===0}
          >
            UpperCase
          </button>
          <button
            className="btn btn-primary flex-fill mx-2 mb-4"
            id="clear"
            onClick={clear}
            style={props.mode === "Light" ? button_dark : button_light}
            disabled={text.length===0}

          >
            Clear
          </button>
          <button
            className="btn btn-primary flex-fill mx-2 mb-4"
            id="upper"
            onClick={lowercase}
            style={props.mode === "Light" ? button_dark : button_light}
            disabled={text.length===0}

          >
            Lowercase
          </button>
          <button
            className="btn btn-primary flex-fill mx-2 mb-4"
            id="upper"
            onClick={removespaces}
            style={props.mode === "Light" ? button_dark : button_light}
            disabled={text.length===0}

          >
            Remove Spaces
          </button>
        </div>
      </div>
      <div className="container ">
        <h1 style={props.mode === "Light" ? h1_dark : h1_light}>
          Your Text Summary
        </h1>
        <p className="my-4" id="summary" style={props.mode==='Light'?summarydark:summarylight}>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters And{" "}
          {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Required to read
        </p>
      </div>
    </>
  );
}
