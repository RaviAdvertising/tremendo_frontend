import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import FaqsStrip from "../../components/FaqsStrip/FaqsStrip";
import ImageComponent from "../../components/Image/Image";
import styles from "../../styles/Faqs.module.css";
import { Image } from "semantic-ui-react";
import {
  COOKIE_TOKEN,
  USER_DETAILS,
  ASK_A_QUESTION
} from "../../utils/constants";
import Input from "../../components/Input/Input";
import { GlobalContext } from "../../Context/Provider";
import {
  addUserFaqs,
  getFaqs,
  getUserFaqs
} from "../../Context/Actions/Home/HomeAction";
import LanguageDetailSkelton from "../../components/Skelton/LanguageDetailSkelton";
import Cookies from "js-cookie";
import PageLoader from "../../components/Loader/PageLoader";
import { LOGIN_PATH } from "../../utils/routes";
import { useRouter } from "next/router";

export default function Faqs() {
  const [isOpen, setIsOpen] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [question, setQuestion] = useState("");
  const router = useRouter();
  const { homeState, homeDispatch: dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getFaqs()(dispatch);
  }, []);

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
  const onHandleChange = question => {
    setQuestion(question);
  };
  const imageUrl =
    typeof window !== "undefined" && localStorage.getItem(USER_DETAILS)
      ? JSON.parse(localStorage.getItem(USER_DETAILS)).profileUrl
      : `${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41`;

  const askAQuestion = async () => {
    if (Cookies.get(COOKIE_TOKEN)) {
      setOpenModal(true);
      await getUserFaqs()(dispatch);
    } else {
      localStorage.setItem(ASK_A_QUESTION, true);
      router.replace(LOGIN_PATH);
    }
  };
  const askUserQuestion = async () => {
    if (question != "") {
      const payload = {
        faq: question,
        access_token: Cookies.get(COOKIE_TOKEN)
      };

      await addUserFaqs(payload)(dispatch);
      await getUserFaqs()(dispatch);
    }
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Faqs</title>
        <meta name="description" content="Tremendo Faqs page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(homeState.addUserFaqLoading || homeState.getUserFaqLoading) && (
        <PageLoader />
      )}
      <div className={styles.banner}>
        <DesktopOnly>
          <ImageComponent
            src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2FfaqsBanner.png?alt=media&token=0ffff088-5418-42d9-a4d9-ff56e8da0460`}
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
        {homeState.getFaqsLoading ? (
          <LanguageDetailSkelton />
        ) : (
          <div className={styles.contentWrapper}>
            <div className={styles.header}>
              {header("FREQUENTLY ASKED QUESTIONS")}
            </div>
            <div className={styles.faqStripWrapper}>
              <div className={styles.strips}>
                {homeState.getFaqs.map((i, index) => (
                  <div key={index} className={styles.faqStrip}>
                    <FaqsStrip
                      clickOnBar={() => toggleBar(index)}
                      isOpen={isOpen}
                      id={index}
                      data={i}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.askButtonWrapper}>
                <div className={styles.askBtn}>
                  <Button
                    label={"Ask a question"}
                    height={55}
                    borderRadius={10}
                    backgroundColor={"#f78f1f"}
                    textStyle={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontFamily: " Open Sans",
                      fontSize: "24px"
                    }}
                    border="none"
                    onClick={() => askAQuestion()}
                  />
                </div>
                {openModal && (
                  <div>
                    <div className={styles.imageInputWrapper}>
                      <div className={styles.imageSection}>
                        <Image
                          src={imageUrl}
                          circular
                          alt="user-image"
                          height={"40px"}
                          width={"40px"}
                        />
                      </div>
                      <div className={styles.inputSection}>
                        <Input
                          placeholder="Write your question here."
                          inputStyling={{
                            backgroundColor: "#e9e8e6",
                            padding: "14px"
                          }}
                          handleChange={text => onHandleChange(text)}
                        />
                      </div>
                    </div>
                    <div className={styles.cancelAskWrapper}>
                      <div
                        className={styles.cancelBtn}
                        onClick={() => setOpenModal(false)}
                      >
                        Cancel
                      </div>
                      <div
                        className={styles.smallAskBtn}
                        onClick={() => askUserQuestion()}
                      >
                        Ask
                      </div>
                    </div>
                    {homeState.getUserFaq.length > 0 && (
                      <div className={styles.answerBox}>
                        {homeState.getUserFaq.map((i, index) => (
                          <div key={index} className={styles.faqStrip}>
                            <FaqsStrip
                              clickOnBar={() => toggleBar(i.updated_at)}
                              isOpen={isOpen}
                              id={i.updated_at}
                              data={i}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
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
