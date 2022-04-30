import styles from "./AdminDashboard.module.css";
import { useContext, useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { GlobalContext } from "../../Context/Provider";
import Icon from "../../assets/Icon/Icon";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import { Image, Dropdown } from "semantic-ui-react";
import moment from "moment";

export default function AdminDashboard({}) {
  const { homeState } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("ja");
  useEffect(() => {
    createCircle();
    getAdminDashboardData();
  }, []);
  const salesOfSelectedLang = dashboardData?.sales_per_language_data?.find(
    j => j.code == selectedFilter
  );
  useEffect(() => {
    createCircle();
  }, [selectedFilter, salesOfSelectedLang]);
  const getAdminDashboardData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/getAdminDashboard?access_token=${jsCookie.get(COOKIE_TOKEN)}`
      );
      setDashboardData(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

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
  const onChangeFilter = data => {
    setSelectedFilter(data.value);
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

  const saleLabel = dashboardData?.sales_data?.map(language => language.title);
  const salesCount = dashboardData?.sales_data?.map(
    language => language.transcation_count
  );
  const studentCount = dashboardData?.student_data?.map(
    student => student.student_count
  );
  const summaryAmount = dashboardData?.summary_data?.amount;
  const transactionData = dashboardData?.transaction_data;
  const salesPerLanguageCode = dashboardData?.sales_per_language_data?.map(
    i => {
      return {
        text: i.title,
        value: i.code
      };
    }
  );

  const percentageSale =
    (salesOfSelectedLang?.lang_amount / salesOfSelectedLang?.overall_amount) *
    100;

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
                    data: salesCount,
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
            {/* <div>{filterSection("Weekly")}</div> */}
          </div>
          <div className={styles.totalEarning}>
            <span style={{ fontWeight: "bold" }}>₹ {summaryAmount}</span>{" "}
            <br></br>
            Total Earning
          </div>
          <div className={styles.summaryChart}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fadmin_graph.png?alt=media&token=2ea5db62-2101-4b70-8cd5-cbb87e523c7d"
              alt="admin graph"
              width="96%"
            />
          </div>
        </div>
      </div>
      <div className={styles.totalStudentSalesWrapper}>
        <div className={styles.saleChartWrapper}>
          <div className={styles.headingFilterWrapper}>
            <div className={styles.chartHeading}>Total Students</div>
            {/* <div>{filterSection("March, 2022")}</div> */}
          </div>
          <div className={styles.totalStudentChart}>
            <Bar
              data={{
                labels: saleLabel,
                datasets: [
                  {
                    data: studentCount,
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
            <div style={{ width: "30%" }}>
              <Dropdown
                fluid
                selection
                defaultValue={"ja"}
                options={salesPerLanguageCode}
                onChange={(event, data) => onChangeFilter(data)}
                className={styles.filterBase}
              />
            </div>
          </div>
          <div className={styles.canvasWrap}>
            <canvas
              id="canvas"
              width="200"
              height="200"
              data-percent={percentageSale ? percentageSale : "0"}
            ></canvas>
            <div className={styles.showProgress} id="procent"></div>
          </div>
          <div className={styles.chartHeading} style={{ textAlign: "center" }}>
            Total - {salesOfSelectedLang?.overall_amount}
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
        {transactionData?.map((transaction, index) => (
          <div className={styles.tableBody} key={index}>
            <div className={styles.serialNo}>{index + 1}</div>
            <div className={styles.headerLabel}>{transaction.user_name}</div>
            <div className={styles.headerLabel}>
              {transaction.transacation_id}{" "}
            </div>
            <div className={styles.headerLabel}>
              {transaction.pay_amount}/-{" "}
            </div>
            <div className={styles.headerLabel}>
              {moment(transaction.created_at).format("DD/MM/yyyy")}
            </div>
            {/* <div className={styles.headerLabel}>
              <Icon name="downloadIcon" width="16" height="16" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
