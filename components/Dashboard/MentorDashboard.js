import styles from "./MentorDashboard.module.css";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import moment from "moment";
import Button from "../Button/Button";
import { useEffect } from "react";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";
import { Image } from "semantic-ui-react";

export default function MentorDashboard({}) {
  const { isMobileView } = useContext(DeviceContext);
  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );
  useEffect(() => {
    // createCircle();
    if (document.getElementById("currentDate")) {
      document.getElementById("currentDate").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, []);

  const createCircle = () => {
    let can = document.getElementById("canvas"),
      spanProcent = document.getElementById("procent"),
      c = can.getContext("2d");
    const percentage = can.getAttribute("data-percent");
    let posX = can.width / 2,
      posY = can.height / 2,
      fps = 1000 / 200,
      procent = 0,
      oneProcent = 360 / 100,
      result = oneProcent * percentage;

    c.lineCap = "round";
    arcMove();

    function arcMove() {
      var deegres = 0;
      var acrInterval = setInterval(function() {
        deegres += 1;
        c.clearRect(0, 0, can.width, can.height);
        procent = deegres / oneProcent;

        spanProcent.innerHTML = procent.toFixed();

        c.beginPath();
        c.arc(
          posX,
          posY,
          100,
          (Math.PI / 180) * 270,
          (Math.PI / 180) * (270 + 360)
        );
        c.strokeStyle = "#f2ddc0";
        c.lineWidth = "20";
        c.stroke();

        c.beginPath();
        c.strokeStyle = "#F4910A";
        c.lineWidth = "20";
        c.arc(
          posX,
          posY,
          100,
          (Math.PI / 180) * 270,
          (Math.PI / 180) * (270 + deegres)
        );
        c.stroke();
        if (deegres >= result) clearInterval(acrInterval);
      }, fps);
    }
  };

  const currentDate = moment().format("D");
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const currentDay = moment().day() ? moment().day() : 7;
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        title: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        title: {
          display: false
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
  if (true) {
    return (
      <div style={{ height: "700px", width: "700px", margin: "auto" }}>
        <Image
          src="/Images/no_data.png"
          alt="tremendo dashboard banner"
          height="800px"
          width="700px"
          className={styles.banner}
        />
      </div>
    );
  }
  //   if (true) {
  //     return <StudentDashboardSkelton />;
  //   }

  return (
    <div className={styles.base}>
      <div className={styles.chartHeading}>Batch Details</div>
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

      {days.map((i, index) => (
        <div className={styles.courseDetailSection} key={index}>
          <div
            className={styles.detailsWrapper}
            style={{
              backgroundColor: currentDay !== index + 1 ? "#f2efef" : "#25b1ae"
            }}
          >
            <div className={styles.batchCode}>
              {isMobileView ? i.substring(0, 3) : i}
            </div>
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
                  fontSize: isMobileView ? "10px" : "15px"
                }}
                border="none"
                onClick={() => console.log("start")}
              />
            </div>
            {currentDay !== index + 1 && <div className={styles.overlay}></div>}
          </div>
        </div>
      ))}
      <div className={styles.chartWrapper}>
        <div className={styles.progressChart}>
          <div className={styles.chartHeading}>Progress</div>
          <div className={styles.progressChartBox}>
            <div className={styles.barChart}>
              <Bar
                data={{
                  labels: [
                    "Stu 1",
                    "Stu 2",
                    "Stu 3",
                    "Stu 4",
                    "Stu 5",
                    "Stu 6",
                    "Stu 5",
                    "Stu 6"
                  ],
                  datasets: [
                    {
                      data: [60, 39, 80, 55, 45, 65, 57, 88],
                      backgroundColor: [
                        "#8BDCDB",
                        "#8BDCDB",
                        "#8BDCDB",
                        "#8BDCDB",
                        "#8BDCDB",
                        "#8BDCDB",
                        "#8BDCDB",
                        "#8BDCDB"
                      ],
                      order: 2
                    },
                    {
                      data: [60, 39, 80, 55, 45, 65, 57, 88],
                      backgroundColor: "#fff",
                      borderColor: "#fa9116",

                      order: 1,
                      type: "line"
                    }
                  ]
                }}
                options={options}
              />
            </div>
          </div>
        </div>
        <div className={styles.attendenceChart}>
          <div className={styles.chartHeading}>Attendance</div>
          <div className={styles.canvasWrap}>
            <canvas
              id="canvas"
              width="240"
              height="240"
              data-percent="61"
            ></canvas>
            <div className={styles.showProgress} id="procent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
