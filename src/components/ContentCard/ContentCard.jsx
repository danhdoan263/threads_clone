import React from "react";
import "./ContentCard.css";
const ContentCard = ({ children }) => {
  return (
    <div className="Content">
      <div className="contentCard">{children}</div>
    </div>
  );
};

export default ContentCard;
