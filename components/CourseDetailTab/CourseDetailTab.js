import styles from "./CourseDetailTab.module.css";
import moment from "moment";
import { Image } from "semantic-ui-react";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import { useEffect } from "react";

export default function CourseDetailTab() {
  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );
  const currentDate = moment().format("D");
  const days = ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"];
  const currentDay = moment().day();
  useEffect(() => {
    if (document.getElementById("date_wrapper") && currentDate > 11) {
      const scrollPixels = parseInt(currentDate) * 10;
      document.getElementById("date_wrapper").scrollLeft = scrollPixels;
    }
  }, []);
  // if (true) {
  //   return <StudentDashboardSkelton />;
  // }
  return (
    <div className={styles.base}>
      <div className={styles.courseName}>Course Name :</div>
      <div className={styles.batchName}>Student Batch No. :</div>
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
      <div className={styles.borderLineWrapper}>
        <div className={styles.emptySection}></div>
        <div className={styles.detailHeadingWrapper}>
          <div className={styles.headingName}>Batch</div>
          <div className={styles.headingName}>Time</div>
          <div className={styles.mentorHeading}>Mentor</div>
          <div className={styles.joiningHeading}>Joining link</div>
        </div>
      </div>
      <div className={styles.horizontalBorderLine}></div>
      {days.map((i, index) => (
        <div className={styles.courseDetailSection} key={index}>
          <div className={styles.dayBorderWrapper}>
            <div className={styles.days}>{i}</div>
            <div className={styles.border}></div>
          </div>
          <div className={styles.detailsWrapper}>
            <div className={styles.batchCode}>E2</div>
            <div className={styles.batchCode}>02:00PM - 03:00PM</div>
            <div className={styles.mentorProfile}>
              <div className={styles.profile}>
                <Image
                  src={"/Images/blank_profile.png"}
                  circular
                  alt="user-image"
                  height={"24px"}
                  width={"24px"}
                />
              </div>
              <div className={styles.name}>Mentor Name</div>
            </div>
            <div className={styles.joiningLink}>
              <Image src={"/Images/google_meet.png"} alt="user-image" />
            </div>
            {currentDay !== index + 1 && <div className={styles.overlay}></div>}
          </div>
        </div>
      ))}
    </div>
  );
}
