import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/LanguageDetail.module.css";
import StatusBar from "../../components/StatusBar/StatusBar";
import ImageComponent from "../../components/Image/Image";
import {
  COOKIE_TOKEN,
  ORDER_DETAIL,
  USER_DETAILS
} from "../../utils/constants";
import Image from "next/image";
import Button from "../../components/Button/Button";
import { useRouter } from "next/router";
import { GlobalContext } from "../../Context/Provider";
import { getLangaugeDetails } from "../../Context/Actions/Language/LanguageAction";
import LanguageDetailSkelton from "../../components/Skelton/LanguageDetailSkelton";
import { LOGIN_PATH, PAYMENT_PATH } from "../../utils/routes";
import Cookies from "js-cookie";
import { DeviceContext } from "../_app";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";

export default function DetailLanguagePage({}) {
  const [openTab, setOpenTab] = useState(null);
  const { isMobileView } = useContext(DeviceContext);
  const router = useRouter();
  const { languageState, languageDispatch: dispatch } = useContext(
    GlobalContext
  );

  const currentLanguagePage = router.query.languageId;
  useEffect(() => {
    getLangaugeDetails(currentLanguagePage)(dispatch);
  }, [currentLanguagePage]);

  const name =
    typeof window !== "undefined" && localStorage.getItem(USER_DETAILS)
      ? JSON.parse(localStorage.getItem(USER_DETAILS)).name
      : "";
  const openDetailSection = code => {
    if (openTab == code) {
      setOpenTab(null);
    } else {
      setOpenTab(code);
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
  const enrollNow = batchID => {
    if (Cookies.get(COOKIE_TOKEN)) {
      router.replace(`${PAYMENT_PATH}?id=${batchID}`);
    } else {
      localStorage.setItem(ORDER_DETAIL, batchID);
      router.replace(`${LOGIN_PATH}`);
    }
  };
  const details = languageState.getLanguageDetails;

  return (
    <div className={styles.base}>
      <div className={styles.topBannerWrapper}>
        <ImageComponent
          src={isMobileView ? details.banner_small : details.banner_large}
          paddingBottom={isMobileView ? "58%" : "21%"}
        />
        {details.welcome_text && (
          <div className={styles.profileName}>{details.welcome_text} </div>
        )}
      </div>
      <div
        className={styles.subBaseWrapper}
        style={{ backgroundColor: details.bg_color }}
      >
        {languageState.getLangaugeDetailsLoading ? (
          <LanguageDetailSkelton />
        ) : (
          <div className={styles.contentWrapper}>
            <div className={styles.header}>
              {header(details.culture?.title)}
            </div>
            <div className={styles.cultureDescription}>
              {details.culture?.description}
            </div>
            <div className={styles.boxWrapper}>
              {details.culture?.banners.map((i, index) => (
                <div
                  className={styles.boxBase}
                  style={{ backgroundColor: i.bg_color }}
                  key={index}
                >
                  <div className={styles.boxImage}>
                    <Image
                      alt=""
                      src={i.image_url}
                      width={index == 0 ? "330px" : "400px"}
                      height={index == 0 ? "245px" : "204px"}
                    />
                  </div>
                  <div
                    className={styles.boxHeading}
                    style={{ color: i.text_color }}
                  >
                    {i.title}
                  </div>
                  <div
                    className={styles.boxDescription}
                    style={{ color: i.text_color }}
                  >
                    {i.description}
                  </div>
                </div>
              ))}
            </div>
            {/* {details.upcoming_batches?.banners.length !== 0 && (
              <div>
                <div className={styles.header}>
                  {header(details.upcoming_batches?.title)}
                </div>
                <div className={styles.upcomingBatchWrapper}>
                  {details.upcoming_batches?.banners.map((i, index) => (
                    <div className={styles.upcomingBatch} key={index}>
                      <div className={styles.batchCode}>{i.title}</div>
                      <div className={styles.batchTime}>{i.description}</div>
                      <div>
                        <Button
                          label={i.cta_title}
                          height={55}
                          borderRadius={10}
                          backgroundColor={i.cta_color}
                          textStyle={{
                            color: i.cta_text_color,
                            fontFamily: "Open Sans",
                            fontSize: "16px"
                          }}
                          border="none"
                          onClick={() => registerNow()}
                        />
                      </div>
                      <div className={styles.offPercentage}>
                        <div>SAVE</div>
                        <div>{i.discount_percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
            <div>
              <div className={styles.header}>
                {header(details.batch_details?.title)}
              </div>
              {details.batch_details?.bathches.map((i, index) => (
                <div key={index}>
                  <StatusBar>
                    <div className={styles.batchDetailsWrapper}>
                      <div
                        className={styles.batchDetails}
                        onClick={() => openDetailSection(i.batch_id)}
                      >
                        <div className={styles.batchNo}>Batch {index + 1}</div>
                        <div className={styles.batchTiming}>
                          {i.batch_week_type}
                        </div>
                        {/* <div className={styles.batchDays}>
                          {i.days?.map(i => i).join("  ")}
                        </div> */}
                        <div className={styles.batchDays}>{i.batch_level}</div>
                        <div className={styles.batchCodes}>{i.batch_id}</div>
                        <div className={styles.batchSeats}>
                          <div
                            style={{ fontWeight: "bold", marginRight: "5px" }}
                          >
                            {i.batch_capcity}{" "}
                          </div>{" "}
                          SEATS LEFT{" "}
                          <div
                            style={{
                              transform:
                                openTab != i.batch_id && "rotate(-90deg)",
                              marginLeft: "10px"
                            }}
                          >
                            <Image
                              src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fdown_arrow.png?alt=media&token=27bec4b4-58cf-498c-8d2c-df6381e223fc`}
                              alt=""
                              height={"20px"}
                              width={"20px"}
                            />
                          </div>
                        </div>
                      </div>
                      {openTab == i.batch_id && (
                        <>
                          <DesktopOnly>
                            <div className={styles.detailsWrapper}>
                              <div className={styles.dateClassWrapper}>
                                <div className={styles.startDateWrapper}>
                                  <div className={styles.startDateHeading}>
                                    Start Date :
                                  </div>
                                  <div className={styles.startDate}>
                                    {i.batch_starting_date}
                                  </div>
                                </div>
                                <div className={styles.startDateWrapper}>
                                  <div className={styles.startDateHeading}>
                                    End Date :
                                  </div>
                                  <div className={styles.startDate}>
                                    {i.batch_end_date}
                                  </div>
                                </div>
                                <div className={styles.startDateWrapper}>
                                  <div className={styles.startDateHeading}>
                                    Total Classes :
                                  </div>
                                  <div className={styles.startDate}>
                                    {i.batch_total_classes}
                                  </div>
                                </div>
                                <div className={styles.startDateWrapper}>
                                  <div className={styles.startDateHeading}>
                                    Exam Date :
                                  </div>
                                  <div className={styles.startDate}>
                                    {i.batch_end_date}
                                  </div>
                                </div>
                              </div>
                              <div className={styles.durationWrapper}>
                                <div>
                                  <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fduration_rotate.png?alt=media&token=7fb632e3-b896-403c-bceb-e686cb698bf5`}
                                    alt=""
                                    height={"30px"}
                                    width={"30px"}
                                  />
                                </div>
                                <div className={styles.duration}>
                                  <span style={{ fontWeight: "bold" }}>
                                    TOTAL DURATION:{" "}
                                  </span>{" "}
                                  <span>{i.batch_total_time}</span>
                                </div>
                              </div>
                              <div className={styles.timeWrapper}>
                                <div className={styles.startTimeWrapper}>
                                  <div className={styles.startTimeHeading}>
                                    Start Time :
                                  </div>
                                  <div className={styles.startTime}>
                                    {i.batch_start_time}
                                  </div>
                                </div>
                                <div className={styles.startTimeWrapper}>
                                  <div className={styles.startTimeHeading}>
                                    End Time :
                                  </div>
                                  <div className={styles.startTime}>
                                    {i.batch_end_time}
                                  </div>
                                </div>
                                <div className={styles.priceWrapper}>
                                  <div className={styles.priceHeading}>
                                    Price :
                                  </div>
                                  <div className={styles.price}>
                                    <strike>
                                      &#x20b9;
                                      {i.batch_original_price}
                                    </strike>{" "}
                                    &#x20b9;
                                    {i.batch_purchase_price}
                                  </div>
                                </div>

                                <div className={styles.enrollNowBtn}>
                                  <Button
                                    label={"Enroll Now"}
                                    height={35}
                                    borderRadius={5}
                                    backgroundColor={"#f78f1e"}
                                    textStyle={{
                                      color: "#fff",
                                      fontFamily: "Open Sans",
                                      fontSize: isMobileView ? "10px" : "16px",
                                      fontWeight: "bold"
                                    }}
                                    border="none"
                                    onClick={() => enrollNow(i.batch_id)}
                                  />
                                </div>
                              </div>
                            </div>
                          </DesktopOnly>
                          <MobileOnly>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <div
                                className={styles.startDateHeading}
                                style={{ width: "85%" }}
                              >
                                Start Date : {i.batch_starting_date}
                              </div>
                              <div className={styles.startDateHeading}>
                                End Date : {i.batch_end_date}
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <div
                                className={styles.startDateHeading}
                                style={{ width: "85%" }}
                              >
                                Total Classes : {i.batch_total_classes}
                              </div>
                              <div className={styles.startDateHeading}>
                                Exam Date : {i.final_test_date}
                              </div>
                            </div>

                            <div style={{ textAlign: "center" }}>
                              TOTAL DURATION: {i.batch_total_time}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <div
                                className={styles.startDateHeading}
                                style={{ width: "85%" }}
                              >
                                Start Time : {i.batch_start_time}
                              </div>
                              <div className={styles.startDateHeading}>
                                End Time : {i.batch_end_time}
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <div className={styles.startDateHeading}>
                                Price : &#x20b9;{i.batch_purchase_price}
                              </div>

                              <div className={styles.enrollNowBtn}>
                                <Button
                                  label={"Enroll Now"}
                                  height={35}
                                  borderRadius={5}
                                  backgroundColor={"#f78f1e"}
                                  textStyle={{
                                    color: "#fff",
                                    fontFamily: "Open Sans",
                                    fontSize: isMobileView ? "10px" : "16px",
                                    fontWeight: "bold"
                                  }}
                                  border="none"
                                  onClick={() => enrollNow(i.batch_id)}
                                />
                              </div>
                            </div>
                          </MobileOnly>
                        </>
                      )}
                    </div>
                  </StatusBar>
                </div>
              ))}
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
