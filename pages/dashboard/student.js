import Head from "next/head";
import { useContext, useState } from "react";
import Tab from "../../components/Tab/Tab";
import styles from "../../styles/student.module.css";
import withAuth from "../../utils/withAuth";
import { Image } from "semantic-ui-react";
import Icon from "../../assets/Icon/Icon";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const INITIAL_TAB_INDEX = 1;

function Student() {
  const classes = [
    {
      subject_code: "A1-4",
      date: "Sunday, January 23",
      time: " 02:00-04:00PM"
    },
    {
      subject_code: "A1-4",
      date: "Sunday, January 23",
      time: " 02:00-04:00PM"
    },
    {
      subject_code: "A1-4",
      date: "Sunday, January 23",
      time: " 02:00-04:00PM"
    }
    // {
    //   subject_code: "A1-4",
    //   date: "Sunday, January 23",
    //   time: " 02:00-04:00PM"
    // },
    // {
    //   subject_code: "A1-4",
    //   date: "Sunday, January 23",
    //   time: " 02:00-04:00PM"
    // }
  ];
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
        beginAtZero: true
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
  const dashboardTab = () => {
    return (
      <div className={styles.dashboardBase}>
        <div className={styles.dashboardBanner}>
          <Image
            src="/Images/dashboard_banner.png"
            alt="tremendo dashboard banner"
            className={styles.banner}
          />
          {/* <div className={styles.bannerTextWrapper}>
            <div className={styles.welcomeText}>Welcome</div>
            <div className={styles.descriptionText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div> */}
        </div>
        <div className={styles.classesWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.classTitle}>Classes</div>
            <div className={styles.arrowIcon}>
              <Icon name="rightArrow" width="24" height="24" />
            </div>
          </div>
          <div className={styles.classBoxWrapper}>
            {classes.map((i, index) => (
              <div className={styles.classBox} key={index}>
                <div className={styles.classDetail}>
                  <div className={styles.subject}>Subject</div>
                  <div className={styles.subjectCode}>{i.subject_code}</div>
                </div>
                <div className={styles.classTime}>
                  <div className={styles.data}> {i.date}</div>
                  <div className={styles.time}> {i.time}</div>
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
                        data: [90, 39, 80],
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
                        data: [80, 20],
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
              <div className={styles.totalDays}>Total Days: 60</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const tabs = [
    {
      id: 1,
      tab: "Dashboard",
      icon: "dashboardIcon",
      component: dashboardTab()
    },
    { id: 2, tab: "Course Details", icon: "courseDetail", component: "2" },
    { id: 3, tab: "My Resources", icon: "myResource", component: "3" },
    { id: 4, tab: "Progress", icon: "progress", component: "4" },
    { id: 5, tab: "FAQ", icon: "faq", component: "5" },
    {
      id: 6,
      tab: "Term & Condition",
      icon: "termAndCondition",
      component: "6"
    },
    { id: 7, tab: "Profile", icon: "setting", component: "7" }
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(INITIAL_TAB_INDEX);
  const clickOnTab = data => {
    setSelectedTabIndex(data.id);
  };

  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Dashboard</title>
        <meta name="description" content="Tremendo Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tab
        tabsData={tabs}
        selectTab={data => clickOnTab(data)}
        selectedTab={selectedTabIndex}
      />
      {/* <div>
        <Icon name="setting" color="#ff9000" />
      </div> */}
    </div>
  );
}

export default withAuth(Student);
