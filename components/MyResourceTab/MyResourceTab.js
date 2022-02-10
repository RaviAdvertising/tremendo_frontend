import React, { useRef } from "react";
import styles from "./MyResourceTab.module.css";
import { Image } from "semantic-ui-react";

export default function MyResourceTab({}) {
  const inputFile = useRef(null);
  const assignmentData = [
    {
      name: "Assignment 1",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 2",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 3",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 4",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 5",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 6",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 7",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 8",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 9",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    },
    {
      name: "Assignment 10",
      issue_date: "Feb 04, 2022 12:00 PM",
      due_date: "Feb 10, 2022 12:00 PM"
    }
  ];
  const onClick = e => {
    inputFile.current.click();
  };
  return (
    <div className={styles.base}>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>Assignments</div>
        <div className={styles.heading}> Total: 07</div>
      </div>
      <div className={styles.assignmentTable}>
        <div className={styles.tableHeader}>
          <div className={styles.noHeader}>No.</div>
          <div className={styles.titleHeader}>Assignment Title</div>
          <div className={styles.dateHeader}>Assign Date</div>
          <div className={styles.dateHeader}>Due Date</div>
          <div className={styles.statusHeader}>Status</div>
        </div>
        <div className={styles.tableBody}>
          {assignmentData.map((i, index) => (
            <div className={styles.tableData} key={index}>
              <div className={styles.noHeader}>{index + 1}.</div>
              <div className={styles.uploadFileSection}>
                <div className={styles.assignmentName}>{i.name}</div>
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
                    Edit
                  </div>
                </div>
              </div>
              <div className={styles.dateHeader}>{i.issue_date}</div>
              <div className={styles.dateHeader}>{i.due_date}</div>
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
            <div className={styles.finalDate}>Final assessment </div>
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
              <div className={styles.fileSize}>25mb</div>
            </div>
          </div>
        </div>
        <div className={styles.finalDateAndTime}>
          <div className={styles.finalDate}>Feb 10, 2022</div>
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
          <div className={styles.name}>Mentor Name</div>
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
          <div className={styles.heading}>Syllabus</div>
          <div className={styles.syylabusBox}>Syllabus</div>
        </div>
        <div className={styles.ebookWrapper}>
          <div className={styles.heading}>E-Book</div>
        </div>
      </div>
    </div>
  );
}
