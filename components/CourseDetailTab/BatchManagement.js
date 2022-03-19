import { useEffect } from "react";
import moment from "moment";
import Button from "../Button/Button";
import styles from "./BatchManagement.module.css";

export default function BatchManagement() {
  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const currentDate = moment().format("D");
  const currentDay = moment().day() ? moment().day() : 7;

  useEffect(() => {
    if (document.getElementById("date_wrapper") && currentDate > 11) {
      const scrollPixels = parseInt(currentDate) * 10;
      document.getElementById("date_wrapper").scrollLeft = scrollPixels;
    }
  }, []);

  return (
    <div className={styles.base}>
      <div className={styles.chartHeading}>Batch List</div>
      <div className={styles.batchListWrapper}>
        <div className={styles.batchListHeader}>
          <div className={styles.headerOption}>Batch Name</div>
          <div className={styles.headerOption}>Total students</div>
          <div className={styles.headerOption}>Total Classes</div>
        </div>
        {[1, 2, 3].map(i => (
          <div className={styles.batchListBody} key={i}>
            <div className={styles.bodyOption}>Lorem Ipsum</div>
            <div className={styles.bodyOption}>15</div>
            <div className={styles.bodyOptionWithCheckBox}>
              <div>20</div>
              <div className={styles.completeCheckbox}>
                <label className={styles.completeContainer}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    onClick={event => console.log(event.target.checked)}
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.chartHeading}>Batch Details</div>
      <div className={styles.dateMonthHeading}>
        <div className={styles.courseName}>Date</div>
        <div className={styles.batchName}>{moment().format("MMM")}</div>
      </div>
      <div className={styles.datesWrapper} id="date_wrapper">
        {totalDatesInCurrentMonth.map(i => (
          <div
            className={styles.date}
            style={{ backgroundColor: currentDate == i + 1 && "#fa9116" }}
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>
      {days.map((i, index) => (
        <div className={styles.courseDetailSection} key={index}>
          <div
            className={styles.detailsWrapper}
            style={{
              backgroundColor: currentDay !== index + 1 ? "#f2efef" : "#25b1ae"
            }}
          >
            <div className={styles.batchCode}>{i}</div>
            <div className={styles.batchCode}>E2</div>
            <div className={styles.timeCode}>02:00PM - 03:00PM</div>
            <div className={styles.batchCode}>
              <Button
                label={"Get Started"}
                height={33}
                borderRadius={16}
                backgroundColor={
                  currentDay !== index + 1 ? "#e6e4e4" : "#51faf6"
                }
                textStyle={{
                  color: "#000",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                  fontSize: "15px"
                }}
                border="none"
                onClick={() => console.log("start")}
              />
            </div>
            {currentDay !== index + 1 && <div className={styles.overlay}></div>}
          </div>
        </div>
      ))}
    </div>
  );
}