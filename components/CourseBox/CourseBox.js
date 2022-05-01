import { Fragment } from "react";
import styles from "./CourseBox.module.css";
import Image from "next/image";
import { ReadMore } from "../ReadMore/ReadMore";
import { useRouter } from "next/router";
import { LANGUAGE_DETAIL } from "../../utils/routes";

export default function CourseBox(props) {
  const router = useRouter();

  const navigatePath = title => {
    let languageId = "ja";
    switch (title) {
      case "Japanese":
        languageId = "ja";
        break;
      case "Spanish":
        languageId = "es";
        break;
      case "German":
        languageId = "de";
        break;
      default:
        break;
    }
    return languageId;
  };
  return (
    <div className={styles.base}>
      <div
        className={styles.imageWrapper}
        onClick={() =>
          router.push(`${LANGUAGE_DETAIL}${navigatePath(props.title)}`)
        }
      >
        <Image
          src={props.image}
          alt={props.langauge}
          height={"200px"}
          width={"270px"}
        />
        <div className={styles.price}>${props.price}</div>
        <div className={styles.offer}>
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Foffer.png?alt=media&token=d17e6ba3-ed81-443c-8148-1812548f60d6"
            }
            alt={"offer"}
            width={"70px"}
            height={"70px"}
          />
        </div>
      </div>
      <div
        className={styles.language}
        onClick={() =>
          router.push(`${LANGUAGE_DETAIL}${navigatePath(props.title)}`)
        }
      >
        {props.title}
      </div>
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
