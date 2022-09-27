import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {directors.map((director, index) => 
      <div key={index}>
        <h4>{director.name}</h4>
        <ul>
          {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>
    )}
  </div>;
}

export default Directors;
