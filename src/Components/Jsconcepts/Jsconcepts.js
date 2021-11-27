import React, { useEffect, useState } from "react";
import Concept from "../Concept/Concept";
import "./Jsconcepts.css";

const Jsconcepts = () => {
  const [concepts, setConcepts] = useState([]);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/abedinforhan/json-data/main/tutorials.json`
    )
      .then((res) => res.json())
      .then((data) => setConcepts(data));
  }, []);
  return (
    <>
      <div className="col-lg-8 col-11 m-xl-5 m-3">
        <h3>JS Confusing Parts</h3>
        <p>
          Understand
          <code> this</code>,<code> scope</code>,<code> hoisting</code>,
          <code> closure</code>,<code> inheritance</code>,<code> bind</code>,
          <code> call</code>,<code> apply</code>,<code> prototype</code>,
          <code> event delegation</code>,<code> dom</code>, timers and many more
          caveats.
        </p>
        <div className="concept mt-5">
          {concepts.map((concept) => {
            const { title } = concept;
            return <Concept key={title} concept={concept}></Concept>;
          })}
        </div>
      </div>
    </>
  );
};

export default Jsconcepts;
