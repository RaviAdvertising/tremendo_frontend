import Input from "../Input/Input";
import styles from "./Tab.module.css";
import moment from "moment";
import Icon from "../../assets/Icon/Icon";

export default function Tab({ tabsData }) {
  return (
    <div className={styles.base}>
      <div className={styles.leftSection}>
        <div className={styles.flagSection}>
          <Icon name="dashboardIcon" color="#ff9000" />
        </div>
        {tabsData.map((i, index) => (
          <div className={styles.tabs} key={index}>
            <div className={styles.tabIcon}>
              <Icon name={i.icon} color="#ff9000" />
            </div>
            <div className={styles.tabName}>{i.tab}</div>
          </div>
        ))}
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
        <div className={styles.childrenSection}>y</div>
      </div>
      <div className={styles.rightSection}>
        <Icon name="notification" color="#ff9000" />
      </div>
    </div>
  );
}
