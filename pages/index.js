import Head from "next/head";
import FlagWrapper from "../components/FlagWrapper/FlagWrapper";
import ImageComponent from "../components/Image/Image";
import Trustfactor from "../components/Trustfactor/Trustfactor";
import WhyTremendo from "../components/WhyTremendo/WhyTremendo";
import styles from "../styles/Home.module.css";
import {
  language,
  trustFactor,
  whyTremendo1,
  whyTremendo2
} from "../utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tremendo</title>
        <meta name="description" content="Tremendo Education website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageComponent
        src={"Images/banner.png"}
        paddingBottom={"32%"}
        alt={"banner logo"}
      />

      <div className={styles.flagWrapper}>
        <div className={styles.languageHeading}>
          <div className={styles.stylingLines}></div>
          <div>Languages</div>
          <div className={styles.stylingLines}></div>
        </div>
        <div className={styles.allFlags}>
          {language.map((i, index) => (
            <div key={index} className={styles.flag}>
              <FlagWrapper
                language={i.name}
                languageDescription={i.name}
                flagSrc={"Images/china_flag.png"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.whyLearnLang}>
        <div className={styles.whyLearnHeading}>Why Learn A New Language</div>
        <div className={styles.trustfactorWrapper}>
          {trustFactor.map((i, index) => (
            <div key={index} className={styles.trustfactor}>
              <Trustfactor {...i} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.whyTremendo}>
        <div className={styles.whyTremendoHeading}>Why tremendo</div>
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
              width={"200px"}
              height={"180px"}
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
    </div>
  );
}
