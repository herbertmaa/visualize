import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import "./ResultsContainer.scss";

const ResultsContainer = ({ children }) => {
  if (children.length === 0)
    return (
      <div className="ResultsContainer">
        Press "Sort Me" to start seeing your results!
      </div>
    );

  return (
    <div className="ResultsContainer">
      {children.map((item) => (
        <Chip
          variant="outlined"
          size="small"
          avatar={<Avatar> {item.numElements}</Avatar>}
          label={item.method + ": " + item.time + "ms"}
          color="primary"
        />
      ))}
    </div>
  );
};

export default ResultsContainer;
