import styles from "./WriteFormBox.module.css";
import { Rating, Image } from "semantic-ui-react";
import { USER_DETAILS } from "../../utils/constants";
import Input from "../Input/Input";
export default function WriteFormBox(props) {
  return (
    <div className={styles.writeReviewForm}>
      <div className={styles.profileImgAndDateWrapper}>
        <div className={styles.profileImg}>
          <Image
            src={
              JSON.parse(localStorage.getItem(USER_DETAILS)).profileUrl
                ? JSON.parse(localStorage.getItem(USER_DETAILS)).profileUrl
                : "/Images/blank_profile.png"
            }
            circular
            alt="user-image"
            height={"70px"}
            width={"70px"}
          />
        </div>
        <div className={styles.nameAndData}>
          <div className={styles.name}>Lorem Ipsum</div>
          <div className={styles.date}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        {!props.faqPage && (
          <div className={styles.rateStar}>
            <Rating
              icon="star"
              defaultRating={0}
              maxRating={5}
              size="massive"
              // onRate={(e, rate) => console.log(e, { rating, maxRating })}
            />
          </div>
        )}
        <div className={styles.border}></div>
        <div className={styles.inputBox}>
          <Input
            placeholder={"Describe your experience"}
            handleChange={text => props.onChangeValue(text)}
            inputStyling={{ width: "80%" }}
          />
        </div>
      </div>
      <div className={styles.ctaButtons}>
        <div className={styles.cancelCta} onClick={() => props.openBox()}>
          CANCEL
        </div>
        <div className={styles.postCta}>POST</div>
      </div>
    </div>
  );
}
