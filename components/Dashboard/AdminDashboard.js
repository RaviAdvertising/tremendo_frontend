import styles from "./AdminDashboard.module.css";
import { useContext, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { GlobalContext } from "../../Context/Provider";
import Icon from "../../assets/Icon/Icon";

export default function AdminDashboard({}) {
  const { homeState } = useContext(GlobalContext);
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

        spanProcent.innerHTML = `${procent.toFixed()}%`;

        c.beginPath();
        c.arc(
          posX,
          posY,
          80,
          (Math.PI / 180) * 270,
          (Math.PI / 180) * (270 + 360)
        );
        c.strokeStyle = "#EBFBF1";
        c.lineWidth = "20";
        c.stroke();

        c.beginPath();
        c.strokeStyle = "#8DECB1";
        c.lineWidth = "20";
        c.arc(
          posX,
          posY,
          80,
          (Math.PI / 180) * 270,
          (Math.PI / 180) * (270 + deegres)
        );
        c.stroke();
        if (deegres >= result) clearInterval(acrInterval);
      }, fps);
    }
  };

  const filterSection = data => {
    return (
      <div className={styles.filterBase}>
        <div className={styles.filterSelectedTitle}>{data}</div>
        <div>
          <Icon name="downArrow" />
        </div>
      </div>
    );
  };

  const lineChartOption = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          font: {
            size: "10"
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        font: {
          size: "10"
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
      }
    }
  };
  const barCharOption = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        display: false,
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

  const saleLabel = homeState.getLanguage.map(language =>
    language.title.toLowerCase()
  );

  return (
    <div className={styles.base}>
      <div className={styles.saleSummaryWrapper}>
        <div className={styles.saleChartWrapper}>
          <div className={styles.chartHeading}>Sales</div>
          <div className={styles.saleChart}>
            <Line
              data={{
                labels: saleLabel,
                datasets: [
                  {
                    label: "Sale",
                    data: [],
                    fill: false,
                    tension: 2,
                    borderColor: "#71d875",
                    borderWidth: 3,
                    cubicInterpolationMode: "monotone",
                    datalabels: {
                      display: true,
                      font: { size: "12", weight: "bold" }
                    }
                  }
                ]
              }}
              width={500}
              height={300}
              options={lineChartOption}
            />
          </div>
        </div>
        <div className={styles.summaryChartWrapper}>
          <div className={styles.headingFilterWrapper}>
            <div className={styles.chartHeading}>Summary</div>
            <div>{filterSection("Weekly")}</div>
          </div>
          <div className={styles.totalEarning}>
            <span style={{ fontWeight: "bold" }}>₹ 0</span> <br></br>
            Total Earning
          </div>
          <div className={styles.summaryChart}>
            <Line
              data={{
                labels: [1, 2, 3, 4, 5, 6],
                datasets: [
                  {
                    data: [],
                    fill: {
                      target: "origin",
                      above: "#F2F9E7", // Area will be red above the origin
                      below: "#F2F9E7" // And blue below the origin
                    },
                    tension: 2,
                    borderColor: "#a6c92a",
                    borderWidth: 1,
                    cubicInterpolationMode: "monotone",
                    datalabels: {
                      display: true,
                      font: { size: "12", weight: "bold" }
                    }
                  }
                ]
              }}
              width={200}
              height={100}
              options={{
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false
                  },
                  y: {
                    display: false
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.totalStudentSalesWrapper}>
        <div className={styles.saleChartWrapper}>
          <div className={styles.headingFilterWrapper}>
            <div className={styles.chartHeading}>Total Students</div>
            <div>{filterSection("March, 2022")}</div>
          </div>
          <div className={styles.totalStudentChart}>
            <Bar
              data={{
                labels: saleLabel,
                datasets: [
                  {
                    data: [],
                    backgroundColor: [
                      "#055c4d",
                      "#e78109",
                      "#F5992F",
                      "#0289d6",
                      "#BE3D27",
                      "#000",
                      "#1B4396",
                      "#055c4d",
                      "#e78109",
                      "#000"
                    ]
                  }
                ]
              }}
              options={barCharOption}
            />
          </div>
        </div>
        <div className={styles.summaryChartWrapper}>
          <div className={styles.headingFilterWrapper}>
            <div className={styles.chartHeading}>Sales Per Language</div>
            <div>{filterSection("Japanese")}</div>
          </div>
          <div className={styles.canvasWrap}>
            <canvas
              id="canvas"
              width="200"
              height="200"
              data-percent="0"
            ></canvas>
            <div className={styles.showProgress} id="procent"></div>
          </div>
          <div className={styles.chartHeading} style={{ textAlign: "center" }}>
            Total - 0
          </div>
        </div>
      </div>
      <div className={styles.transactionInvoiceWrapper}>
        <div className={styles.headingFilterWrapper}>
          <div className={styles.chartHeading}>Transaction Invoice</div>
          {/* <div>{filterSection("Last Month")}</div> */}
        </div>
        <div className={styles.tableHeader}>
          <div className={styles.serialNo}>No</div>
          <div className={styles.headerLabel}>Account holder name</div>
          <div className={styles.headerLabel}> Transaction Id </div>
          <div className={styles.headerLabel}>Amount </div>
          <div className={styles.headerLabel}>Date</div>
          <div className={styles.headerLabel}></div>
        </div>
        {[].map((transaction, index) => (
          <div className={styles.tableBody} key={index}>
            <div className={styles.serialNo}>{index + 1}</div>
            <div className={styles.headerLabel}>Ekta Singh</div>
            <div className={styles.headerLabel}>0070025489647 </div>
            <div className={styles.headerLabel}>40,000/- </div>
            <div className={styles.headerLabel}>22/03/2022</div>
            <div className={styles.headerLabel}>
              <Icon name="downloadIcon" width="16" height="16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
