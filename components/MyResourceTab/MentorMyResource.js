import styles from "./MentorMyResource.module.css";

export default function MentorMyResource() {
  return (
    <div className={styles.base}>
      <div className={styles.myAssignment}>
        <div className={styles.statusHeadingWrapper}>
          <div className={styles.myAssignmentHeading}>My Assignments</div>
          <div className={styles.statusWrapper}>
            <div className={styles.statusHeading}>Status</div>
            <div className={styles.colorTitleWrapper}>
              <div
                className={styles.color}
                style={{ backgroundColor: "#FABF59" }}
              ></div>
              <div className={styles.title}>Uploaded</div>
            </div>
            <div className={styles.colorTitleWrapper}>
              <div
                className={styles.color}
                style={{ backgroundColor: "#368825" }}
              ></div>
              <div className={styles.title}>Done</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
