import styles from "./ReviewBox.module.css";
import { Rating, Icon, Image } from "semantic-ui-react";
import Button from "../Button/Button";
import { USER_DETAILS } from "../../utils/constants";
import Input from "../Input/Input";
import moment from "moment";

export default function ReviewBox(props) {
  const imageUrl =
    typeof window !== "undefined" && localStorage.getItem(USER_DETAILS)
      ? JSON.parse(localStorage.getItem(USER_DETAILS)).profileUrl
      : "/Images/blank_profile.png";
  const data = props.data;
  return (
    <div className={styles.base}>
      <div className={styles.ratingAndNameWrapper}>
        <div className={styles.profileImgAndDateWrapper}>
          <div className={styles.profileImg}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/user.png?alt=media&token=91b2da16-b278-4eb6-a1cc-90ecfe2c1b55"
              circular
              alt="user-image"
              height={"70px"}
              width={"70px"}
            />
          </div>
          <div className={styles.nameAndData}>
            <div className={styles.name}>{data.user_name}</div>
            <div className={styles.date}>
              {moment(data.created_at).format("DD MMM YYYY")}
            </div>
          </div>
        </div>
        <div>
          <Rating
            icon="star"
            defaultRating={data.rating}
            maxRating={5}
            size="huge"
            disabled
          />
        </div>
      </div>
      <div className={styles.reviewDescription}>{data.review_desc}</div>
      <div className={styles.readMoreAndThumbWrapper}>
        <div
          className={styles.readMore}
          onClick={() => props.clickOnReadMore()}
        >
          Read More »
        </div>
        <div className={styles.thumbAndButtonWrapper}>
          <div onClick={() => props.clickOnLike()} className={styles.thumb}>
            <Icon
              name={props.thumbLike ? "thumbs up" : "thumbs up outline"}
              size="big"
              color={props.thumbLike && "blue"}
            />
          </div>
          {/* {props.isOpen != props.id && (
            <div>
              <Button
                label={"Reply"}
                height={35}
                borderRadius={10}
                backgroundColor={"#f78f1f"}
                textStyle={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                  fontSize: "16px"
                }}
                border="none"
                onClick={() => props.clickOnReply()}
              />
            </div>
          )} */}
        </div>
      </div>
      {props.comments && props.comments.course_review_id == props.id && (
        <div className={styles.ownImageAndNameWrapper}>
          <div className={styles.profileImg}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/user.png?alt=media&token=91b2da16-b278-4eb6-a1cc-90ecfe2c1b55"
              circular
              alt="user-image"
              height={"30px"}
              width={"30px"}
            />
          </div>
          <div className={styles.ownName}>{props.comments.user_name}</div>
          <div className={styles.owndescription}>{props.comments.comment}</div>
        </div>
      )}
      {props.isOpen == props.id && (
        <div className={styles.replyBox}>
          <div className={styles.ownImageAndNameWrapper}>
            <div className={styles.profileImg}>
              <Image
                src={imageUrl}
                circular
                alt="user-image"
                height={"50px"}
                width={"50px"}
              />
            </div>
            <div className={styles.ownName}>
              {JSON.parse(localStorage.getItem(USER_DETAILS)).name}
            </div>
            <div className={styles.owndescription}>
              Lorem ipsum dolor sit amet
            </div>
          </div>
          <div className={styles.border}></div>
          <div className={styles.inputPostWrapper}>
            <div className={styles.input}>
              <Input
                placeholder={"Comments..."}
                handleChange={text => props.addComments(text)}
                inputStyling={{ width: "100%", fontSize: "18px" }}
              />
            </div>
            <div className={styles.postCta} onClick={() => props.postComment()}>
              Post
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
