import styles from "./MentorMyResource.module.css";
import { useEffect, useState } from "react";
import {
  Image,
  Popup,
  Icon,
  Modal,
  Button,
  Input,
  Dropdown,
  Dimmer,
  Loader,
  Message
} from "semantic-ui-react";
import IconComponent from "../../assets/Icon/Icon";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";
import ButtonComponent from "../Button/Button";
import DatePicker from "react-datepicker";
import moment from "moment";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import axiosInstance from "../../utils/axiosInstance";
import { GlobalContext } from "../../Context/Provider";
import {
  deleteAssignment,
  getMentorAssignmentList,
  getMentorDashboardData,
  getSubmittedAssignmentList
} from "../../Context/Actions/Dashboard/DashboardAction";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";

const IDLE_STATUS = "idle";
const UPLOAD_STATUS = "published";
export default function MentorMyResource() {
  const { isMobileView } = useContext(DeviceContext);
  const {
    studentDashboardState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);
  const [studentAssignmentListModal, setStudentAssignmentListModal] = useState(
    false
  );
  const [loading, setLoading] = useState(false);
  const [feilds, setFeilds] = useState({});
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
  useEffect(() => {
    getDashboardData();
    getMentorAssignmentList()(dispatch);
  }, []);

  const getDashboardData = async () => {
    const curr = new Date(); // get current date
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    const last = first + 6; // last day is the first day + 6

    const firstday = moment(new Date(curr.setDate(first))).format("x");
    const lastday = moment(new Date(curr.setDate(last))).format("x");

    const id =
      studentDashboardState.mentorBatches.length > 0 &&
      studentDashboardState.mentorBatches[0].batch_id;
    await getMentorDashboardData(id, firstday, lastday)(dispatch);
  };
  const onHandleChange = (data, type) => {
    setFeilds({ ...feilds, [type]: data });
  };
  const addAssignmentBtn = async () => {
    setLoading(true);
    const payload = {
      access_token: jsCookie.get(COOKIE_TOKEN),
      batch_id: studentDashboardState.mentorDashboardData.batch_data.batch_id,
      assignment_lang:
        studentDashboardState.mentorDashboardData.batch_data.batch_language,
      lang_code:
        studentDashboardState.mentorDashboardData.batch_data.language_code,
      ...feilds
    };
    try {
      const response = await axiosInstance.post(
        `/createCourseAssignment`,
        payload
      );
      await getMentorAssignmentList()(dispatch);
      setOpenModal(false);
      setLoading(false);
      setFeilds({});
    } catch (err) {
      setOpenModal(false);
      setLoading(false);
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

  const addAssignment = () => {
    return (
      <Modal
        onClose={() => setOpenModal(false)}
        open={openModal}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Add Assignment</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                value={feilds?.title}
                style={{ width: "100%" }}
                placeholder="Assignment Title"
                onChange={(e, data) => onHandleChange(data.value, "title")}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                value={feilds?.desc}
                style={{ width: "100%" }}
                placeholder="Assignment Description"
                onChange={(e, data) => onHandleChange(data.value, "desc")}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <DatePicker
                selected={feilds.start_date ? moment(feilds.start_date)._d : ""}
                onChange={date =>
                  onHandleChange(moment(date).format(), "start_date")
                }
                placeholderText="Assignment Start Date"
                customInput={<DateInput />}
                dateFormat="MMMM d, yyyy"
                maxDate={Date.now()}
                dropdownMode="select"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <DatePicker
                selected={feilds.due_date ? moment(feilds.due_date)._d : ""}
                onChange={date =>
                  onHandleChange(moment(date).format(), "due_date")
                }
                placeholderText="Assignment Due Date"
                customInput={<DateInput />}
                dateFormat="MMMM d, yyyy"
                maxDate={Date.now()}
                dropdownMode="select"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                value={feilds?.doc_urls}
                style={{ width: "100%" }}
                placeholder="Document Url"
                onChange={(e, data) => onHandleChange(data.value, "doc_urls")}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Dropdown
                fluid
                selection
                style={{ width: "100%" }}
                placeholder="Assignment Type"
                options={[
                  { text: "Unit Test", value: "ut" },
                  { text: "Final Test", value: "ft" }
                ]}
                value={feilds?.assigment_type}
                onChange={(e, data) =>
                  onHandleChange(data.value, "assigment_type")
                }
              />
            </div>
            <div className={styles.inputCreateWrapper}>
              <div style={{ width: "30%" }}>
                <Input
                  placeholder="Max Score "
                  onChange={(e, data) =>
                    onHandleChange(data.value, "max_score")
                  }
                  style={{ width: "80%" }}
                />
              </div>
              <div style={{ width: "30%" }}>
                <Input
                  placeholder="Pass Score "
                  onChange={(e, data) =>
                    onHandleChange(data.value, "pass_score")
                  }
                  style={{ width: "80%" }}
                />
              </div>
              <div style={{ width: "30%" }}>
                <Input
                  placeholder="Avg Score "
                  onChange={(e, data) =>
                    onHandleChange(data.value, "avg_score")
                  }
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpenModal(false)}>
            Close
          </Button>
          <Button
            content="Update Class"
            labelPosition="right"
            icon="checkmark"
            onClick={() => addAssignmentBtn()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };
  const noDataSection = () => {
    return (
      <Message>
        <Message.Header>Oops</Message.Header>
        <p>None Student Submit There Assignment</p>
      </Message>
    );
  };
  const studentAssigmentModal = () => {
    const studentList =
      studentDashboardState.getSubmittedAssignemntList.student_assignment_list;

    return (
      <Modal
        onClose={() => setStudentAssignmentListModal(false)}
        open={studentAssignmentListModal}
        closeIcon
      >
        <Modal.Header>Student Assignment</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.heading}>
                <span style={{ fontWeight: "600" }}>Title</span> :{" "}
                <span>
                  {studentDashboardState.getSubmittedAssignemntList.title}
                </span>
              </div>
              <div className={styles.heading}>
                <span style={{ fontWeight: "600" }}>Max Score</span> :{" "}
                <span>
                  {studentDashboardState.getSubmittedAssignemntList.max_score}
                </span>
              </div>
              <div className={styles.heading}>
                <span style={{ fontWeight: "600" }}>Passing Score</span> :{" "}
                <span>
                  {studentDashboardState.getSubmittedAssignemntList.pass_score}
                </span>
              </div>
            </div>
            <div className={styles.assigmentListTableHeader}>
              <div className={styles.tableHeaderName}>Student Name</div>
              <div className={styles.tableHeaderName}>ID</div>
              <div className={styles.tableHeaderName}>Download</div>
              <div className={styles.tableHeaderName}>Marks</div>
              <div className={styles.tableHeaderName}></div>
            </div>
            {studentList?.length > 0 ? (
              studentList?.map((i, index) => (
                <div className={styles.assigmentListTableBody} key={index}>
                  <div className={styles.tableBodyOption}>
                    {index + 1}. {i.user_name}
                  </div>
                  <div className={styles.tableBodyOption}>{i.user_id}</div>
                  <div className={styles.tableBodyOption}>
                    {" "}
                    <IconComponent name="downloadIcon" width="36" height="36" />
                  </div>
                  <div className={styles.tableBodyOption}>
                    <div>
                      <Input
                        value={i.student_score}
                        placeholder="Score"
                        onChange={(e, data) =>
                          onHandleChange(data.value, "title")
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.tableBodyOption}>
                    <div style={{ width: "50%" }}>
                      <ButtonComponent
                        label={"Send"}
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
                        onClick={() => setOpenModal(true)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>{noDataSection()}</div>
            )}
          </Modal.Description>
        </Modal.Content>
        {/* <Modal.Actions>
          <Button
            color="red"
            onClick={() => setStudentAssignmentListModal(false)}
          >
            Close
          </Button>
          <Button
            content="Update Class"
            labelPosition="right"
            icon="checkmark"
            onClick={() => addAssignmentBtn()}
            positive
            loading={loading}
          />
        </Modal.Actions> */}
      </Modal>
    );
  };
  const statusColors = {
    idle: "#fabf59",
    published: "#368825"
  };
  const onDeleteAssignment = async id => {
    setLoading(true);
    await deleteAssignment(id)(dispatch);
    await getMentorAssignmentList()(dispatch);
    setLoading(false);
  };
  const onPublishAssignment = async data => {
    setLoading(true);
    const payload = {
      access_token: jsCookie.get(COOKIE_TOKEN),
      assignment_id: data.assignment_id,
      status: UPLOAD_STATUS,
      batch_id: data.batch_id
    };
    try {
      const response = await axiosInstance.post(
        `/updateAssignmentStatus`,
        payload
      );
      await getMentorAssignmentList()(dispatch);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const openStudentAssignmentModal = async data => {
    setLoading(true);
    await getSubmittedAssignmentList(data.assignment_id)(dispatch);
    setLoading(false);
    setStudentAssignmentListModal(true);
  };
  if (studentDashboardState.mentorDashboardAssignmentListLoading) {
    return <StudentDashboardSkelton />;
  }

  return (
    <div className={styles.base}>
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
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
          <div className={styles.createFaqgbtn}>
            <ButtonComponent
              label={"Create Assignement"}
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
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
        <div className={styles.tableHeader}>
          <div className={styles.tableNo}>No.</div>
          <div className={styles.tableAssignmentTitle}>
            {isMobileView ? "Assg. Title" : "Assignment Title"}
          </div>
          <div className={styles.tableAssignDate}>Assign Date</div>
          <div className={styles.tableDueDate}>Due Date</div>
          <div className={styles.tableStatus}>Status</div>
        </div>
        {studentDashboardState.mentorDashboardAssignmentList?.map(
          (i, index) => (
            <div
              className={styles.tableBodySection}
              key={index}
              onClick={() => openStudentAssignmentModal(i)}
            >
              <div className={styles.tableNo}>{`0${index + 1}`}</div>
              <div className={styles.tableAssignmentTitle}>{i.title}</div>
              <div className={styles.tableAssignDate}>
                {moment(i.start_date).format("DD-MM-YYYY")}{" "}
                <span>
                  <Icon name="calendar alternate" />
                </span>
              </div>
              <div className={styles.tableDueDate}>
                {moment(i.due_date).format("DD-MM-YYYY")}{" "}
                <span>
                  <Icon name="calendar alternate" />
                </span>
              </div>
              <div className={`${styles.tableStatus} ${styles.statusOption}`}>
                <div
                  className={styles.statusBar}
                  style={{ backgroundColor: statusColors[i.status] }}
                ></div>
                <div>
                  <Popup
                    trigger={<Icon name="ellipsis vertical" />}
                    flowing
                    hoverable
                    position="bottom right"
                    style={{ padding: "0px" }}
                  >
                    {i.status == IDLE_STATUS && (
                      <div
                        className={styles.options}
                        onClick={() => onPublishAssignment(i)}
                      >
                        Upload
                      </div>
                    )}
                    <div className={styles.options}>Download</div>
                    <div
                      className={styles.options}
                      onClick={() => onDeleteAssignment(i.assignment_id)}
                    >
                      Delete
                    </div>
                  </Popup>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className={styles.syllabusEbookWrapper}>
        <div className={styles.mentorSyllabus}>
          <div className={styles.syllabus}>Syllabus</div>
          <div className={styles.pdf}>
            <Image src={"/Images/pdfImage.png"} alt="user-image" />
          </div>
          <Image
            src="/Images/mentor_syllabus.png"
            alt="image"
            rounded
            style={{ width: "100%" }}
          />
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
          <Image
            src="/Images/mentor_ebook.png"
            alt="image"
            rounded
            style={{ width: "100%" }}
          />
        </div>
      </div>
      {addAssignment()}
      {studentAssigmentModal()}
    </div>
  );
}
