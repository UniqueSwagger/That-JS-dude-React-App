/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Concept.css";

const Concept = (props) => {
  const { title, desc } = props.concept;
  return (
    <div>
      <h2 className="text-primary">
        <a
          className="text-decoration-none title"
          href="http://thatjsdude.com/beginner.html"
          target="_blank"
        >
          {title}
        </a>
      </h2>
      <p>{desc}</p>
      <button className="btn btn-light border">
        <a
          className="text-decoration-none text-black "
          href="http://thatjsdude.com/workshops/react/"
        >
          view details
        </a>
      </button>
    </div>
  );
};

export default Concept;
