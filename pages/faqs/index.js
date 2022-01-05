import Head from "next/head";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import FaqsStrip from "../../components/FaqsStrip/FaqsStrip";
import ImageComponent from "../../components/Image/Image";
import styles from "../../styles/Faqs.module.css";
import { Modal } from "semantic-ui-react";
import WriteFormBox from "../../components/WriteFormBox/WriteFormBox";

export default function Faqs() {
  const [isOpen, setIsOpen] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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
  const onHandleChange = () => {
    //
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Faqs</title>
        <meta name="description" content="Tremendo Faqs page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.banner}>
        <DesktopOnly>
          <ImageComponent
            src={"/Images/aboutus_banner.png"}
            paddingBottom={"35%"}
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
          <div className={styles.header}>
            {header("FREQUNTLY ASKED QUESTIONS")}
          </div>
          <div className={styles.faqStripWrapper}>
            {[1, 1, 1, 1, 1, 1].map((i, index) => (
              <div key={index} className={styles.faqStrip}>
                <FaqsStrip
                  clickOnBar={() => toggleBar(index)}
                  isOpen={isOpen}
                  id={index}
                />
              </div>
            ))}
            <Modal
              closeIcon
              open={openModal}
              trigger={
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
                    //onClick={() => askAQuestion()}
                  />
                </div>
              }
              onClose={() => setOpenModal(false)}
              onOpen={() => setOpenModal(true)}
            >
              <Modal.Content>
                <WriteFormBox
                  faqPage
                  openBox={() => setOpenModal(false)}
                  onChangeValue={value => onHandleChange(value)}
                />
              </Modal.Content>
            </Modal>
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
