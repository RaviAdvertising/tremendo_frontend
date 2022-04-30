import Head from "next/head";
import FlagWrapper from "../components/FlagWrapper/FlagWrapper";
import ImageComponent from "../components/Image/Image";
import Trustfactor from "../components/Trustfactor/Trustfactor";
import WhyTremendo from "../components/WhyTremendo/WhyTremendo";
import styles from "../styles/Home.module.css";
import {
  DASHBOARD_PAGE_TYPE,
  language,
  popularCourses,
  promotionsContent,
  trustFactor,
  whyTremendo1,
  whyTremendo2
} from "../utils/constants";
import Image from "next/image";
import CourseBox from "../components/CourseBox/CourseBox";
import PromotionBox from "../components/PromotionBox/PromotionBox";
import HomeCarousal from "../components/Carousal/HomeCarousal";
import DesktopOnly from "../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../components/DeviceCheck/MobileOnly";
import { useContext, useEffect } from "react";
import { DeviceContext } from "./_app";
import Input from "../components/Input/Input";
import FlagWrapperSkelton from "../components/FlagWrapper/FlagWrapperSkelton";
import { GlobalContext } from "../Context/Provider";
import { getLanguages, getPageData } from "../Context/Actions/Home/HomeAction";
import Button from "../components/Button/Button";
import PageLoader from "../components/Loader/PageLoader";
import { subscribe, SUBSCRIBE_ERROR } from "../Context/Actions/Auth/AuthAction";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home({}) {
  const { isMobileView } = useContext(DeviceContext);
  const [username, setUsername] = useState("");
  const {
    homeState,
    homeDispatch: dispatch,
    authState,
    authDispatch: authDispatcher
  } = useContext(GlobalContext);

  useEffect(() => {
    if (homeState.pageData.length == 0)
      getPageData(DASHBOARD_PAGE_TYPE)(dispatch);
    if (homeState.getLanguage.length == 0) getLanguages()(dispatch);
  }, []);

  const subscribeBtn = async () => {
    if (username) {
      const response = await subscribe(username)(authDispatcher);

      if (response.type == SUBSCRIBE_ERROR) {
        toast.error(response.error.msg, {
          theme: "colored"
        });
      } else {
        toast.success(response.data.msg, {
          theme: "colored"
        });
      }
    }
  };

  const goToWhatsapp = () => {};

  return (
    <div>
      <Head>
        <title>Tremendo</title>
        <meta name="description" content="Tremendo Education website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {authState.logoutLoading && <PageLoader />}
      <div className={styles.bannerWaveWrapper}>
        <HomeCarousal data={homeState} />
        <div className={styles.waveShape}>
          <ImageComponent
            src={"/Images/wave_shape.png"}
            paddingBottom={"5%"}
            alt={"banner logo"}
          />
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      {homeState.getLangaugeLoading ? (
        <FlagWrapperSkelton />
      ) : (
        <div className={styles.flagWrapper}>
          <div className={styles.languageHeadingWrapper}>
            <div className={styles.borderLineStyling}></div>
            <div className={styles.languageHeading}>Languages</div>
            <div className={styles.borderLineStyling}></div>
          </div>
          <div className={styles.allFlags}>
            {homeState.getLanguage.map((i, index) => (
              <div key={index} className={styles.flag}>
                <FlagWrapper
                  language={i.title}
                  languageDescription={i.welcome_text}
                  flagSrc={i.flag_url}
                  languge_id={i.languge_id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className={styles.whyLearnLang}>
        <div className={styles.whyLearnHeadingWrapper}>
          <div className={styles.borderLineStyling}></div>
          <div className={styles.whyLearnHeading}>Why Learn A New Language</div>
          <div className={styles.borderLineStyling}></div>
        </div>
        <div className={styles.trustfactorWrapper}>
          {trustFactor.map((i, index) => (
            <div key={index} className={styles.trustfactor}>
              <Trustfactor {...i} />
            </div>
          ))}
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className={styles.whyTremendo}>
        <div className={styles.whyTremendoHeadingWrapper}>
          <div className={styles.borderLineStyling}></div>
          <div className={styles.whyTremendoHeading}>Why tremendo</div>
          <div className={styles.borderLineStyling}></div>
        </div>
        <DesktopOnly>
          <div className={styles.imageWhyWrapper}>
            <div className={styles.sections}>
              {whyTremendo1.map((i, index) => (
                <div key={index} className={styles.whyTremendoSection}>
                  <WhyTremendo {...i} />
                </div>
              ))}
            </div>
            <div className={styles.imgSections}>
              <Image
                src={"/Images/why_tremendo.png"}
                alt={""}
                width={"450px"}
                height={"200px"}
              />
            </div>
            <div className={styles.sections}>
              {whyTremendo2.map((i, index) => (
                <div key={index} className={styles.whyTremendoSection}>
                  <WhyTremendo {...i} />
                </div>
              ))}
            </div>
          </div>
        </DesktopOnly>
        <MobileOnly>
          {whyTremendo1.map((i, index) => (
            <div key={index} className={styles.whyTremendoSection}>
              <WhyTremendo {...i} />
            </div>
          ))}
          {whyTremendo2.map((i, index) => (
            <div key={index} className={styles.whyTremendoSection}>
              <WhyTremendo {...i} />
            </div>
          ))}
        </MobileOnly>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className={styles.popularCourses}>
        <div className={styles.popularCoursesHeadingWrapper}>
          <div className={styles.borderLineStyling}></div>
          <div className={styles.popularCoursesHeading}>Popular courses</div>
          <div className={styles.borderLineStyling}></div>
        </div>
        <div className={styles.courseBox}>
          {homeState.pageData.popular_courses?.map((i, index) => (
            <div key={index}>
              <CourseBox {...i} />
            </div>
          ))}
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className={styles.subscribe}>
        <ImageComponent
          src={"/Images/subscribe.png"}
          paddingBottom={isMobileView ? "30%" : "10%"}
          alt={"banner logo"}
        />
        <div className={styles.textBtnWrapper}>
          <div>
            Stay tuned with all the latest language updates around the world.
          </div>
          <div className={styles.subscribeInputBtnWrapper}>
            <div className={styles.subscribeInputWrapper}>
              <Input
                type="text"
                placeholder="Enter your email"
                inputStyling={{
                  height: isMobileView ? "30px" : "49px",
                  borderRadius: "43px",
                  padding: "0 50px 0 24px",
                  fontSize: isMobileView ? "10px" : "12px"
                }}
                handleChange={text => setUsername(text)}
              />
            </div>
            <div>
              <Button
                label={"SUBSCRIBE"}
                height={isMobileView ? 30 : 49}
                borderRadius={25}
                backgroundColor={"#212121"}
                textStyle={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                  fontSize: isMobileView ? "10px" : "12px"
                }}
                border="none"
                loading={authState.subscribeLoading}
                onClick={() => subscribeBtn()}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className={styles.learnAnyWhere}>
        <div className={styles.learnAnyWhereHeadingWrapper}>
          <div className={styles.borderLineStyling}></div>
          <div className={styles.learnAnyWhereHeading}>Learn from anywhere</div>
          <div className={styles.borderLineStyling}></div>
        </div>
        <div className={styles.learnAnyWhereSubheading}>
          Learn new languages with virtual learning and be an expert
        </div>
        <div className={styles.devicesImages}>
          <Image
            src={"/Images/devices.jpg"}
            alt={"devices"}
            width={"700px"}
            height={"300px"}
          />
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className={styles.promotions}>
        <div className={styles.boxesWrap}>
          {promotionsContent.map((i, index) => (
            <div key={index} className={styles.promoBox}>
              <PromotionBox {...i} />
            </div>
          ))}
        </div>
        <div>
          <ImageComponent
            src={"Images/learn_grow_lead.png"}
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <a
        href={
          isMobileView
            ? "https://api.whatsapp.com/send?phone=+917856892827"
            : "https://web.whatsapp.com/send?phone=+917856892827"
        }
        target={"_blank"}
        rel="noreferrer"
        className={styles.chat}
      >
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fchat.png?alt=media&token=0baf7742-8b87-4fe1-b8b9-178434568116"
          }
          alt={"chat icons"}
          width={isMobileView ? "40px" : "75px"}
          height={isMobileView ? "40px" : "70px"}
        />
      </a>
    </div>
  );
}

// export const getStaticProps = async context => {
//   const response = await axiosInstance.get("/getLanguages");
//   return {
//     props: { response }
//   };
// };
