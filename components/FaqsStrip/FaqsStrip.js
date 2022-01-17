import React, { useState } from "react";
import styles from "./FaqsStrip.module.css";

export default function FaqsStrip(props) {
  const toggleBar = () => {
    props.clickOnBar();
  };
  const data = props.data;
  return (
    <div className={styles.base}>
      <div
        className={styles.headerWrapper}
        style={{
          backgroundColor: props.isOpen == props.id ? "#f78f1e" : "#fff"
        }}
        onClick={() => toggleBar()}
      >
        <div
          className={styles.header}
          style={{ color: props.isOpen == props.id ? "#fff" : "#1f1f1f" }}
        >
          {data.faq}
        </div>
        <div
          className={`${styles.closeIcon}`}
          style={{
            color: props.isOpen == props.id ? "#fff" : "#f78f1e",
            transform: props.isOpen == props.id && "rotate(45deg)"
          }}
        >
          +
        </div>
      </div>
      {props.isOpen == props.id && (
        <div className={`${styles.content}`}>{data.answer}</div>
      )}
    </div>
  );
}
