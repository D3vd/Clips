import React from "react";

function Quote({ quote }) {
  return (
    <div>
      <h2>{quote.quote}</h2>
      <h3>{quote.book}</h3>
    </div>
  );
}

export default Quote;
