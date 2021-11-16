import Head from "next/head";
import FlagWrapper from "../components/FlagWrapper/FlagWrapper";
import ImageComponent from "../components/Image/Image";
import Trustfactor from "../components/Trustfactor/Trustfactor";
import WhyTremendo from "../components/WhyTremendo/WhyTremendo";
import styles from "../styles/Home.module.css";
import {
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tremendo</title>
        <meta name="description" content="Tremendo Education website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bannerWaveWrapper}>
        <HomeCarousal />
        <div className={styles.waveShape}>
          <ImageComponent
            src={"Images/wave_shape.png"}
            paddingBottom={"5%"}
            alt={"banner logo"}
          />
        </div>
      </div>

      <div className={styles.flagWrapper}>
        <div className={styles.languageHeadingWrapper}>
          <div className={styles.borderLineStyling}></div>
          <div className={styles.languageHeading}>Languages</div>
          <div className={styles.borderLineStyling}></div>
        </div>
        <div className={styles.allFlags}>
          {language.map((i, index) => (
            <div key={index} className={styles.flag}>
              <FlagWrapper
                language={i.name}
                languageDescription={i.subtext}
                flagSrc={i.flag}
              />
            </div>
          ))}
        </div>
      </div>

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

      <div className={styles.whyTremendo}>
        <div className={styles.whyTremendoHeadingWrapper}>
          <div className={styles.borderLineStyling}></div>
          <div className={styles.whyTremendoHeading}>Why tremendo</div>
          <div className={styles.borderLineStyling}></div>
        </div>
        <div className={styles.imageWhyWrapper}>
          <div className={styles.sections}>
            {whyTremendo1.map((i, index) => (
              <div key={index} className={styles.whyTremendoSection}>
                <WhyTremendo {...i} />
              </div>
            ))}
          </div>
          <div className={styles.imgSections}>
            <ImageComponent
              src={"/Images/why_tremendo.png"}
              alt={""}
              paddingBottom={"20%"}
              // width={"450px"}
              // height={"200px"}
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
      </div>

      <div className={styles.popularCourses}>
        <div className={styles.popularCoursesHeadingWrapper}>
          <div className={styles.borderLineStyling}></div>
          <div className={styles.popularCoursesHeading}>Popular courses</div>
          <div className={styles.borderLineStyling}></div>
        </div>
        <div className={styles.courseBox}>
          {popularCourses.map((i, index) => (
            <div key={index}>
              <CourseBox {...i} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.subscribe}>
        <ImageComponent
          src={"Images/subscribe.png"}
          paddingBottom={"10%"}
          alt={"banner logo"}
        />
        <div className={styles.textBtnWrapper}>
          <div>
            Stay tuned with all the latest language updates around the world.
          </div>
          <div className={styles.subscribeInputBtnWrapper}>
            <div className={styles.subscribeInputWrapper}>
              <input
                placeholder="Enter your email"
                className={styles.subscribeInput}
              />
            </div>
            <div>
              <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

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

      <div className={styles.chat}>
        <Image
          src={"/Images/chat.png"}
          alt={"chat icons"}
          width={"70px"}
          height={"70px"}
        />
      </div>
    </div>
  );
}
