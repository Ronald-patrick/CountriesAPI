import React from "react";
import "../index.css";

const Card = ({ capital,name, flags, subRegion, languages,toggle,population,region,borders }) => {
  let langs = "";

  for (let a in languages) {
    langs = langs + languages[a] + ",";
  }

  langs = (langs.length > 0) ? langs.slice(0,langs.length-1) + "." : "";

  let borderlist = "";

  for (let a in borders) {
    borderlist = borderlist + borders[a] + ",";
  }

  borderlist = (borderlist.length > 0) ? borderlist.slice(0,borderlist.length-1) + "." : "";



  return (
    <div className="card" onClick={()=>toggle({name,flags,subRegion,langs,capital,population,region,borderlist})}>
      <div className="info">
        <div className="flags">
          <img src={flags} alt="Flag" />
        </div>

        <h3>{name}</h3>
        <p>Sub Region: {subRegion}</p>
		<div className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      </div>

    </div>
  );
};

export default Card;
