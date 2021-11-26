import Image from "next/image";
import styles from "./FlagWrapper.module.css";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";

export default function FlagWrapper(props) {
  const { isMobileView } = useContext(DeviceContext);
  return (
    <div className={styles.base}>
      <div className={styles.flagImage}>
        <Image
          src={props.flagSrc}
          alt={props.language}
          width={isMobileView ? "70px" : "100px"}
          height={isMobileView ? "30px" : "50px"}
        />
      </div>
      <div className={styles.language}>{props.language}</div>
      <div className={styles.languageDescription}>
        {props.languageDescription}
      </div>
    </div>
  );
}
