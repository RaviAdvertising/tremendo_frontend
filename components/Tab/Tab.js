import Input from "../Input/Input";
import styles from "./Tab.module.css";
import moment from "moment";
import Icon from "../../assets/Icon/Icon";
import ImageComponent from "next/image";
import { Image } from "semantic-ui-react";
import { USER_DETAILS } from "../../utils/constants";
import CustomImage from "../Image/Image";

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
    // <div style={{ backgroundColor: "#fff6eb" }}>
    <div className={styles.base}>
      <div className={styles.leftSection}>
        <div className={styles.flagSection}>
          <ImageComponent
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/english_flag.png?alt=media&token=426f6879-24af-4182-a3e7-3cbc39f9622c"
            }
            alt={"flag"}
            width={"65px"}
            height={"35px"}
          />
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
                  fill={selectedTab == i.id}
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
          <div className={styles.lens}>
            <Icon name={"lens"} />
          </div>
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
          <div className={styles.dateSection}>{`${moment().format(
            "dddd"
          )}, ${moment().format("LL")}`}</div>
        </div>
        <div className={styles.childrenSection}>
          {tabsData[selectedTab - 1].component}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.topHeader}>
          <div className={styles.profileWrapper}>
            {/* <div className={styles.profileImage}>
              <Image
                src={imageUrl}
                circular
                alt="user-image"
                height={"36px"}
                width={"36px"}
              />
            </div> */}
            <div className={styles.profileName}>{`Hi, ${
              name.split(" ")[0]
            }`}</div>
          </div>
          <div className={styles.notification}>
            <Icon name="notification" color="#ff9000" />
          </div>
        </div>
        <div className={styles.upcomingTaskSection}>
          <div className={styles.upcomingTaskHeading}>Upcoming Task</div>
          <div className={styles.upcomingTaskBox}>
            {[1, 1, 1, 1].map((i, index) => (
              <div className={styles.taskWrapper} key={index}>
                <div className={styles.taskImage}></div>
                <div className={styles.taskDetail}>
                  <div className={styles.taskName}>Lorem Ipsum Lorem</div>
                  <div className={styles.taskTime}>Time & Date</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.letsTalkSection}>
          <div className={styles.upcomingTaskHeading}>Let’s Talk</div>
          <div className={styles.upcomingTaskBox}>
            <div className={styles.chatBoxWrapper}>
              <div className={styles.chatNameAndImgWrapper}>
                <div className={styles.userImg}>
                  <Image
                    src={"/Images/blank_profile.png"}
                    circular
                    alt="user-image"
                    height={"20px"}
                    width={"20px"}
                  />
                </div>
                <div className={styles.userName}>Mirza</div>
                <div className={styles.messageTime}>1 min</div>
              </div>
              <div className={styles.chatMessageBox}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className={styles.chatBoxWrapper}>
              <div className={styles.chatNameAndImgWrapper}>
                <div className={styles.userImg}>
                  <Image
                    src={"/Images/blank_profile.png"}
                    circular
                    alt="user-image"
                    height={"20px"}
                    width={"20px"}
                  />
                </div>
                <div className={styles.userName}>John</div>
                <div className={styles.messageTime}>1 min</div>
              </div>
              <div className={styles.chatMessageBox}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className={styles.chatBoxWrapper}>
              <div className={styles.chatNameAndImgWrapper}>
                <div className={styles.userImg}>
                  <Image
                    src={"/Images/blank_profile.png"}
                    circular
                    alt="user-image"
                    height={"20px"}
                    width={"20px"}
                  />
                </div>
                <div className={styles.userName}>Andrew</div>
                <div className={styles.messageTime}>1 min</div>
              </div>
              <div className={styles.chatMessageBox}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className={styles.chatInputWrapper}>
              <div className={styles.chatIcons}>
                <Icon name={"chatIcon"} />
              </div>
              <div className={styles.search}>
                <Input
                  placeholder={"Write a message"}
                  inputStyling={{
                    width: "100%",
                    fontSize: "10px",
                    backgroundColor: "#fafafa",
                    color: "#1b1c1c",
                    padding: "8px 15px"
                  }}
                />
              </div>
              <div className={styles.chatIcons}>
                <Icon name={"sendIcon"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.letsTalkSection}>
          <div className={styles.upcomingTaskHeading}>Batch Mates</div>
        </div>
      </div>
    </div>
    //   <div>
    //     <CustomImage
    //       src={"/Images/learn_grow_lead.png"}
    //       paddingBottom={"15%"}
    //       alt={"banner logo"}
    //     />
    //   </div>
    // </div>
  );
}
