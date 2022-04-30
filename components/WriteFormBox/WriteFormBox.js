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
                : "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41"
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
              onRate={(e, rate) => props.onRating(rate)}
            />
          </div>
        )}
        <div className={styles.border}></div>
        <div className={styles.inputBox}>
          <Input
            placeholder={"Describe your experience"}
            handleChange={text => props.onChangeValue(text)}
            inputStyling={{ width: "80%", height: "30px" }}
          />
        </div>
      </div>
      <div className={styles.ctaButtons}>
        <div className={styles.cancelCta} onClick={() => props.openBox()}>
          CANCEL
        </div>
        <div className={styles.postCta} onClick={() => props.submitReview()}>
          POST
        </div>
      </div>
    </div>
  );
}
