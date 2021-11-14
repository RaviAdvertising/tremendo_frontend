import { Fragment } from "react";
import Icon from "../Icons/Icons";
import Image from "../Image/Image";
import styles from "./FlagWrapper.module.css";

export default function FlagWrapper(props) {
  return (
    <div className={styles.base}>
      <div className={styles.flagImage}>
        <Icon image={props.flagSrc} size={70} />
      </div>
      <div className={styles.language}>{props.language}</div>
      <div className={styles.languageDescription}>
        {props.languageDescription}
      </div>
    </div>
  );
}
