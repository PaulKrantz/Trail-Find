import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1>Find a Trail</h1>
      <div className="home-button-wrapper">
        <Link to="/parks">Parks</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
    </div>
  )
}