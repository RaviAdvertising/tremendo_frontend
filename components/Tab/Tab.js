import Input from "../Input/Input";
import styles from "./Tab.module.css";
import moment from "moment";
import Icon from "../../assets/Icon/Icon";
import ImageComponent from "next/image";
import { Image } from "semantic-ui-react";
import { USER_DETAILS } from "../../utils/constants";

export default function Tab({ tabsData, selectTab, selectedTab }) {
  const SELECTED_TAB_COLOR = "#ff9000";
  const imageUrl =
    typeof window !== "undefined" && localStorage.getItem(USER_DETAILS)
      ? JSON.parse(localStorage.getItem(USER_DETAILS)).profileUrl
      : "/Images/blank_profile.png";
  const name =
    typeof window !== "undefined" && localStorage.getItem(USER_DETAILS)
      ? JSON.parse(localStorage.getItem(USER_DETAILS)).name
      : "User";
  return (
    <div className={styles.base}>
      <div className={styles.leftSection}>
        <div className={styles.flagSection}>
          <Icon name="dashboardIcon" color="#ff9000" />
        </div>
        <div className={styles.tabWrapper}>
          {tabsData.map((i, index) => (
            <div
              className={styles.tabs}
              key={index}
              onClick={() => selectTab(i)}
              style={{ backgroundColor: selectedTab == i.id && "#fbeedf" }}
            >
              <div className={styles.tabIcon}>
                <Icon
                  name={i.icon}
                  color={selectedTab == i.id ? SELECTED_TAB_COLOR : "#2a2a2a"}
                />
              </div>
              <div className={styles.tabName}>{i.tab}</div>
            </div>
          ))}
        </div>
        <div className={styles.footerBanner}>
          <div className={styles.footerText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className={styles.footerImg}>
            <ImageComponent
              src={"/Images/tabFooterImage.png"}
              alt="tremendo footer image dashboard"
              width={"165px"}
              height={"128px"}
            />
          </div>
        </div>
      </div>
      <div className={styles.centerSection}>
        <div className={styles.searchHeader}>
          <div className={styles.search}>
            <Input
              placeholder={"What Are you looking for?"}
              inputStyling={{
                width: "100%",
                fontSize: "13px",
                backgroundColor: "#ecf8f8",
                color: "#1b1c1c",
                padding: "8px 15px"
              }}
            />
          </div>
          <div className={styles.dateSection}>{moment().format("LLLL")}</div>
        </div>
        <div className={styles.childrenSection}>
          {tabsData[selectedTab - 1].component}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.topHeader}>
          <div className={styles.profileWrapper}>
            <div className={styles.profileImage}>
              <Image
                src={imageUrl}
                circular
                alt="user-image"
                height={"36px"}
                width={"36px"}
              />
            </div>
            <div className={styles.profileName}>{name.split(" ")[0]}</div>
          </div>
          <div className={styles.notification}>
            <Icon name="notification" color="#ff9000" />
          </div>
        </div>
      </div>
    </div>
  );
}
