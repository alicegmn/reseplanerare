import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Nu har du gått vilse...</h1>
      <p>Letade du efter någon av dessa sidor?</p>
      <ul>
        <li></li>
      </ul>
      <p>
        Gå till <Link to="/">startsidan</Link>
      </p>
    </>
  );
}

export default NotFound;
