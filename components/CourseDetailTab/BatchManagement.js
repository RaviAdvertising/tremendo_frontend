import { useEffect, useState } from "react";
import moment from "moment";
import ButtonComponent from "../Button/Button";
import styles from "./BatchManagement.module.css";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";
import { Image, Dropdown, Message } from "semantic-ui-react";
import { GlobalContext } from "../../Context/Provider";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import { toast } from "react-toastify";

export default function BatchManagement() {
  const { isMobileView } = useContext(DeviceContext);
  const [loading, setLoading] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [attedenceData, setAttendenceData] = useState([]);
  const {
    studentDashboardState,
    languageState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const onChangeAttendence = (data, student) => {
    let attendence = attedenceData;
    attendence.push({ ["user_id"]: student.user_id, status: data.value });
    setAttendenceData(attendence);
  };

  const getStudentsAccordingToBatch = async id => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/getBatchStudentList?access_token=${jsCookie.get(
          COOKIE_TOKEN
        )}&batch_id=${id}`
      );
      setStudentList(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const updateStudentAttendence = async () => {
    if (attedenceData.length == 0) {
      toast.error("Select Attendence", {
        theme: "colored"
      });
      return false;
    }
    setLoading(true);
    const payload = {
      access_token: jsCookie.get(COOKIE_TOKEN),
      batch_id: languageState.storedMentorBatch.batch_id,
      attandance: attedenceData,
      class_id: studentList.class_data.class_id,
      attandance_date: studentList.class_data.class_date_format
    };
    try {
      const response = await axiosInstance.post(
        `/updateStudentAttandance`,
        payload
      );
      toast.success("Attendence Submitted", {
        theme: "colored"
      });
      setLoading(false);
    } catch (err) {
      toast.error("Something went wrong!!", {
        theme: "colored"
      });
      setLoading(false);
    }
  };
  const getBatchStudents = async id => {
    await getStudentsAccordingToBatch(id);
  };

  useEffect(() => {
    if (studentDashboardState.mentorBatches.length > 0) {
      getStudentsAccordingToBatch(languageState.storedMentorBatch.batch_id);
    }
  }, []);
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
  //         src="/Images/no_data.png"
  //         alt="tremendo dashboard banner"
  //         height={isMobileView ? "300px" : "800px"}
  //         width={isMobileView ? "300px" : "700px"}
  //         className={styles.banner}
  //       />
  //     </div>
  //   );
  // }

  const noDataSection = () => {
    return (
      <Message>
        <Message.Header>No Class</Message.Header>
        <p>No Running Class for this batch</p>
      </Message>
    );
  };

  return (
    <div className={styles.base}>
      <div className={styles.chartHeading}>Batch List</div>
      <div className={styles.batchListWrapper}>
        <div className={styles.batchListHeader}>
          <div className={styles.headerOption}>Batch Name</div>
          <div className={styles.headerOption}>Total students</div>
          <div className={styles.headerOption}>Total Classes</div>
        </div>
        {studentDashboardState.mentorBatches?.map(i => (
          <div
            className={styles.batchListBody}
            key={i}
            onClick={() => getBatchStudents(i.batch_id)}
          >
            <div
              className={styles.bodyOption}
            >{`${i.batch_language}-${i.batch_id}`}</div>
            <div className={styles.bodyOption}>{i.batch_capcity}</div>
            <div className={styles.bodyOptionWithCheckBox}>
              <div>{i.batch_total_classes}</div>
              <div className={styles.completeCheckbox}>
                <label className={styles.completeContainer}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    onClick={event => console.log(event.target.checked)}
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.headingSubmitBtnWrapper}>
        <div className={styles.chartHeading}>Student Attendence</div>
        <div className={styles.createFaqgbtn}>
          <ButtonComponent
            label={"Submit Attendence"}
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
            onClick={() => updateStudentAttendence()}
          />
        </div>
      </div>
      <div className={styles.tableHeader}>
        <div className={styles.headerName}>S no.</div>
        <div className={styles.headerName}>Name.</div>
        <div className={styles.headerName}>ID</div>
        <div className={styles.headerName}>Status</div>
      </div>
      {studentList.class_data && Object.keys(studentList.class_data).length != 0
        ? studentList.student_list?.map((i, index) => (
            <div className={styles.tableBody} key={index}>
              <div className={styles.bodyName}>{index + 1}.</div>
              <div className={styles.bodyName}>{i.user_name}</div>
              <div className={styles.bodyName}>{i.student_batch_id}</div>
              <div className={styles.bodyName}>
                <Dropdown
                  fluid
                  options={[
                    { text: "Present", value: "p" },
                    { text: "Absent", value: "a" }
                  ]}
                  className={styles.attendenceBody}
                  onChange={(event, data) => onChangeAttendence(data, i)}
                  placeholder="Attendence"
                />
              </div>
            </div>
          ))
        : noDataSection()}
    </div>
  );
}
