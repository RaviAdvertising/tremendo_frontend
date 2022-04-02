import React, { useState } from "react";
import styles from "./AdminPages.module.css";
import { List, Popup, Icon, Rating } from "semantic-ui-react";
import Button from "../Button/Button";

export default function AdminPages({}) {
  const [selected, setSelected] = useState(2);
  const toggleSelectedOption = index => {
    setSelected(index);
  };
  return (
    <div className={styles.base}>
      <div className={styles.faqWrapper}>
        <div className={styles.heading}>FAQs</div>
        {[1, 2, 3, 4, 5, 6].map((faq, index) => (
          <div
            className={styles.faqStripWrapper}
            key={index}
            onClick={() => toggleSelectedOption(index)}
          >
            <div className={styles.stripIconWrapper}>
              <div
                className={styles.faqStrip}
                style={{ color: selected == index ? "#218dfa" : "#333333" }}
              >
                <span>{index + 1}.</span>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry?
                </span>
              </div>
              <div className={styles.faqStrip}>
                <Popup
                  trigger={<Icon name="ellipsis vertical" size="large" />}
                  flowing
                  hoverable
                  position="bottom right"
                  style={{ padding: "0px" }}
                >
                  <div className={styles.options}>Edit</div>
                  <div className={styles.options}>Delete</div>
                  <div className={styles.options}>Reply</div>
                </Popup>
              </div>
            </div>
            {selected == index && (
              <div className={styles.answerWrapper}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard.
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.reviewBlogWrapper}>
        <div className={styles.reviewWrapper}>
          <div className={styles.headingPaginationWrapper}>
            <div className={styles.heading}>Review</div>
            <div className={styles.paginationBox}>05</div>
          </div>
          {[1, 2, 3].map((i, index) => (
            <div className={styles.imageDetailsWrapper} key={index}>
              <div className={styles.imageSection}></div>
              <div className={styles.detailsWrapper}>
                <div className={styles.nameStarWrapper}>
                  <div className={styles.name}>Mas Yhanto</div>
                  <div className={styles.nameStarWrapper}>
                    <Rating
                      icon="star"
                      defaultRating={5}
                      maxRating={5}
                      size="medium"
                      disabled
                    />
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className={styles.nameStarWrapper}>
                  <div className={styles.nameStarWrapper}>
                    <List celled horizontal link>
                      <List.Item as="a">Reply</List.Item>
                      <List.Item as="a">Edit</List.Item>
                      <List.Item as="a">Delete</List.Item>
                    </List>
                  </div>
                  <div className={styles.likeThumb}>
                    <Icon name={"thumbs up"} size="small" color={"orange"} />
                    <span className={styles.likes}>120 Likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.blogWrapper}>
          <div className={styles.headingPaginationWrapper}>
            <div className={styles.heading}>Blogs</div>
            <div className={styles.paginationBox}>05</div>
          </div>
          {[1, 2, 3].map((j, index) => (
            <div className={styles.blogDetailImageWrapper} key={index}>
              <div className={styles.blogDetails}>
                <div className={styles.blogName}>What is Lorem Ipsum?</div>
                <div className={styles.blogDesc}>
                  Lorem Ipsum is simply dummy text
                </div>
                <div className={styles.BlogOption}>
                  <List celled horizontal link>
                    <List.Item as="a">Edit</List.Item>
                    <List.Item as="a">Delete</List.Item>
                  </List>
                </div>
              </div>
              <div className={styles.blogImage}></div>
            </div>
          ))}
          <div className={styles.newUploadBtn}>
            <Button
              label={"Upload new blog"}
              height={30}
              borderRadius={8}
              backgroundColor={"#f98e46"}
              textStyle={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Open Sans",
                fontSize: "12px"
              }}
              border="none"
              onClick={() => console.log("start")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
