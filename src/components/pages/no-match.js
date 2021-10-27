import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
      <div>
        <h2>Hmmm, sorry I couldn't' find that page...</h2>
        <Link to="/">Return to homepage</Link>
      </div>
    );
}