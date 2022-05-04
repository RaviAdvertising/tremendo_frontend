import React, { useRef, useContext, useEffect, useState } from "react";
import styles from "./MyResourceTab.module.css";
import { Image } from "semantic-ui-react";
import Icon from "../../assets/Icon/Icon";
import { DeviceContext } from "../../pages/_app";
import { GlobalContext } from "../../Context/Provider";
import { getStudentAssignmentList } from "../../Context/Actions/Dashboard/DashboardAction";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
import Button from "../Button/Button";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import PageLoader from "../Loader/PageLoader";
import { storage } from "../../utils/firebase-config";
import moment from "moment";

const IDLE = "idle";
export default function MyResourceTab({}) {
  const inputFile = useRef(null);
  const {
    studentDashboardState,
    languageState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const { isMobileView } = useContext(DeviceContext);
  const [loading, setLoading] = useState(false);
  const [assignmentUrls, setAssignmentUrls] = useState({});
  useEffect(() => {
    if (languageState.setStudentSelectedLanguage?.batch_id)
      getStudentAssignmentList(
        languageState.setStudentSelectedLanguage.batch_id
      )(dispatch);
  }, []);

  const onClick = e => {
    inputFile.current.click();
  };

  const uploadFiles = (image, id) => {
    setLoading(true);
    //setUploadLoading(type);
    const uploadTask = storage.ref(`docs/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("here");
      },
      error => {
        setLoading(false);
        //setUploadLoading("");
        console.log(error, "error");
      },
      () => {
        storage
          .ref("docs")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setAssignmentUrls({ ...assignmentUrls, [id]: url });
            setLoading(false);
            // setUploadLoading("");
          });
      }
    );
  };

  const submitAssigmentResult = async data => {
    setLoading(true);
    const payload = {
      access_token: jsCookie.get(COOKIE_TOKEN),
      student_assignment_id: data.student_assignment_id,
      answer_doc_url: assignmentUrls[data.assignment_id]
    };
    try {
      const response = await axiosInstance.post(
        `/submitStudentAssignment`,
        payload
      );
      getStudentAssignmentList(
        languageState.setStudentSelectedLanguage.batch_id
      )(dispatch);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const uploadAssigment = (e, data) => {
    uploadFiles(e.target.files[0], data.assignment_id);
  };

  if (studentDashboardState.studentAssignmentListLoading) {
    return <StudentDashboardSkelton />;
  }
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
  //         src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fno_data.png?alt=media&token=79834bd2-97fa-4f63-897f-fe9498236194"
  //         alt="tremendo dashboard banner"
  //         height={isMobileView ? "300px" : "800px"}
  //         width={isMobileView ? "300px" : "700px"}
  //         className={styles.banner}
  //       />
  //     </div>
  //   );
  // }

  const assignmentList = studentDashboardState.studentAssignmentList?.assigment;
  const finalAssesment =
    studentDashboardState.studentAssignmentList?.final_assessment;

  const resourse_data = studentDashboardState.studentAssignmentList;
  return (
    <div className={styles.base}>
      {loading && <PageLoader />}
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>Assignments</div>
        <div className={styles.heading}> Total: {assignmentList?.length}</div>
      </div>
      <div className={styles.assignmentTable}>
        <div className={styles.tableHeader}>
          <div className={styles.noHeader}>No.</div>
          <div className={styles.titleHeader}>
            {isMobileView ? "Assg. Title" : "Assignment Title"}
          </div>
          <div className={styles.dateHeader}>Assign Date</div>
          <div className={styles.dateHeader}>Due Date</div>
          <div className={styles.statusHeader}>Score</div>
          <div className={styles.statusHeader}>Status</div>
        </div>
        <div className={styles.tableBody}>
          {assignmentList?.map((i, index) => (
            <div className={styles.tableData} key={index}>
              <div className={styles.noHeader}>{index + 1}.</div>
              <div className={styles.uploadFileSection}>
                <div className={styles.assignmentName}>
                  {isMobileView ? `${i.title.substring(0, 4)}...` : i.title}
                </div>
                <div className={styles.uploadButtons}>
                  <input
                    ref={inputFile}
                    type="file"
                    hidden
                    onChange={event => uploadAssigment(event, i)}
                  />
                  <div className={styles.uploadBtn} onClick={onClick}>
                    Upload
                  </div>
                  <div className={styles.EditBtn}>
                    <a
                      href={assignmentUrls[i.assignment_id]}
                      download="assignemnt"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.dateHeader}>
                {moment(i.start_date).format("LL")}
              </div>
              <div className={styles.dateHeader}>
                {moment(i.due_date).format("LL")}
              </div>
              {/* <div className={styles.checkboxesWrapper}>
                <div className={styles.completeCheckbox}>
                  <label className={styles.completeContainer}>
                    Complete
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={event => console.log(event.target.checked)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div>
                  <label className={styles.notCompleteContainer}>
                    Not submit
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      onClick={event => console.log(event.target.checked)}
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
              </div> */}
              <div className={styles.checkboxesWrapper}>
                {i.student_score}/{i.max_score}
              </div>
              <div className={styles.checkboxesWrapper}>
                <Button
                  label={i.status == IDLE ? "Submit" : "Submitted"}
                  height={30}
                  borderRadius={8}
                  backgroundColor={"#f98e46"}
                  textStyle={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    fontSize: "12px"
                  }}
                  border="none"
                  disabled={i.status == IDLE ? false : true}
                  onClick={() => submitAssigmentResult(i)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={styles.finalAssesmentSection}>
        <div className={styles.finalHeading}>
          <div className={styles.finalDate}>1.</div>
          <div className={styles.finalTime}>
            <div className={styles.finalDate}>{finalAssesment?.title}</div>
            <div className={styles.uploadFileSize}>
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />
              <div className={styles.uploadFinalAssesmentBtn} onClick={onClick}>
                Upload
              </div>
              {!isMobileView && <div className={styles.fileSize}>25mb</div>}
            </div>
          </div>
        </div>
        <div className={styles.finalDateAndTime}>
          <div className={styles.finalDate}>{finalAssesment?.assign_date}</div>
          <div className={styles.finalTime}> 10:00 PM</div>
        </div>
        <div className={styles.mentorName}>
          <div className={styles.profile}>
            <Image
              src={"https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41"}
              circular
              alt="user-image"
              height={"24px"}
              width={"24px"}
            />
          </div>
          <div className={styles.name}>{finalAssesment?.mentor_name}</div>
        </div>
        <div className={styles.finalStatus}>
          <div className={styles.completeCheckbox}>
            <label className={styles.completeContainer}>
              Complete
              <input
                type="checkbox"
                className={styles.checkbox}
                onClick={event => console.log(event.target.checked)}
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </div>
      </div> */}
      <div className={styles.ebooksSection}>
        <div className={styles.syllabusWrapper}>
          <div className={styles.syllabusHeading}>Syllabus</div>
          <div className={styles.syylabusBox}>
            <div className={styles.eflyImage}>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fsyllabus.png?alt=media&token=282036ad-0e00-4540-b28d-3d0c7cefb569"
                }
                alt="user-image"
              />
            </div>
            <div className={styles.pdfDownload}>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FpdfImage.png?alt=media&token=dd36f672-6682-41b1-9e5a-8440e84be260"
                }
                alt="user-image"
                style={{ margin: "auto" }}
              />
              <div className={styles.pdfUploadTime}>Feb 7 2022, 10:00AM</div>
              <div className={styles.downloadIcon}>
                <a
                  href={resourse_data?.syllabus?.doc_url}
                  download="assignemnt"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Icon name="downloadIcon" width="26" height="26" />
                </a>
              </div>
              <div className={styles.fileSize}>167kb</div>
            </div>
          </div>
        </div>
        <div className={styles.ebookWrapper}>
          <div className={styles.syllabusHeading}>E-Book</div>
          <div className={styles.bookImageWrapper}>
            <div className={styles.ebookSections}>
              {[1].map((i, index) => (
                <a
                  key={index}
                  href={resourse_data?.e_book?.doc_url}
                  download="assignemnt"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fe-bookImage.png?alt=media&token=80ea315b-6ecc-4024-aa90-ab5e6fc97cca"
                    }
                    alt="user-image"
                    className={styles.eBook}
                  />
                </a>
              ))}
            </div>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fe-book.png?alt=media&token=8bfda71d-d955-40ff-be23-a9b78e423e2c"
              }
              alt="user-image"
              style={{ margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
