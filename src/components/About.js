import React from "react";

export default function About(props) {
  let accordian_dark = {
    boxShadow: ` -3px -3px 15px#ffffff40, 3px 3px 15px#000000,
    -3px -3px 15px#ffffff40, 3px 3px 15px#000000`,
  };
  let accordian_light = {
    boxShadow: `-3px -3px 10px#ffffff, 3px 3px 10px#00000090,
    -3px -3px 10px#ffffff, 3px 3px 10px#00000090`,
  };

  let accordian_l = {
    backgroundColor: "#bf3a30",
    backgroundImage: "linear-gradient(315deg, #9dc5c3 0%, #998e8e 74%",
    fontWeight: "bolder",
  };
  let accordian_d = {
    backgroundColor: "#bf3a30",
    backgroundImage: "linear-gradient(315deg, #ff6c62 0%, #a774bf 74%)",
    fontWeight: "bolder",
  };
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
  return (
    <div className="container">
      <h1 className="mb-5" style={props.mode === "Light" ? h1_dark : h1_light}>
        /////About Us/////
      </h1>
      <div
        className="accordion"
        id="accordionExample"
        style={props.mode === "Light" ? accordian_dark : accordian_light}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.mode === "Light" ? accordian_d : accordian_l}
            >
              Whe did it Started
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.mode === "Light" ? accordian_d : accordian_l}
            >
              What are the features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.mode === "Light" ? accordian_d : accordian_l}
            >
              Why we Built this
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
