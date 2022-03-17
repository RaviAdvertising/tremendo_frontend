import { useEffect } from "react";
import styles from "./MentorProgresstab.module.css";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import moment from "moment";

export default function MentorProgresstab() {
  useEffect(() => {
    createCircle();
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

  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );
  //   if (true) {
  //     return <StudentDashboardSkelton />;
  //   }
  const lineIndication = [
    { name: "Low", color: "#ffb922", height: "34px" },
    { name: "Average", color: "#3bbafb", height: "220px" },
    { name: "High", color: "#00a651", height: "180px" }
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
                  data: [
                    90,
                    39,
                    80,
                    20,
                    40,
                    20,
                    56,
                    25,
                    45,
                    65,
                    44,
                    76,
                    81,
                    54,
                    77,
                    33
                  ],
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
      </div>
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
