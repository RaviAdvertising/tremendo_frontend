import { Fragment } from "react";
import styles from "./TrustFactor.module.css";
import Icon from "../Icons/Icons";

export default function Trustfactor(props) {
  return (
    <div className={styles.base}>
      <div
        className={styles.icon}
        style={{ backgroundColor: props.backgroundColor }}
      >
        <Icon image={props.image} size={40} />
      </div>
      <div className={styles.heading}>{props.heading}</div>
      <div className={styles.subheading}>{props.subheading}</div>
    </div>
  );
}
