import React, { useState } from "react";
import styles from "./FaqsStrip.module.css";

export default function FaqsStrip(props) {
  const toggleBar = () => {
    props.clickOnBar();
  };

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elitaccumsan lacus
          vel facilisis.{" "}
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
        <div className={`${styles.content}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis.
        </div>
      )}
    </div>
  );
}
