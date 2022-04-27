import { useEffect, useState } from "react";
import moment from "moment";
import ButtonComponent from "../Button/Button";
import styles from "./BatchManagement.module.css";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";
import { Image, Dropdown } from "semantic-ui-react";
import { GlobalContext } from "../../Context/Provider";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";

export default function BatchManagement() {
  const { isMobileView } = useContext(DeviceContext);
  const [loading, setLoading] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const {
    studentDashboardState,
    languageState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const onChangeAttendence = data => {
    //data
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
            <div className={styles.bodyOption}>{i.batch_language}</div>
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
            onClick={() => submitAttendence(true)}
          />
        </div>
      </div>
      <div className={styles.tableHeader}>
        <div className={styles.headerName}>S no.</div>
        <div className={styles.headerName}>Name.</div>
        <div className={styles.headerName}>ID</div>
        <div className={styles.headerName}>Status</div>
      </div>
      {studentList.map((i, index) => (
        <div className={styles.tableBody} key={index}>
          <div className={styles.bodyName}>{index + 1}.</div>
          <div className={styles.bodyName}>{i.user_name}</div>
          <div className={styles.bodyName}>{i.student_batch_id}</div>
          <div className={styles.bodyName}>
            <Dropdown
              fluid
              options={[
                { text: "Present", value: "present" },
                { text: "Absent", value: "absent" }
              ]}
              className={styles.attendenceBody}
              onChange={(event, data) => onChangeAttendence(data)}
              placeholder="Attendence"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
