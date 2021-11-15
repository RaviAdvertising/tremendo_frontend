import { Fragment } from "react";
import styles from "./CourseBox.module.css";
import Image from "next/image";
import { ReadMore } from "../ReadMore/ReadMore";

export default function CourseBox(props) {
  return (
    <div className={styles.base}>
      <div className={styles.imageWrapper}>
        <Image
          src={props.image}
          alt={props.langauge}
          height={"200px"}
          width={"270px"}
        />
        <div className={styles.price}>${props.price}</div>
        <div className={styles.offer}>
          <Image
            src={"/Images/offer.png"}
            alt={"offer"}
            width={"70px"}
            height={"70px"}
          />
        </div>
      </div>
      <div className={styles.language}>{props.language}</div>
      <div className={styles.description}>
        <ReadMore
          actionTextMore={"Read More..."}
          actionTextLess={"Show Less..."}
          color={"#fff"}
        >
          {props.description}
        </ReadMore>
      </div>
    </div>
  );
}
