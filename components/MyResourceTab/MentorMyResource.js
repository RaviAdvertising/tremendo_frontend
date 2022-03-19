import styles from "./MentorMyResource.module.css";
import { useEffect } from "react";
import { Image, Popup, Icon } from "semantic-ui-react";
import IconComponent from "../../assets/Icon/Icon";

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
        <div className={styles.tableHeader}>
          <div className={styles.tableNo}>No.</div>
          <div className={styles.tableAssignmentTitle}>Assignment Title</div>
          <div className={styles.tableAssignDate}>Assign Date</div>
          <div className={styles.tableDueDate}>Due Date</div>
          <div className={styles.tableStatus}>Status</div>
        </div>
        {[
          { id: 1, color: "#368825" },
          { id: 2, color: "#FABF59" },
          { id: 3, color: "#FABF59" },
          { id: 4, color: "#FABF59" }
        ].map(i => (
          <div className={styles.tableBodySection} key={i.id}>
            <div className={styles.tableNo}>{`0${i.id}`}</div>
            <div className={styles.tableAssignmentTitle}>Assignment Title</div>
            <div className={styles.tableAssignDate}>
              03-03-2022{" "}
              <span>
                <Icon name="calendar alternate" />
              </span>
            </div>
            <div className={styles.tableDueDate}>
              07-03-2022{" "}
              <span>
                <Icon name="calendar alternate" />
              </span>
            </div>
            <div className={`${styles.tableStatus} ${styles.statusOption}`}>
              <div
                className={styles.statusBar}
                style={{ backgroundColor: i.color }}
              ></div>
              <div>
                <Popup
                  trigger={<Icon name="ellipsis vertical" />}
                  flowing
                  hoverable
                  position="bottom right"
                  style={{ padding: "0px" }}
                >
                  <div className={styles.options}>Upload</div>
                  <div className={styles.options}>Download</div>
                  <div className={styles.options}>Delete</div>
                </Popup>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.syllabusEbookWrapper}>
        <div className={styles.mentorSyllabus}>
          <div className={styles.syllabus}>Syllabus</div>
          <div className={styles.pdf}>
            <Image src={"/Images/pdfImage.png"} alt="user-image" />
          </div>
          <Image src="/Images/mentor_syllabus.png" alt="image" rounded />
          <div className={styles.downloadIcon}>
            <IconComponent name="downloadIcon" width="36" height="36" />
          </div>
        </div>
        <div className={styles.mentorEbooks}>
          <div className={styles.syllabus}>E-Book</div>
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
          <Image src="/Images/mentor_ebook.png" alt="image" rounded />
        </div>
      </div>
    </div>
  );
}
