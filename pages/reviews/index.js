import Head from "next/head";
import Button from "../../components/Button/Button";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import ImageComponent from "../../components/Image/Image";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import styles from "../../styles/Review.module.css";
import { useState, useEffect, useContext } from "react";
import WriteFormBox from "../../components/WriteFormBox/WriteFormBox";
import {
  COOKIE_TOKEN,
  PREVIOUS_PATH,
  USER_DETAILS
} from "../../utils/constants";
import { useRouter } from "next/router";
import { LOGIN_PATH } from "../../utils/routes";
import {
  addReviewComments,
  getReviewData,
  getReviewDetails,
  setReviewData,
  setReviewLikeStatus
} from "../../Context/Actions/Home/HomeAction";
import { GlobalContext } from "../../Context/Provider";
import LanguageDetailSkelton from "../../components/Skelton/LanguageDetailSkelton";
import Cookies from "js-cookie";
import PageLoader from "../../components/Loader/PageLoader";
import { toast } from "react-toastify";

export default function Reviews() {
  const [writeReview, setWriteReview] = useState(false);
  const [isOpen, setIsOpen] = useState(null);
  const [fields, setFields] = useState({});
  const router = useRouter();
  const { homeState, homeDispatch: dispatch } = useContext(GlobalContext);
  const toggleBar = id => {
    if (localStorage.getItem(USER_DETAILS)) {
      if (isOpen == id) {
        setIsOpen(null);
      } else {
        setIsOpen(id);
      }
    } else {
      localStorage.setItem(PREVIOUS_PATH, router.pathname);
      router.push(LOGIN_PATH);
    }
  };
  useEffect(() => {
    getReviewData()(dispatch);
  }, []);

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
    if (localStorage.getItem(USER_DETAILS)) {
      setWriteReview(true);
    } else {
      localStorage.setItem(PREVIOUS_PATH, router.pathname);
      router.push(LOGIN_PATH);
    }
  };
  const onHandleChange = (type, text) => {
    setFields({ ...fields, [type]: text });
  };
  const clickOnThumb = async id => {
    if (localStorage.getItem(USER_DETAILS)) {
      const payload = {
        course_review_id: id,
        like_status: true,
        access_token: Cookies.get(COOKIE_TOKEN)
      };
      await setReviewLikeStatus(payload)(dispatch);
      getReviewData()(dispatch);
    } else {
      localStorage.setItem(PREVIOUS_PATH, router.pathname);
      router.push(LOGIN_PATH);
    }
  };
  const onSubmitReview = async () => {
    if (!fields.rating || !fields.review_desc) {
      toast.error("Please fill all details", {
        theme: "colored"
      });
    } else {
      const payload = {
        rating: fields.rating ? fields.rating : 3,
        review_desc: fields.review_desc,
        access_token: Cookies.get(COOKIE_TOKEN)
      };
      const response = await setReviewData(payload)(dispatch);
      toast.success(response.data.msg, {
        theme: "colored"
      });
      setIsOpen(null);
      getReviewData()(dispatch);
    }
  };
  const onSubmitComment = async reviewId => {
    if (!fields.comment) {
      toast.error("Please fill all details", {
        theme: "colored"
      });
    } else {
      const payload = {
        course_review_id: reviewId,
        comment: fields.comment,
        access_token: Cookies.get(COOKIE_TOKEN)
      };
      const response = await addReviewComments(payload)(dispatch);
      toast.success(response.data.msg, {
        theme: "colored"
      });
      setWriteReview(false);
    }
  };
  const readMoreReplies = async id => {
    await getReviewDetails(id)(dispatch);
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Faqs</title>
        <meta name="description" content="Tremendo Reviews page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(homeState.setReviewLoading ||
        homeState.reviewCommentLoading ||
        homeState.reviewDetailsLoading ||
        homeState.setReviewLikeLoading) && <PageLoader />}
      <div className={styles.banner}>
        <DesktopOnly>
          <ImageComponent
            src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2FReviewBanner.png?alt=media&token=271e5425-fe8f-42a3-99b3-70f783ab3b12`}
            paddingBottom={"21%"}
            alt={"banner logo"}
          />
        </DesktopOnly>
        <MobileOnly>
          <ImageComponent
            src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fabout_banner_mobile.png?alt=media&token=be8f7644-800d-41fd-bb84-44e199f49785`}
            paddingBottom={"65%"}
            alt={"banner logo"}
          />
        </MobileOnly>
      </div>
      <div className={styles.sections}>
        {homeState.reviewDataLoading ? (
          <LanguageDetailSkelton />
        ) : (
          <div className={styles.contentWrapper}>
            <div className={styles.header}>{header("REVIEW AND RATING")}</div>
            <div className={styles.faqStripWrapper}>
              {homeState.reviewData.map((i, index) => (
                <div key={index} className={styles.faqStrip}>
                  <ReviewBox
                    clickOnReply={() => toggleBar(i.course_review_id)}
                    isOpen={isOpen}
                    id={i.course_review_id}
                    clickOnLike={() => clickOnThumb(i.course_review_id)}
                    addComments={text => onHandleChange("comment", text)}
                    postComment={() => onSubmitComment(i.course_review_id)}
                    clickOnReadMore={() => readMoreReplies(i.course_review_id)}
                    thumbLike={i.like_status}
                    data={i}
                    comments={homeState.reviewDetails.comment}
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
                  onChangeValue={value => onHandleChange("review_desc", value)}
                  submitReview={() => onSubmitReview()}
                  onRating={rate =>
                    setFields({ ...fields, rating: rate.rating })
                  }
                />
              )}
            </div>
          </div>
        )}
        <div>
          <ImageComponent
            src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Flearn_grow_lead.png?alt=media&token=28f934e6-52ec-4783-a68b-aca27f4d2d3e`}
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
    </div>
  );
}
