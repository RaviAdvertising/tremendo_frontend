import styles from "./CourseDetailTab.module.css";
import moment from "moment";
import { Image } from "semantic-ui-react";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import { useEffect, useContext } from "react";
import { DeviceContext } from "../../pages/_app";
import { GlobalContext } from "../../Context/Provider";
import { getStudentCourseDetails } from "../../Context/Actions/Dashboard/DashboardAction";

export default function CourseDetailTab() {
  const { isMobileView } = useContext(DeviceContext);
  const {
    studentDashboardState,
    languageState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);

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
    if (languageState.setStudentSelectedLanguage?.batch_id) {
      getStudentCourseDetails(
        languageState.setStudentSelectedLanguage.batch_id
      )(dispatch);
    }
  }, [languageState.setStudentSelectedLanguage]);

  const goToLink = link => {
    const url = link.includes("https") ? link : `https://${link}`;
    window.open(url, "_blank");
  };

  if (studentDashboardState.getStudentCourseDetailsLoading) {
    return <StudentDashboardSkelton />;
  }
  const todays_class = studentDashboardState.getStudentCourseDetails?.class_details?.find(
    i =>
      moment(i.class_date).format("DD/MM/YYYY") ===
      moment().format("DD/MM/YYYY")
  );

  // if (
  //   studentDashboardState.getStudentCourseDetails?.class_details?.length == 0
  // ) {
  //   return (
  //     <div
  //       style={{
  //         height: isMobileView ? "300px" : "700px",
  //         width: isMobileView ? "300px" : "700px",
  //         margin: "auto"
  //       }}
  //     >
  //       <Image
  //         src=`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fno_data.png?alt=media&token=79834bd2-97fa-4f63-897f-fe9498236194"
  //         alt="tremendo dashboard banner"
  //         height={isMobileView ? "300px" : "800px"}
  //         width={isMobileView ? "300px" : "700px"}
  //         className={styles.banner}
  //       />
  //     </div>
  //   );
  // }
  const batch_data = studentDashboardState.getStudentCourseDetails?.batch_data;
  return (
    <div className={styles.base}>
      <div className={styles.courseName}>
        Course Name : {batch_data?.batch_language}
      </div>
      <div className={styles.courseName}>
        Student Batch No. : {batch_data?.batch_id}
      </div>
      <div className={styles.batchName}>
        Batch Level : {batch_data?.batch_level}
      </div>
      <div className={styles.dateMonthHeading}>
        <div className={styles.courseName}>Date</div>
        <div className={styles.batchName}>{moment().format("MMM")}</div>
      </div>
      <div className={styles.datesWrapper}>
        {totalDatesInCurrentMonth.map(i => (
          <div
            className={styles.date}
            style={{ backgroundColor: currentDate == i + 1 && "#fa9116" }}
            key={i}
            id={currentDate == i + 1 ? "currentDate" : "otherDate"}
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
            <div className={styles.batchCode}>{batch_data?.batch_id}</div>
            <div className={styles.batchCode}>
              {todays_class?.class_start_time
                ? `${todays_class?.class_start_time} - ${todays_class?.class_end_time}`
                : `${batch_data?.batch_start_time} - ${batch_data?.batch_end_time}`}
            </div>
            <div className={styles.mentorProfile}>
              <div className={styles.profile}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41`}
                  circular
                  alt="user-image"
                  height={"24px"}
                  width={"24px"}
                />
              </div>
              <div className={styles.name}>
                {todays_class?.batch_mentor
                  ? todays_class.batch_mentor
                  : batch_data?.batch_mentor}
              </div>
            </div>
            <div
              className={styles.joiningLink}
              onClick={() => goToLink(todays_class?.class_link)}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fgoogle_meet.png?alt=media&token=c0a905f7-90a6-4cc5-9377-2dc76aa1249b`}
                alt="user-image"
              />
            </div>
            {(currentDay !== index + 1 ||
              !todays_class ||
              (todays_class && Object.keys(todays_class)?.length == 0)) && (
              <div className={styles.overlay}></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
