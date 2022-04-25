import React, { useRef, useContext, useEffect } from "react";
import styles from "./MyResourceTab.module.css";
import { Image } from "semantic-ui-react";
import Icon from "../../assets/Icon/Icon";
import { DeviceContext } from "../../pages/_app";
import { GlobalContext } from "../../Context/Provider";
import { getStudentAssignmentList } from "../../Context/Actions/Dashboard/DashboardAction";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";

export default function MyResourceTab({}) {
  const inputFile = useRef(null);
  const {
    studentDashboardState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const { isMobileView } = useContext(DeviceContext);
  useEffect(() => {
    getStudentAssignmentList()(dispatch);
  }, []);

  const onClick = e => {
    inputFile.current.click();
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
  //         src="/Images/no_data.png"
  //         alt="tremendo dashboard banner"
  //         height={isMobileView ? "300px" : "800px"}
  //         width={isMobileView ? "300px" : "700px"}
  //         className={styles.banner}
  //       />
  //     </div>
  //   );
  // }
  console.log(studentDashboardState.studentAssignmentList);
  const assignmentList = studentDashboardState.studentAssignmentList?.assigment;
  const finalAssesment =
    studentDashboardState.studentAssignmentList?.final_assessment;
  return (
    <div className={styles.base}>
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
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                  />

                  <div className={styles.uploadBtn} onClick={onClick}>
                    Upload
                  </div>
                  <div className={styles.EditBtn} onClick={onClick}>
                    View
                  </div>
                </div>
              </div>
              <div className={styles.dateHeader}>{i.assign_date}</div>
              <div className={styles.dateHeader}>{i.due_data}</div>
              <div className={styles.checkboxesWrapper}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.finalAssesmentSection}>
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
              src={"/Images/blank_profile.png"}
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
      </div>
      <div className={styles.ebooksSection}>
        <div className={styles.syllabusWrapper}>
          <div className={styles.syllabusHeading}>Syllabus</div>
          <div className={styles.syylabusBox}>
            <div className={styles.eflyImage}>
              <Image src={"/Images/syllabus.png"} alt="user-image" />
            </div>
            <div className={styles.pdfDownload}>
              <Image
                src={"/Images/pdfImage.png"}
                alt="user-image"
                style={{ margin: "auto" }}
              />
              <div className={styles.pdfUploadTime}>Feb 7 2022, 10:00AM</div>
              <div
                className={styles.downloadIcon}
                onClick={() => console.log("ss")}
              >
                <Icon name="downloadIcon" width="26" height="26" />
              </div>
              <div className={styles.fileSize}>167kb</div>
            </div>
          </div>
        </div>
        <div className={styles.ebookWrapper}>
          <div className={styles.syllabusHeading}>E-Book</div>
          <div className={styles.bookImageWrapper}>
            <div className={styles.ebookSections}>
              {[1, 1, 1, 1, 1].map((i, index) => (
                <Image
                  key={index}
                  src={"/Images/e-bookImage.png"}
                  alt="user-image"
                  className={styles.eBook}
                />
              ))}
            </div>
            <Image
              src={"/Images/e-book.png"}
              alt="user-image"
              style={{ margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
