import { Image } from "semantic-ui-react";
import Icon from "../../assets/Icon/Icon";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from "./Dashboard.module.css";
import StudentDashboardSkelton from "./StudentDashboardSkelton";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/Provider";
import { getStudentDashboardData } from "../../Context/Actions/Dashboard/DashboardAction";
import { DeviceContext } from "../../pages/_app";
import moment from "moment";

export default function Dashboard() {
  const {
    studentDashboardState,
    languageState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const { isMobileView } = useContext(DeviceContext);

  useEffect(() => {
    if (languageState.setStudentSelectedLanguage?.batch_id)
      getStudentDashboardData(
        languageState.setStudentSelectedLanguage.batch_id
      )(dispatch);
  }, [languageState.setStudentSelectedLanguage]);

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Student",
          color: "#7b7b7b",
          font: {
            family: "Poppins",
            size: 14,
            weight: "bold"
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        title: {
          display: true,
          text: "Score",
          color: "#7b7b7b",
          font: {
            family: "Poppins",
            size: 14,
            weight: "bold"
          }
        },
        beginAtZero: true,
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const pieChartOption = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  if (studentDashboardState.getStudentDashboardDataLoading) {
    return <StudentDashboardSkelton />;
  }
  // if (studentDashboardState.getStudentDashboardData?.classes?.length == 0) {
  //   return (
  //     <div
  //       style={{
  //         height: isMobileView ? "300px" : "700px",
  //         width: isMobileView ? "300px" : "700px",
  //         margin: "auto"
  //       }}
  //     >
  //       <Image
  //         src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fno_data.png?alt=media&token=79834bd2-97fa-4f63-897f-fe9498236194"
  //         alt="tremendo dashboard banner"
  //         height={isMobileView ? "300px" : "800px"}
  //         width={isMobileView ? "300px" : "700px"}
  //         className={styles.banner}
  //       />
  //     </div>
  //   );
  // }

  const studentClasses = studentDashboardState.getStudentDashboardData.classes;
  const studentProgress =
    studentDashboardState.getStudentDashboardData.progress;
  const studentAttendence =
    studentDashboardState.getStudentDashboardData.attandance;
  const presentPercentage = (
    (studentAttendence?.present / studentAttendence?.total_days) *
    100
  )?.toFixed(2);
  const absentPercentage = (
    (studentAttendence?.absent / studentAttendence?.total_days) *
    100
  )?.toFixed(2);
  console.log(moment(1650944308023).format("LL"));
  return (
    <div className={styles.dashboardBase}>
      <div className={styles.dashboardBanner}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fdashboard_banner.png?alt=media&token=b37ec534-bcbe-4476-8af6-7ddef42ad6b6"
          alt="tremendo dashboard banner"
          className={styles.banner}
        />
        <div className={styles.bannerTextWrapper}>
          <div className={styles.welcomeText}>Welcome</div>
          <div className={styles.descriptionText}>
            To learn a language is to have one more window from which you can
            look at the world.
          </div>
        </div>
      </div>
      <div className={styles.classesWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.classTitle}>Classes</div>
          {/* <div className={styles.arrowIcon}>
            <Icon name="rightArrow" width="24" height="24" />
          </div> */}
        </div>
        <div className={styles.classBoxWrapper}>
          {studentClasses?.map((i, index) => (
            <div className={styles.classBox} key={index}>
              <div className={styles.classDetail}>
                <div className={styles.subject}>{i.batch_language}</div>
                <div className={styles.subjectCode}>{i.batch_id}</div>
              </div>
              <div className={styles.classTime}>
                <div className={styles.data}>
                  {moment(i.class_date).format("LL")}
                </div>
                <div className={styles.time}>
                  {`${i.class_start_time}-${i.class_end_time}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.progressChart}>
          <div className={styles.chartHeading}>Progress</div>
          <div className={styles.progressChartBox}>
            <div className={styles.barChart}>
              <Bar
                data={{
                  labels: ["Highest", "Average", "My"],
                  datasets: [
                    {
                      data: [
                        studentProgress?.total_score,
                        studentProgress?.average_score,
                        studentProgress?.my_score
                      ],
                      backgroundColor: ["#055c4d", "#e78109", "#0289d6"]
                    }
                  ]
                }}
                options={options}
              />
            </div>
            <div className={styles.barLabels}>
              <div className={styles.labelWrap}>
                <div className={styles.labelIndication}></div>
                <div className={styles.labelText}>Highest score</div>
              </div>
              <div className={styles.labelWrap}>
                <div className={styles.avgIndication}></div>
                <div className={styles.labelText}>Average score</div>
              </div>
              <div className={styles.labelWrap}>
                <div className={styles.myScoreIndication}></div>
                <div className={styles.labelText}>My score</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.attendenceChart}>
          <div className={styles.chartHeading}>Attendance</div>
          <div className={styles.attendenceChartBox}>
            <div className={styles.pieChart}>
              <Pie
                data={{
                  labels: ["Present", "Absent"],
                  datasets: [
                    {
                      data: [presentPercentage, absentPercentage],
                      backgroundColor: ["#F1B71B", "#ED4F32"],
                      datalabels: {
                        display: true,
                        color: "#fff",
                        font: {
                          size: "14",
                          weight: "bold",
                          family: "Poppins"
                        },
                        formatter: function(value) {
                          return `${value}%`;
                        }
                      }
                    }
                  ]
                }}
                plugins={[ChartDataLabels]}
                options={pieChartOption}
              />
            </div>
            <div className={styles.pieChartLabel}>
              <div className={styles.pielabelWrap}>
                <div className={styles.piePresentIndication}></div>
                <div className={styles.pielabelText}>Present</div>
              </div>
              <div className={styles.pielabelWrap}>
                <div className={styles.pieAbsentIndication}></div>
                <div className={styles.pielabelText}>Absent</div>
              </div>
            </div>
            <div className={styles.totalDays}>
              Total Days: {studentAttendence?.total_days}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
