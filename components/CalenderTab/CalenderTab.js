import React, { useEffect } from "react";
import styles from "./CalenderTab.module.css";
import moment from "moment";
import { Icon, Dropdown } from "semantic-ui-react";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import Button from "../Button/Button";

export default function CalenderTab({}) {
  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );
  const currentDate = moment().format("D");
  const days = ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"];
  const currentDay = moment().day() ? moment().day() : 7;
  useEffect(() => {
    if (document.getElementById("currentDate")) {
      document.getElementById("currentDate").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, []);
  // if (true) {
  //   return <StudentDashboardSkelton />;
  // }
  const batched = [
    {
      text: "Batches - EG001",
      value: "Batches - EG001"
    },
    {
      text: "Batches - EG002",
      value: "Batches - EG002"
    },
    {
      text: "Batches - EG003",
      value: "Batches - EG003"
    },
    {
      text: "Batches - EG004",
      value: "Batches - EG004"
    }
  ];
  return (
    <div className={styles.base}>
      <div className={styles.batchSelect}>
        <Dropdown
          className={styles.batchedDropdown}
          fluid
          selection
          defaultValue={batched[0].value}
          options={batched}
        />
      </div>
      <div className={styles.dateMonthHeading}>
        <div className={styles.courseName}>Date</div>
        <div className={styles.batchName}>{moment().format("MMMM")}</div>
      </div>
      <div className={styles.datesWrapper}>
        {totalDatesInCurrentMonth.map(i => (
          <div
            className={styles.date}
            style={{ backgroundColor: currentDate == i + 1 && "#bff7ff" }}
            key={i}
            id={currentDate == i + 1 ? "currentDate" : "otherDate"}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className={styles.borderLineWrapper}>
        <div className={styles.detailHeadingWrapper}>
          <div className={styles.headingName}>Day</div>
          <div className={styles.headingName}>Batch</div>
          <div className={styles.headingName}>Time</div>
          <div className={styles.mentorHeading}>Mentor/Id</div>
          <div className={styles.joiningHeading}>Join</div>
        </div>
      </div>

      {days.map((i, index) => (
        <div className={styles.detailsWrapper} key={index}>
          <div className={styles.days}>{i}</div>
          <div className={styles.batchCode}>EG001</div>
          <div className={styles.batchCode}>02:00PM - 03:00PM</div>
          <div className={styles.mentorProfile}>Arun Gupta / 151-12</div>
          <div className={styles.joiningLink}>
            <div className={styles.clickedIcon}>
              <Icon name="chain" size="big" />
            </div>
            <div className={styles.clickedIcon}>
              <Icon name="trash alternate" size="big" color="red" />
            </div>
          </div>
        </div>
      ))}
      <div className={styles.createBtn}>
        <Button
          label={"Create new class"}
          height={40}
          borderRadius={8}
          backgroundColor={"#f98e46"}
          textStyle={{
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "Open Sans",
            fontSize: "18px"
          }}
          border="none"
          onClick={() => console.log("start")}
        />
      </div>
    </div>
  );
}
