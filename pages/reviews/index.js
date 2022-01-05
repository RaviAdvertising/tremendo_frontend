import Head from "next/head";
import Button from "../../components/Button/Button";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import ImageComponent from "../../components/Image/Image";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import styles from "../../styles/Review.module.css";
import { useState } from "react";
import WriteFormBox from "../../components/WriteFormBox/WriteFormBox";

export default function Reviews() {
  const [writeReview, setWriteReview] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const toggleBar = id => {
    if (isOpen == id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  const header = headerName => {
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.borderLineStyling}></div>
        <div className={styles.headerHeading}>{headerName}</div>
        <div className={styles.borderLineStyling}></div>
      </div>
    );
  };
  const openWriteReviewBox = () => {
    setWriteReview(true);
  };
  const onHandleChange = text => {
    //
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Faqs</title>
        <meta name="description" content="Tremendo Reviews page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.banner}>
        <DesktopOnly>
          <ImageComponent
            src={"/Images/ReviewBanner.png"}
            paddingBottom={"21%"}
            alt={"banner logo"}
          />
        </DesktopOnly>
        <MobileOnly>
          <ImageComponent
            src={"/Images/about_banner_mobile.png"}
            paddingBottom={"65%"}
            alt={"banner logo"}
          />
        </MobileOnly>
      </div>
      <div className={styles.sections}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>{header("REVIEW AND RATING")}</div>
          <div className={styles.faqStripWrapper}>
            {[1, 1].map((i, index) => (
              <div key={index} className={styles.faqStrip}>
                <ReviewBox
                  clickOnReply={() => toggleBar(index)}
                  isOpen={isOpen}
                  id={index}
                />
              </div>
            ))}
            <div className={styles.askBtn}>
              <Button
                label={"Write your review"}
                height={55}
                borderRadius={10}
                backgroundColor={"#f78f1f"}
                textStyle={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: " Open Sans",
                  fontSize: "16px"
                }}
                border="none"
                onClick={() => openWriteReviewBox()}
              />
            </div>
            {writeReview && (
              <WriteFormBox
                openBox={() => setWriteReview(false)}
                onChangeValue={value => onHandleChange(value)}
              />
            )}
          </div>
        </div>
        <div>
          <ImageComponent
            src={"/Images/learn_grow_lead.png"}
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
    </div>
  );
}
