import React from "react";

const ResultsContainer = ({ children }) => {
  if (children.length === 0) return <div> Sort something boyyy </div>;

  console.log(children);
  return (
    <div>
      {children.map((item) => (
        <h1 key={item.time + "" + item.method}>{item.method}</h1>
      ))}
    </div>
  );
};

export default ResultsContainer;
