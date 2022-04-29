import styles from "./MentorBatchDetails.module.css";
import { useContext, useState, useEffect } from "react";
import {
  Dropdown,
  Icon,
  Pagination,
  Message,
  Modal,
  Input,
  Button,
  Dimmer,
  Loader
} from "semantic-ui-react";
import ButtonComponent from "../Button/Button";
import { GlobalContext } from "../../Context/Provider";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN, LOGIN_MENTOR_TAB } from "../../utils/constants";
import moment from "moment";
const PENDING = "Pending";
const APPROVE = "approve";
const DESAPPROVE = "deny";

export default function MentorBatchDetails({}) {
  const { homeState } = useContext(GlobalContext);
  const [mentorList, setMentorList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [createBatchData, setCreateBatchData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");

  const languageArray = homeState.getLanguage.map(i => {
    return {
      text: i.title,
      value: i.title
    };
  });
  useEffect(() => {
    getMentorList(homeState.getLanguage[0]?.id);
  }, []);

  const getMentorList = async code => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/getMentorList?access_token=${jsCookie.get(COOKIE_TOKEN)}&lang=${code}`
      );
      setMentorList(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const onHandleChangeBatch = (data, type) => {
    setCreateBatchData({ ...createBatchData, [type]: data.value });
  };
  const onCreateMentor = async () => {
    setLoading(true);
    const lang_code = homeState.getLanguage.find(
      i => i.title == createBatchData.language
    );
    const payload = {
      ...createBatchData,
      access_type: LOGIN_MENTOR_TAB,
      dob: "",
      phone_number: "",
      lang_code: lang_code.id
    };
    try {
      await axiosInstance.post(`/signup`, payload);
      setLoading(false);
      setOpenModal(false);
      getMentorList(selectedLang);
    } catch (err) {
      setLoading(false);
      setOpenModal(false);
    }
  };
  const addNewBatchModal = () => {
    return (
      <Modal
        onClose={() => setOpenModal(false)}
        open={openModal}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Create New Mentor</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Name"
                onChange={(e, data) => onHandleChangeBatch(data, "name")}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Dropdown
                fluid
                selection
                options={languageArray}
                onChange={(event, data) =>
                  onHandleChangeBatch(data, "language")
                }
                placeholder="Languages"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Email"
                onChange={(e, data) => onHandleChangeBatch(data, "email")}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <Input
                placeholder="Password"
                onChange={(e, data) => onHandleChangeBatch(data, "password")}
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
            content="Create Mentor"
            labelPosition="right"
            icon="checkmark"
            onClick={() => onCreateMentor()}
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
        <p>Please add some Mentors</p>
      </Message>
    );
  };

  const leaveOptions = [
    {
      text: "Pending",
      value: "pending"
    },
    {
      text: "Approved",
      value: "approve"
    },
    {
      text: "Reject",
      value: "deny"
    }
  ];
  const onSelectLeaveOption = async (data, leave_id) => {
    console.log(data);
    setLoading(true);
    try {
      const payload = {
        access_token: jsCookie.get(COOKIE_TOKEN),
        leave_id: leave_id,
        status: data.value
      };
      const response = await axiosInstance.post(`/updateMentorLeave`, payload);
      getMentorList(selectedLang);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const onChangeLanguage = data => {
    const languageCode = homeState.getLanguage.find(i => i.title == data.value);
    getMentorList(languageCode.id);
    setSelectedLang(languageCode.id);
  };
  const deleteMentor = async id => {
    setLoading(true);
    try {
      const response = await axiosInstance.delete(
        `/deleteUserAccount?access_token=${jsCookie.get(
          COOKIE_TOKEN
        )}&user_id=${id}`
      );
      getMentorList(selectedLang);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <div className={styles.base}>
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      <div className={styles.headingDropdownWrapper}>
        <div className={styles.heading}>Mentor Batch Details </div>
        <div className={styles.batchSelect}>
          <Dropdown
            className={styles.batchedDropdown}
            fluid
            selection
            defaultValue={languageArray[0]?.value}
            options={languageArray}
            onChange={(e, data) => onChangeLanguage(data)}
          />
        </div>
      </div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <div className={styles.headerName}>Mentor Name</div>
          <div className={styles.headerName}>Joining Date</div>
          <div className={styles.headerName}>Mentor Id</div>
          <div className={styles.headerName}>Batch no.</div>
          <div className={styles.headerName}>Leave</div>
          <div className={styles.headerName}>Delete</div>
        </div>
        {mentorList.length > 0
          ? mentorList.map((i, index) => {
              let backgroundColor = "#FFF7EB",
                color = "#f88312";
              if (i.leave_status == APPROVE) {
                (backgroundColor = "#EAFCFA"), (color = "#1d8180");
              } else if (i.leave_status == DESAPPROVE) {
                (backgroundColor = "#FCEBEB"), (color = "#f81712");
              }
              return (
                <div className={styles.tableBody} key={index}>
                  <div className={styles.headerName}>{i.name}</div>
                  <div className={styles.headerName}>
                    {moment(i.created_at).format("DD MMM,YYYY")}
                  </div>
                  <div className={styles.headerName}>{i.user_code}</div>
                  <div className={styles.headerName}>{i.batch_id}</div>
                  <div className={styles.headerName}>
                    {i.leave_status != "" ? (
                      <div className={styles.leaveOptionSelect}>
                        <Dropdown
                          className={styles.leaveOptionDropdown}
                          style={{
                            backgroundColor: backgroundColor,
                            color: color,
                            fontWeight: "600"
                          }}
                          fluid
                          selection
                          value={i.leave_status}
                          options={leaveOptions}
                          onChange={(e, data) =>
                            onSelectLeaveOption(data, i.leave_id)
                          }
                        />
                      </div>
                    ) : (
                      <div>Not Applied</div>
                    )}
                  </div>
                  <div
                    className={styles.headerName}
                    onClick={() => deleteMentor(i.user_code)}
                  >
                    <Icon name="trash alternate" size="large" color="red" />
                  </div>
                  <div></div>
                </div>
              );
            })
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
    </div>
  );
}
