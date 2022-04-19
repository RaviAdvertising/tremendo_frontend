import Cookies from "js-cookie";
import React, { useState, useEffect, useContext } from "react";
import {
  Dropdown,
  Icon,
  Pagination,
  Modal,
  Input,
  Button
} from "semantic-ui-react";
import { GlobalContext } from "../../Context/Provider";
import axiosInstance from "../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../utils/constants";
import ButtonComponent from "../Button/Button";
import styles from "./AdminBatchManagment.module.css";

export default function AdminBatchManagment({}) {
  const { homeState } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createBatchData, setCreateBatchData] = useState({});
  const [mentorList, setMentorList] = useState([]);
  const [batchList, setBatchList] = useState([]);

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
  const getBatchList = async () => {
    try {
      const response = await axiosInstance.get(
        `/getBatchList?access_token=${Cookies.get(COOKIE_TOKEN)}&lang=all`
      );
      setBatchList(response.data.data);
    } catch (err) {}
  };

  const batches = batchList.map(i => {
    return {
      text: `${i.batch_language}-${i.batch_id}`,
      value: `${i.batch_language}-${i.batch_id}`
    };
  });
  const onHandleChangeBatch = (data, type) => {
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
      batch_mentor_id: mentorId.user_code
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
                <Input
                  placeholder="Start Date eg. dd/mm/yyyy"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_starting_date")
                  }
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <Input
                  placeholder="End Date eg. dd/mm/yyyy"
                  onChange={(e, data) =>
                    onHandleChangeBatch(data, "batch_end_date")
                  }
                  style={{ width: "100%" }}
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
                  placeholder="Total Time"
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

  return (
    <div className={styles.base}>
      <div className={styles.headingDropdownWrapper}>
        <div className={styles.heading}>Student Batch Details </div>
        <div className={styles.batchSelect}>
          <Dropdown
            className={styles.batchedDropdown}
            fluid
            selection
            defaultValue={batches[0] && batches[0].value}
            options={batches}
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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
          <div className={styles.tableBody} key={index}>
            <div className={styles.headerName}>Aman Bhatia</div>
            <div className={styles.headerName}>20 Mar, 2018</div>
            <div className={styles.headerName}>155-29</div>
            <div className={styles.headerName}>EG001</div>
            <div className={styles.headerName}>Aarushi Patel</div>
            {/* <div className={styles.headerName}>
              <Icon name="trash alternate" size="large" color="red" />
            </div> */}
          </div>
        ))}
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
