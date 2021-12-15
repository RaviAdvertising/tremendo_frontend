import Image from "next/image";
import styles from "./FlagWrapper.module.css";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";
import { useRouter } from "next/router";
import { LANGUAGE_DETAIL } from "../../utils/routes";

export default function FlagWrapper(props) {
  const { isMobileView } = useContext(DeviceContext);
  const router = useRouter();
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
      <div
        className={styles.languageDescription}
        onClick={() => router.push(`${LANGUAGE_DETAIL}${props.language}`)}
      >
        {props.languageDescription}
      </div>
    </div>
  );
}
