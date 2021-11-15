import React, { useState } from "react";
import styles from "./ReadMore.module.css";

export const ReadMore = ({
  children,
  actionTextMore,
  actionTextLess,
  color
}) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <div
        onClick={toggleReadMore}
        className={styles.readMoreAndLessText}
        style={{ color }}
      >
        {isReadMore ? actionTextMore : actionTextLess}
      </div>
    </p>
  );
};
