import { useEffect, useContext, useState } from "react";
import styles from "./MentorProgresstab.module.css";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import moment from "moment";
import { Image, Modal, Input, Dropdown, Button } from "semantic-ui-react";
import { DeviceContext } from "../../pages/_app";
import axiosInstance from "../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../utils/constants";
import jsCookie from "js-cookie";
import ButtonComponent from "../Button/Button";
import DatePicker from "react-datepicker";
import { GlobalContext } from "../../Context/Provider";

export default function MentorProgresstab() {
  const { isMobileView } = useContext(DeviceContext);
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [leaveModal, setLeaveModal] = useState(false);
  const [leaveFeilds, setLeaveFeilds] = useState({});

  const { languageState } = useContext(GlobalContext);

  useEffect(() => {
    getProgressData();
  }, [languageState.storedMentorBatch]);

  const getProgressData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/getMentorProgress?access_token=${jsCookie.get(
          COOKIE_TOKEN
        )}&batch_id=${languageState.storedMentorBatch.batch_id}`
      );
      setProgressData(response.data.data);
      setTimeout(() => {
        const attendence = response.data.data.attandance_data;

        const presentPercentage =
          (attendence?.present_count /
            (attendence?.present_count + attendence?.absent_count)) *
          100;

        createCircle(presentPercentage);
      }, 1000);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const createCircle = presentPercentage => {
    let can = document.getElementById("canvas");

    if (can) {
      let spanProcent = document.getElementById("procent"),
        c = can.getContext("2d");

      let posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * presentPercentage;

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
  const DateInput = ({ value, onClick, placeholder }) => {
    return (
      <button
        className={styles.dateInput}
        style={{
          width: "100%",
          fontSize: "12px",
          color: "#66666d",
          border: "1px solid #cecedc",
          height: "31px",
          paddingLeft: "8px",
          fontFamily: "Poppins",
          backgroundColor: "#f8f8fa",
          textAlign: "left"
        }}
        onClick={onClick}
      >
        {value ? value : placeholder}
      </button>
    );
  };
  const onHandleChange = (value, type) => {
    setLeaveFeilds({ ...leaveFeilds, [type]: value });
  };

  const applyLeave = async () => {
    setLoading(true);
    const payload = {
      access_token: jsCookie.get(COOKIE_TOKEN),
      lang_code: languageState.storedMentorBatch.code,
      leave_date: moment(leaveFeilds.leave_date).format("DD/MM/YYYY"),
      reason: leaveFeilds.reason,
      leave_type: "cl"
    };
    try {
      const response = await axiosInstance.post(`/applyMentorLeave`, payload);
      setLeaveModal(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setLeaveModal(false);
    }
  };
  const applyLeaveModal = () => {
    return (
      <Modal
        onClose={() => setLeaveModal(false)}
        open={leaveModal}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Leave Application</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <DatePicker
                selected={
                  leaveFeilds.leave_date
                    ? moment(leaveFeilds.leave_date)._d
                    : ""
                }
                onChange={date =>
                  onHandleChange(moment(date).format(), "leave_date")
                }
                placeholderText="Leave Date"
                customInput={<DateInput />}
                dateFormat="MMMM d, yyyy"
                minDate={Date.now()}
                dropdownMode="select"
              />
            </div>
            <div>
              <Input
                placeholder="Reason "
                onChange={(e, data) => onHandleChange(data.value, "reason")}
                style={{ width: "100%" }}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setLeaveModal(false)}>
            Close
          </Button>
          <Button
            content="Submit Leave"
            labelPosition="right"
            icon="checkmark"
            onClick={() => applyLeave()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };
  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );

  // if (true) {
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
  if (loading) {
    return <StudentDashboardSkelton />;
  }
  const scores = progressData.score_data?.map(i => i.avg_score);
  const marks = progressData.progress_data?.map(i => i.student_score);
  const attendence = progressData.attandance_data;
  const lineIndication = [
    { name: "High", color: "#00a651" },
    { name: "Average", color: "#3bbafb" },
    { name: "Low", color: "#ffb922" }
  ];
  let presentPercentage = 0;
  if (attendence?.present_count && attendence?.absent_count) {
    presentPercentage =
      (attendence?.present_count /
        (attendence?.present_count + attendence?.absent_count)) *
      100;
  }

  return (
    <div className={styles.base}>
      <div className={styles.scoreChartWrapper}>
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
                      above: "#FFF6E3", // Area will be red above the origin
                      below: "#FFF6E3" // And blue below the origin
                    },
                    borderColor: "#000",
                    borderWidth: 1
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
                <div
                  className={styles.pointsSteps}
                  style={{ backgroundColor: i.color }}
                ></div>
                <div className={styles.stepsNames}>{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.progressChart}>
          <div className={styles.chartHeading}>Batch Progress</div>
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
                      data: marks,
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
                      data: marks,
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
            <canvas id="canvas" width="240" height="240"></canvas>
            <div className={styles.showProgress} id="procent"></div>
          </div>
          <div className={styles.applyLeaveBtn}>
            <ButtonComponent
              label={"Apply Leave"}
              height={25}
              borderRadius={8}
              backgroundColor={"#f98e46"}
              textStyle={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Open Sans",
                fontSize: "12px"
              }}
              border="none"
              onClick={() => setLeaveModal(true)}
            />
          </div>
        </div>
      </div>
      {applyLeaveModal()}
    </div>
  );
}
