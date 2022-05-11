import Input from "../Input/Input";
import styles from "./AdminTab.module.css";
import moment from "moment";
import IconComponent from "../../assets/Icon/Icon";
import ImageComponent from "next/image";
import { USER_DETAILS } from "../../utils/constants";
import DesktopOnly from "../DeviceCheck/DesktopOnly";
import { useState } from "react";

export default function AdminTab({ tabsData, selectTab, selectedTab }) {
  const [visible, setVisible] = useState(false);

  return (
    <DesktopOnly>
      <div className={styles.base} style={{ backgroundColor: "#fafdec" }}>
        <div className={styles.leftSection}>
          <div className={styles.mentorBatchDetails}>Admin</div>
          <div className={styles.tabWrapper}>
            {tabsData.map((i, index) => (
              <div
                className={i.disable ? styles.disableTab : styles.tabs}
                key={index}
                onClick={i.disable ? null : () => selectTab(i)}
                style={{ backgroundColor: selectedTab == i.id && "#FCF5BF" }}
              >
                <div className={styles.tabIcon}>
                  <IconComponent name={i.icon} />
                </div>
                <div className={styles.tabName}>{i.tab}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.centerSection}
          style={{
            backgroundColor: "#fff"
          }}
        >
          <div className={styles.searchHeader}>
            {/* <div
              className={styles.lens}
              style={{
                backgroundColor: "#ebecec"
              }}
            >
              <IconComponent name={"lens"} color={"#3f4242"} />
            </div>
            <div className={styles.search}>
              <Input
                placeholder={"What Are you looking for?"}
                inputStyling={{
                  width: "100%",
                  fontSize: "13px",
                  backgroundColor: "#ebecec",
                  color: "#1b1c1c",
                  padding: "8px 15px"
                }}
              />
            </div> */}
            <div className={styles.dateSection}>{`${moment().format(
              "dddd"
            )}, ${moment().format("LL")}`}</div>
          </div>
          <div className={styles.childrenSection}>
            {tabsData[selectedTab - 1].component}
          </div>
        </div>
      </div>
    </DesktopOnly>
  );
}
