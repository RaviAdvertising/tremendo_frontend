import styles from "./ProgressTab.module.css";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import moment from "moment";
import { useContext, useEffect } from "react";
import { DeviceContext } from "../../pages/_app";
import { Image } from "semantic-ui-react";
import { GlobalContext } from "../../Context/Provider";
import { getStudentProgress } from "../../Context/Actions/Dashboard/DashboardAction";

export default function ProgressTab({}) {
  const { isMobileView } = useContext(DeviceContext);
  const {
    studentDashboardState,
    languageState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  useEffect(() => {
    if (languageState.setStudentSelectedLanguage?.batch_id)
      getStudentProgress(languageState.setStudentSelectedLanguage.batch_id)(
        dispatch
      );
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

  const lineChartOption = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Day",
          color: "#7b7b7b",
          font: {
            family: "Poppins",
            size: 14,
            weight: "bold"
          }
        },
        ticks: {
          callback: function(value) {
            return value + 1;
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
        suggestedMax: 100,
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        displayColors: false,
        titleAlign: "center",
        callbacks: {
          title: function(context) {
            return `${context[0].formattedValue}%`;
          },
          label: function(context) {
            return "Total score : 100";
          },
          footer: function(context) {
            return `Score : ${context[0].formattedValue}`;
          }
        }
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
  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );
  // if (studentDashboardState.getStudentProgress?.score?.length == 0) {
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

  if (studentDashboardState.getStudentProgressLoading) {
    return <StudentDashboardSkelton />;
  }
  const scores = studentDashboardState.getStudentProgress?.score?.map(
    i => i.my_score
  );
  const studentProgress =
    studentDashboardState.getStudentProgress.batch_progress;
  const studentAttendence = studentDashboardState.getStudentProgress.attandance;
  const presentPercentage = (
    (studentAttendence?.present / studentAttendence?.total_days) *
    100
  )?.toFixed(2);
  const absentPercentage = (
    (studentAttendence?.absent / studentAttendence?.total_days) *
    100
  )?.toFixed(2);
  const lineIndication = [
    { name: "Low", color: "#ffb922", height: "34px" },
    { name: "Average", color: "#3bbafb", height: "150px" },
    { name: "High", color: "#00a651", height: "220px" }
  ];
  return (
    <div className={styles.base}>
      <div className={styles.chartHeading}>Score</div>
      <div className={styles.lineChartWrapper}>
        <div className={styles.lineChart}>
          <Line
            data={{
              labels: totalDatesInCurrentMonth,
              datasets: [
                {
                  data: scores,
                  backgroundColor: [
                    "#ffb922",
                    "#3bbafb",
                    "#00a651",
                    "#3bbafb",
                    "#ffb922",
                    "#3bbafb",
                    "#00a651",
                    "#3bbafb",
                    "#ffb922",
                    "#3bbafb",
                    "#00a651",
                    "#3bbafb"
                  ],
                  fill: {
                    target: "origin",
                    above: "#c1ffdf", // Area will be red above the origin
                    below: "#c1ffdf" // And blue below the origin
                  },
                  tension: 2,
                  showLine: false,
                  cubicInterpolationMode: "monotone"
                }
              ]
            }}
            width={500}
            height={300}
            options={lineChartOption}
          />
        </div>
        {!isMobileView && (
          <div className={styles.indicationPoints}>
            {lineIndication.map(i => (
              <div className={styles.namePointWrapper} key={i.name}>
                <div className={styles.stepsNames}>{i.name}</div>
                <div
                  className={styles.pointsSteps}
                  style={{ backgroundColor: i.color, height: i.height }}
                ></div>
              </div>
            ))}
          </div>
        )}
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
                        studentProgress?.highiest_score,
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
                          if (value != 0) {
                            return `${value}%`;
                          } else {
                            return null;
                          }
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
