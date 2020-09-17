import React from "react";
import serverURL from "../serverData";

const QuickMatch = () => {

  return (
    <>
      <h1>Quick Match</h1>

      <h2>Choose an element</h2>

      <div className="elements">
        <div className="fire">

          <a href={serverURL + "?choice=fire"}>Fire</a>

        </div>

        <div className="water">

        <a href={serverURL + "?choice=water"}>Water</a>

        </div>

        <div className="plant">

        <a href={serverURL + "?choice=plant"}>Plant</a>

        </div>

      </div>

    </>
  )

};

export default QuickMatch;