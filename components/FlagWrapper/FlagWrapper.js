import { Fragment } from "react";
import Icon from "../Icons/Icons";
import Image from "next/image";
import styles from "./FlagWrapper.module.css";

export default function FlagWrapper(props) {
  return (
    <div className={styles.base}>
      <div className={styles.flagImage}>
        <Image
          src={`/Images/${props.flagSrc}`}
          alt={"flags"}
          width={"100px"}
          height={"50px"}
        />
      </div>
      <div className={styles.language}>{props.language}</div>
      <div className={styles.languageDescription}>
        {props.languageDescription}
      </div>
    </div>
  );
}
