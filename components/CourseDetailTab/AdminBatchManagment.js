import Cookies from "js-cookie";
import moment from "moment";
import React, { useState, useEffect, useContext } from "react";
import {
  Dropdown,
  Icon,
  Pagination,
  Modal,
  Input,
  Button,
  Message,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { GlobalContext } from "../../Context/Provider";
import axiosInstance from "../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../utils/constants";
import ButtonComponent from "../Button/Button";
import styles from "./AdminBatchManagment.module.css";
import DatePicker from "react-datepicker";

export default function AdminBatchManagment({}) {
  const { homeState } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);
  const [batchReplacementModal, setBatchReplacementModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createBatchData, setCreateBatchData] = useState({});
  const [mentorList, setMentorList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [newBatchCode, setNewBatchCode] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  useEffect(() => {
    getMentorList();
    getBatchList();
  }, []);

  const getMentorList = async () => {
    try {
      const response = await axiosInstance.get(
        `/getMentorList?access_token=${Cookies.get(COOKIE_TOKEN)}&lang=all`
      );
      setMentorList(response.data.data);
    } catch (err) {}
  };

  const getStudentsAccordingToBatch = async id => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/getBatchStudentList?access_token=${Cookies.get(
          COOKIE_TOKEN
        )}&batch_id=${id}`
      );
      setStudentList(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const getBatchList = async () => {
    try {
      const response = await axiosInstance.get(
        `/getBatchList?access_token=${Cookies.get(COOKIE_TOKEN)}&lang=all`
      );
      setBatchList(response.data.data);
      getStudentsAccordingToBatch(response.data.data[0].batch_id);
    } catch (err) {}
  };
  const onChangeBatchFilter = async id => {
    const selectedId = id.split("-")[1];
    getStudentsAccordingToBatch(selectedId);
    setSelectedBatch(selectedId);
  };
  const batches = batchList.map(i => {
    return {
      text: `${i.batch_language}-${i.batch_id}`,
      value: `${i.batch_language}-${i.batch_id}`
    };
  });
  const onHandleChangeBatch = (data, type) => {
    console.log(data);
    setCreateBatchData({ ...createBatchData, [type]: data.value });
  };

  const onCreateBatch = async () => {
    setLoading(true);
    const languageCode = homeState.getLanguage.find(
      i => i.title == createBatchData.batch_language
    );
    const mentorId = mentorList.find(
      i => i.name == createBatchData.batch_mentor
    );
    const payload = {
      ...createBatchData,
      access_token: Cookies.get(COOKIE_TOKEN),
      language_code: languageCode.id,
      batch_mentor_id: mentorId.user_code,
      batch_class_days: createBatchData.batch_class_days?.join(","),
      batch_starting_date: moment(createBatchData.batch_starting_date).format(
        "DD/MM/YYYY"
      )
    };
    try {
      const response = await axiosInstance.post(`/createNewBatch`, payload);
      getBatchList();
      setLoading(false);
      setOpenModal(false);
    } catch (err) {
      setLoading(false);
      setOpenModal(false);
    }
  };
  const languageArray = homeState.getLanguage.map(i => {
    return {
      text: i.title,
      value: i.title
    };
  });
  const mentorDropdownOption = mentorList.map(i => {
    return {
      text: i.name,
      value: i.name
    };
  });
  const options = [
    { key: "Monday", text: "Monday", value: "Monday" },
    { key: "Tuesday", text: "Tuesday", value: "Tuesday" },
    { key: "Wednesday", text: "Wednesday", value: "Wednesday" },
    { key: "Thursday", text: "Thursday", value: "Thursday" },
    { key: "Friday", text: "Friday", value: "Friday" },
    { key: "Saturday", text: "Saturday", value: "Saturday" },
    { key: "Sunday", text: "Sunday", value: "Sunday" }
  ];
  const DateInput = ({ value, onClick, placeholder }) => {
    return (
      <button
        className={styles.dateInput}
        style={{
          width: "186px",
          color: "#66666d",
          border: "1px solid #cecedc",
          height: "38px",
          paddingLeft: "8px",
          fontFamily: "Poppins",
          backgroundColor: "#fff",
          textAlign: "left"
        }}
        onClick={onClick}
      >
        {value ? value : placeholder}
      </button>
    );
  };
  console.log(createBatchData);
  const addNewBatchModal = () => {
    return (
      <Modal
        onClose={() => setOpenModal(false)}
        open={openModal}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Create New Batch</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Dropdown
                fluid
                selection
                options={languageArray}
                onChange={(event, data) =>
                  onHandleChangeBatch(data, "batch_language")
                }
                placeholder="Select Languages"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Dropdown
                fluid
                selection
                options={mentorDropdownOption}
                onChange={(event, data) =>
                  onHandleChangeBatch(data, "batch_mentor")
                }
                placeholder="Select Mentor"
              />
            </div>
            <div className={styles.inputCreateWrapper}>
              <div>
                <Input
                  placeholder="Start Time eg. 2:00pm"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_start_time")
                  }
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <Input
                  placeholder="End Time eg. 4:00pm"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_end_time")
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className={styles.inputCreateWrapper}>
              <div>
                <DatePicker
                  selected={createBatchData.batch_starting_date}
                  onChange={date =>
                    onHandleChangeBatch({ value: date }, "batch_starting_date")
                  }
                  placeholderText="Start Date"
                  customInput={<DateInput />}
                  dateFormat="MMMM d, yyyy"
                  minDate={Date.now()}
                  dropdownMode="select"
                />
              </div>
              <div>
                <DatePicker
                  selected={createBatchData.batch_end_date}
                  onChange={date =>
                    onHandleChangeBatch({ value: date }, "batch_end_date")
                  }
                  placeholderText="End Date"
                  customInput={<DateInput />}
                  dateFormat="MMMM d, yyyy"
                  minDate={
                    createBatchData.batch_starting_date
                      ? createBatchData.batch_starting_date
                      : Date.now()
                  }
                  dropdownMode="select"
                />
              </div>
            </div>
            <div className={styles.inputCreateWrapper}>
              <div>
                <Input
                  placeholder="Batch Capacity"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_capcity")
                  }
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <Input
                  placeholder="Total Classes"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_total_classes")
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className={styles.inputCreateWrapper}>
              <div>
                <Input
                  placeholder="Total Time (Hrs)"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_total_time")
                  }
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <Input
                  placeholder="Week type"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_week_type")
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className={styles.inputCreateWrapper}>
              <div>
                <Input
                  placeholder="Batch Purchase Price"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_purchase_price")
                  }
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <Input
                  placeholder="Batch Orignal Price"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_original_price")
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Meeting Link"
                onChange={(e, data) => onHandleChangeBatch(data, "class_link")}
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <Dropdown
                placeholder="Batch Class Days"
                fluid
                multiple
                selection
                onChange={(e, data) =>
                  onHandleChangeBatch(data, "batch_class_days")
                }
                options={options}
                style={{ width: "100%" }}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpenModal(false)}>
            Close
          </Button>
          <Button
            content="Create Batch"
            labelPosition="right"
            icon="checkmark"
            onClick={() => onCreateBatch()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };
  const onUpdateBatch = async () => {
    setLoading(true);
    const payload = {
      access_token: Cookies.get(COOKIE_TOKEN),
      new_batch_id: newBatchCode.split("-")[1],
      student_batch_id: batchReplacementModal.student_batch_id
    };
    try {
      const response = await axiosInstance.post(`/updateStudentBatch`, payload);
      setLoading(false);
      setBatchReplacementModal(null);
      getStudentsAccordingToBatch(selectedBatch);
    } catch (err) {
      setLoading(false);
      setBatchReplacementModal(null);
    }
  };
  const batchReplacementModalSection = () => {
    return (
      <Modal
        onClose={() => setBatchReplacementModal(null)}
        open={batchReplacementModal != null ? true : false}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Swap Batches</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                value={batchReplacementModal?.batch_id}
                disabled
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Dropdown
                fluid
                selection
                placeholder="New batch"
                options={batches}
                onChange={(event, data) => setNewBatchCode(data.value)}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setBatchReplacementModal(null)}>
            Close
          </Button>
          <Button
            content="Update Batch"
            labelPosition="right"
            icon="checkmark"
            onClick={() => onUpdateBatch()}
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
        <p>Please add some student into batches</p>
      </Message>
    );
  };
  return (
    <div className={styles.base}>
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      <div className={styles.headingDropdownWrapper}>
        <div className={styles.heading}>Student Batch Details </div>
        <div className={styles.batchSelect}>
          <Dropdown
            className={styles.batchedDropdown}
            fluid
            selection
            placeholder="Select batches"
            defaultValue={batches[0] && batches[0].value}
            options={batches}
            onChange={(event, data) => onChangeBatchFilter(data.value)}
          />
        </div>
      </div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <div className={styles.headerName}>Student Name</div>
          <div className={styles.headerName}>Joining Date</div>
          <div className={styles.headerName}>Student Id</div>
          <div className={styles.headerName}>
            Replacement <br></br>(Batch no.)
          </div>
          <div className={styles.headerName}>Mentor</div>
          <div className={styles.headerName}></div>
        </div>
        {studentList.length > 0
          ? studentList?.map((i, index) => (
              <div className={styles.tableBody} key={index}>
                <div className={styles.headerName}>{i.user_name}</div>
                <div className={styles.headerName}>
                  {moment(i.created_at).format("DD MMM,YYYY")}
                </div>
                <div className={styles.headerName}>{i.student_batch_id}</div>
                <div
                  className={styles.headerName}
                  style={{ textDecoration: "underline" }}
                  onClick={() => setBatchReplacementModal(i)}
                >
                  {i.batch_id}
                </div>
                <div className={styles.headerName}>{i.mentor_name}</div>
                {/* <div className={styles.headerName}>
              <Icon name="trash alternate" size="large" color="red" />
            </div> */}
              </div>
            ))
          : noDataSection()}
      </div>
      <div className={styles.btnPaginationWrapper}>
        <div className={styles.createBtn}>
          <ButtonComponent
            label={"Create new ID"}
            height={45}
            backgroundColor={"#f98e46"}
            textStyle={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Open Sans",
              fontSize: "18px"
            }}
            border="none"
            onClick={() => setOpenModal(true)}
          />
        </div>
        {/* <div className={styles.pagination}>
          <Pagination
            boundaryRange={0}
            defaultActivePage={2}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={10}
          />
        </div> */}
      </div>
      {addNewBatchModal()}
      {batchReplacementModalSection()}
    </div>
  );
}
