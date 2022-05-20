import styles from "./MentorDashboard.module.css";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import moment from "moment";
import ButtonComponent from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../../pages/_app";
import { Image, Modal, Input, Button, Dropdown } from "semantic-ui-react";
import { getMentorDashboardData } from "../../Context/Actions/Dashboard/DashboardAction";
import { GlobalContext } from "../../Context/Provider";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";

export default function MentorDashboard({}) {
  const { isMobileView } = useContext(DeviceContext);
  const [openModal, setOpenModal] = useState(null);
  const [feilds, setFeilds] = useState({});
  const [mentorList, setMentorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    studentDashboardState,
    languageState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const totalDatesInCurrentMonth = Array.from(
    Array(moment().daysInMonth()).keys()
  );

  useEffect(() => {
    if (document.getElementById("currentDate")) {
      document.getElementById("currentDate").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    const curr = new Date(); // get current date
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    const last = first + 6; // last day is the first day + 6

    const firstday = moment(new Date(curr.setDate(first))).format("x");
    const lastday = moment(new Date(curr.setDate(last))).format("x");

    const id = languageState.storedMentorBatch?.batch_id;
    const response = await getMentorDashboardData(
      id,
      firstday,
      lastday
    )(dispatch);
    setTimeout(() => {
      const dashboardData = response.data;
      const attendencePercentage =
        (dashboardData.attandance_data?.present_count /
          (dashboardData.attandance_data?.present_count +
            dashboardData.attandance_data?.absent_count)) *
        100;

      createCircle(attendencePercentage);
    }, 1000);
  };

  const createCircle = attendencePercentage => {
    let can = document.getElementById("canvas"),
      spanProcent = document.getElementById("procent"),
      c = can.getContext("2d");

    let posX = can.width / 2,
      posY = can.height / 2,
      fps = 1000 / 200,
      procent = 0,
      oneProcent = 360 / 100,
      result = oneProcent * attendencePercentage;

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
  const onClickStartClass = data => {
    getMentorList(dashboardData.batch_data.language_code);
    setOpenModal(dashboardData.batch_data);
    setFeilds({ ...feilds, ...dashboardData.batch_data });
  };
  const onHandleChange = (value, type) => {
    setFeilds({ ...feilds, [type]: value });
  };
  const getMentorList = async lang => {
    try {
      const response = await axiosInstance.get(
        `/getMentorFellowList?access_token=${jsCookie.get(COOKIE_TOKEN)}`
      );
      setMentorList(response.data.data);
    } catch (err) {}
  };

  const createClassFunction = async () => {
    const mentorName = mentorList.find(
      i => i.user_code == feilds?.batch_mentor_id
    );
    const defaultMentorName =
      studentDashboardState.mentorDashboardData.batch_data.batch_mentor;

    try {
      const response = await axiosInstance.post(`/createNewBatchClass`, {
        access_token: jsCookie.get(COOKIE_TOKEN),
        batch_id: openModal.batch_id,
        class_start_time: feilds?.batch_start_time,
        class_end_time: feilds?.batch_end_time,
        batch_mentor: mentorName ? mentorName.name : defaultMentorName,
        batch_mentor_id: feilds?.batch_mentor_id,
        class_link: feilds?.class_link
      });
      getDashboardData();
      setLoading(false);
      onCloseModal();
    } catch (err) {
      console.log(err);
      setLoading(false);
      onCloseModal();
    }
  };
  const onUpdateClass = async () => {
    setLoading(true);
    await createClassFunction();
  };
  const onCreateClass = async () => {
    setLoading(true);
    await createClassFunction();
    goToLink(feilds?.class_link);
  };

  const onCloseModal = () => {
    setOpenModal(null);
    setFeilds({});
  };
  const goToLink = link => {
    const url = link.includes("https") ? link : `https://${link}`;
    window.open(url, "_blank");
  };

  const mentor_list = mentorList.map(i => {
    return {
      text: i.name,
      value: i.user_code
    };
  });
  const startClassModal = () => {
    return (
      <Modal
        onClose={() => onCloseModal()}
        open={openModal != null ? true : false}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Create Classes</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                value={feilds?.batch_start_time}
                style={{ width: "100%" }}
                onChange={(e, data) =>
                  onHandleChange(data.value, "batch_start_time")
                }
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                value={feilds?.batch_end_time}
                style={{ width: "100%" }}
                onChange={(e, data) =>
                  onHandleChange(data.value, "batch_end_time")
                }
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Dropdown
                fluid
                selection
                placeholder="Change Mentor"
                options={mentor_list}
                value={feilds?.batch_mentor_id}
                onChange={(e, data) =>
                  onHandleChange(data.value, "batch_mentor_id")
                }
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                value={feilds?.class_link}
                style={{ width: "100%" }}
                onChange={(e, data) => onHandleChange(data.value, "class_link")}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="orange"
            loading={loading}
            onClick={() => onCreateClass()}
          >
            Create Class
          </Button>
          <Button
            content="Update Class"
            labelPosition="right"
            icon="checkmark"
            onClick={() => onUpdateClass()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };
  const dashboardData = studentDashboardState.mentorDashboardData;
  if (dashboardData.batch_details?.length == 0) {
    return (
      <div
        style={{
          height: isMobileView ? "300px" : "700px",
          width: isMobileView ? "300px" : "700px",
          margin: "auto"
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fno_data.png?alt=media&token=79834bd2-97fa-4f63-897f-fe9498236194`}
          alt="tremendo dashboard banner"
          height={isMobileView ? "300px" : "800px"}
          width={isMobileView ? "300px" : "700px"}
          className={styles.banner}
        />
      </div>
    );
  }

  if (studentDashboardState.mentorDashboardDataLoading) {
    return <StudentDashboardSkelton />;
  }
  let attendencePercentage = 0;
  if (
    dashboardData.attandance_data?.present_count &&
    dashboardData.attandance_data?.absent_count
  ) {
    attendencePercentage =
      (dashboardData.attandance_data?.present_count /
        (dashboardData.attandance_data?.present_count +
          dashboardData.attandance_data?.absent_count)) *
      100;
  }
  const chartLabel = dashboardData.progress_data?.map(i => i.user_name);
  const marks = dashboardData.progress_data?.map(i => i.student_score);

  let classesArray = [];
  days.forEach((i, index) =>
    dashboardData.batch_details?.forEach(j => {
      if (moment(j.class_date).isoWeekday() == index + 1) {
        classesArray.push({ day_name: i, data: { ...j } });
      } else {
        classesArray.push({ day_name: i, data: null });
      }
    })
  );
  const batch_days = dashboardData.batch_data?.batch_class_days?.split(",");
  const checkTodaysClassValidate = dashboardData.class_details?.find(
    i => moment(i.class_date).isoWeekday() == currentDay
  );

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
              backgroundColor:
                !batch_days?.includes(i) || currentDay > index + 1
                  ? "#f2efef"
                  : "#25b1ae"
            }}
          >
            <div className={styles.batchCode}>
              {isMobileView ? i.substring(0, 3) : i}
            </div>

            <div className={styles.batchCode}>
              {dashboardData.batch_data?.batch_mentor}
            </div>

            <div className={styles.timeCode}>
              {`${dashboardData.batch_data?.batch_start_time} - ${dashboardData.batch_data?.batch_end_time}`}
            </div>
            <div className={styles.batchCode}>
              <ButtonComponent
                label={
                  !batch_days?.includes(i) || currentDay > index + 1
                    ? "Finished"
                    : checkTodaysClassValidate
                    ? "Go To Link"
                    : "Get Started"
                }
                height={33}
                borderRadius={16}
                backgroundColor={
                  !batch_days?.includes(i) || currentDay > index + 1
                    ? "#e6e4e4"
                    : "#51faf6"
                }
                textStyle={{
                  color: "#000",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                  fontSize: isMobileView ? "10px" : "15px"
                }}
                border="none"
                onClick={
                  checkTodaysClassValidate
                    ? () => goToLink(checkTodaysClassValidate.class_link)
                    : () => onClickStartClass()
                }
              />
            </div>
            {(!batch_days?.includes(i) || currentDay > index + 1) && (
              <div className={styles.overlay}></div>
            )}
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
                  labels: chartLabel,
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
            <canvas
              id="canvas"
              width="240"
              height="240"
              data-percent={attendencePercentage}
            ></canvas>
            <div className={styles.showProgress} id="procent"></div>
          </div>
        </div>
      </div>
      {startClassModal()}
    </div>
  );
}
