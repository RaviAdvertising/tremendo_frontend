import React, { useState } from "react";
import styles from "./ReadMore.module.css";

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <div onClick={toggleReadMore} className={styles.readMoreAndLessText}>
        {isReadMore ? "Read More ..." : "Show Less"}
      </div>
    </p>
  );
};
