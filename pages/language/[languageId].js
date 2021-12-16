import React from "react";
import styles from "../../styles/LanguageDetail.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import ImageComponent from "../../components/Image/Image";
import { USER_DETAILS } from "../../utils/constants";
import Image from "next/image";
import Button from "../../components/Button/Button";

export default function DetailLanguagePage({}) {
  const name =
    typeof window !== "undefined" && localStorage.getItem(USER_DETAILS)
      ? JSON.parse(localStorage.getItem(USER_DETAILS)).name
      : "";

  const header = headerName => {
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.borderLineStyling}></div>
        <div className={styles.headerHeading}>{headerName}</div>
        <div className={styles.borderLineStyling}></div>
      </div>
    );
  };
  const registerNow = () => {
    //
  };
  return (
    <div className={styles.base}>
      <div className={styles.topBannerWrapper}>
        <ImageComponent
          src={"/Images/lang_demo_banner.png"}
          paddingBottom={"21%"}
        />
        <div className={styles.profileName}>{`Hello ${name}`}</div>
      </div>
      <div className={styles.subBaseWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>{header("Japanese culture")}</div>
          <div className={styles.cultureDescription}>
            Japanese is the national and primary language of Japan and is
            written with a combination of three scripts: kanji, hiragana, and
            katakana. In Japan, Shinto and Buddhism are two major religions that
            are being followed. Shinto comes under old Japanese culture, while
            Buddhism was imported from the mainland in the 6th century. Japan is
            well known worldwide for all of its Shinto Shrines and Buddhist
            Temples. There are tens of thousands of them throughout the country
            and play an important part in Japanese culture and tradition
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.boxBase}>
              <div className={styles.boxImage}>
                <Image
                  alt=""
                  src={"/Images/why_japan.png"}
                  width={"330px"}
                  height={"245px"}
                />
              </div>
              <div className={styles.boxHeading}>Why learn japanese</div>
              <div className={styles.boxDescription}>
                Japan follows a culture that is totally different from ours.
                Learning Japanese can result in many benefits as it would help
                you gain broader perspectives, higher thinking skills, and new
                learning strategies that you can apply to your other academic
                subjects. Fluency in Japanese allows people to improve their
                communication and gain knowledge and higher understanding of
                Japan as a whole.<br></br>
                <br></br> Japanese investors are actively interested in
                automobile, electronics, semiconductor, shipbuilding, and
                optical media. Top career options after learning the Japanese
                language like job of translators and interpreters, Japanese
                trainers, Japanese teachers, jobs in Japanese Embassies, jobs in
                the aviation sector, jobs in travel and tourism, and IT Sector
                are just a step away from you.
              </div>
            </div>
            <div className={styles.boxBase}>
              <div className={styles.boxImage}>
                <Image
                  alt=""
                  src={"/Images/career_opt.png"}
                  width={"400px"}
                  height={"204px"}
                />
              </div>
              <div className={styles.boxHeading}>Career opportunity</div>
              <div className={styles.boxDescription}>
                Japanese culture is unique in its own way as it is a combination
                of traditional and modern practices. Roughly 127 million people
                speak Japanese in Japan and is the most popular choice among
                East Asian Languages. Due to complexity of the language, not
                everyone is able to learn this language leaving a higher package
                structure and growth rate in career opportunities like:
                Translator, Interpreter & Trainer. Japanese companies such as
                Honda, Yamaha, Sony, Toyota have manufacturing facilities in
                India which means more job opportunities for you if you are
                fluent in Japanese. With so many big Japanese companies
                investing in India, one can also move to Japan and for there
                full time for these companies.
              </div>
            </div>
          </div>
          <div>
            <div className={styles.header}>{header("UPCOMING batches")}</div>
            <div className={styles.upcomingBatchWrapper}>
              <div className={styles.upcomingBatch}>
                <div className={styles.batchCode}>JLPT 4</div>
                <div className={styles.batchLang}>(Japanese)</div>
                <div className={styles.batchTime}>weekend batch</div>
                <div>
                  <Button
                    label={"Register Now"}
                    height={55}
                    borderRadius={10}
                    backgroundColor={"#fbd7b0"}
                    textStyle={{
                      color: "#212121",
                      fontFamily: "Open Sans",
                      fontSize: "16px"
                    }}
                    border="none"
                    onClick={() => registerNow()}
                  />
                </div>
                <div className={styles.offPercentage}>
                  <div>SAVE</div>
                  <div>5%</div>
                </div>
              </div>
              <div className={styles.upcomingBatch}>
                <div className={styles.batchCode}>JLPT 4</div>
                <div className={styles.batchLang}>(Japanese)</div>
                <div className={styles.batchTime}>weekend batch</div>
                <div>
                  <Button
                    label={"Register Now"}
                    height={55}
                    borderRadius={10}
                    backgroundColor={"#fbd7b0"}
                    textStyle={{
                      color: "#212121",
                      fontFamily: "Open Sans",
                      fontSize: "16px"
                    }}
                    border="none"
                    onClick={() => registerNow()}
                  />
                </div>
                <div className={styles.offPercentage}>
                  <div>SAVE</div>
                  <div>5%</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.header}>{header("Batch details")}</div>
            <div>
              <StatusBar>
                <div className={styles.batchDetailsWrapper}>
                  <div className={styles.batchDetails}>
                    <div className={styles.batchNo}>BATCH: 01</div>
                    <div className={styles.batchTiming}>Weekday Morning</div>
                    <div className={styles.batchDays}>MON WED FRI</div>
                    <div className={styles.batchCodes}>JA</div>
                    <div className={styles.batchSeats}>
                      <div style={{ fontWeight: "bold", marginRight: "5px" }}>
                        2{" "}
                      </div>{" "}
                      SEATS LEFT{" "}
                      <div
                        style={{
                          transform: "rotate(-90deg)",
                          marginLeft: "10px"
                        }}
                      >
                        <Image
                          src={"/Images/down_arrow.png"}
                          alt=""
                          height={"20px"}
                          width={"20px"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.detailsWrapper}>
                    <div className={styles.dateClassWrapper}>
                      <div className={styles.startDateWrapper}>
                        <div className={styles.startDateHeading}>
                          Start Date :
                        </div>
                        <div className={styles.startDate}>12/10/2021</div>
                      </div>
                      <div className={styles.startDateWrapper}>
                        <div className={styles.startDateHeading}>
                          End Date :
                        </div>
                        <div className={styles.startDate}>12/10/2021</div>
                      </div>
                      <div className={styles.startDateWrapper}>
                        <div className={styles.startDateHeading}>
                          Total Classes :
                        </div>
                        <div className={styles.startDate}>12/10/2021</div>
                      </div>
                      <div className={styles.startDateWrapper}>
                        <div className={styles.startDateHeading}>
                          Exam Date :
                        </div>
                        <div className={styles.startDate}>12/10/2021</div>
                      </div>
                    </div>
                    <div className={styles.durationWrapper}>
                      <div>
                        <Image
                          src={"/Images/duration_rotate.png"}
                          alt=""
                          height={"30px"}
                          width={"30px"}
                        />
                      </div>
                      <div>
                        <span style={{ fontWeight: "bold" }}>
                          TOTAL DURATION:{" "}
                        </span>{" "}
                        <span>00 hours</span>
                      </div>
                    </div>
                    <div className={styles.timeWrapper}>
                      <div className={styles.startTimeWrapper}>
                        <div className={styles.startTimeHeading}>
                          Start Time :
                        </div>
                        <div className={styles.startTime}>12/10/2021</div>
                      </div>
                      <div className={styles.startTimeWrapper}>
                        <div className={styles.startTimeHeading}>
                          End Time :
                        </div>
                        <div className={styles.startTime}>12/10/2021</div>
                      </div>
                    </div>
                  </div>
                </div>
              </StatusBar>
            </div>
            <div>
              <StatusBar>
                <div className={styles.batchDetailsWrapper}>
                  <div className={styles.batchDetails}>
                    <div className={styles.batchNo}>BATCH: 01</div>
                    <div className={styles.batchTiming}>Weekday Morning</div>
                    <div className={styles.batchDays}>MON WED FRI</div>
                    <div className={styles.batchCodes}>JA</div>
                    <div className={styles.batchSeats}>
                      <div style={{ fontWeight: "bold", marginRight: "5px" }}>
                        2{" "}
                      </div>{" "}
                      SEATS LEFT{" "}
                      <div
                        style={{
                          transform: "rotate(-90deg)",
                          marginLeft: "10px"
                        }}
                      >
                        <Image
                          src={"/Images/down_arrow.png"}
                          alt=""
                          height={"20px"}
                          width={"20px"}
                        />
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </StatusBar>
            </div>
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
