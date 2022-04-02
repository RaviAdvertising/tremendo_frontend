import styles from "./MentorBatchDetails.module.css";
import { Dropdown, Icon, Pagination } from "semantic-ui-react";
import Button from "../Button/Button";
const PENDING = "Pending";
const APPROVE = "Approved";
const DESAPPROVE = "Disapproved";

export default function MentorBatchDetails({}) {
  const batches = [
    {
      text: "Batches - EG001",
      value: "Batches - EG001"
    },
    {
      text: "Batches - EG002",
      value: "Batches - EG002"
    },
    {
      text: "Batches - EG003",
      value: "Batches - EG003"
    },
    {
      text: "Batches - EG004",
      value: "Batches - EG004"
    }
  ];
  const dummyData = [
    {
      id: 1,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Not Applied",
      isSelectedLeave: false
    },
    {
      id: 2,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Not Applied",
      isSelectedLeave: false
    },
    {
      id: 3,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Pending",
      isSelectedLeave: true
    },
    {
      id: 4,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Approved",
      isSelectedLeave: true
    },
    {
      id: 5,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Disapproved",
      isSelectedLeave: true
    },
    {
      id: 6,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Not Applied",
      isSelectedLeave: false
    },
    {
      id: 7,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Not Applied",
      isSelectedLeave: false
    },
    {
      id: 8,
      name: "Namita Gupta",
      date: "18 Apr, 2018",
      mentor_id: "154-26",
      batch: "EG001",
      leave: "Not Applied",
      isSelectedLeave: false
    }
  ];
  const leaveOptions = [
    {
      text: "Pending",
      value: "Pending"
    },
    {
      text: "Approved",
      value: "Approved"
    },
    {
      text: "Disapproved",
      value: "Disapproved"
    }
  ];
  const onSelectLeaveOption = data => {
    console.log(data);
  };
  return (
    <div className={styles.base}>
      <div className={styles.headingDropdownWrapper}>
        <div className={styles.heading}>Mentor Batch Details </div>
        <div className={styles.batchSelect}>
          <Dropdown
            className={styles.batchedDropdown}
            fluid
            selection
            defaultValue={batches[0].value}
            options={batches}
          />
        </div>
      </div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <div className={styles.headerName}>Mentor Name</div>
          <div className={styles.headerName}>Joining Date</div>
          <div className={styles.headerName}>Mentor Id</div>
          <div className={styles.headerName}>
            Replacement <br></br>(Batch no.)
          </div>
          <div className={styles.headerName}>Leave</div>
          <div className={styles.headerName}></div>
        </div>
        {dummyData.map((i, index) => {
          let backgroundColor = "#FFF7EB",
            color = "#f88312";
          if (i.leave == APPROVE) {
            (backgroundColor = "#EAFCFA"), (color = "#1d8180");
          } else if (i.leave == DESAPPROVE) {
            (backgroundColor = "#FCEBEB"), (color = "#f81712");
          }
          return (
            <div className={styles.tableBody} key={index}>
              <div className={styles.headerName}>{i.name}</div>
              <div className={styles.headerName}>{i.date}</div>
              <div className={styles.headerName}>{i.mentor_id}</div>
              <div className={styles.headerName}>{i.batch}</div>
              <div className={styles.headerName}>
                {i.isSelectedLeave ? (
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
                      value={i.leave}
                      options={leaveOptions}
                      onChange={(e, data) => onSelectLeaveOption(data)}
                    />
                  </div>
                ) : (
                  i.leave
                )}
              </div>
              <div className={styles.headerName}>
                <Icon name="trash alternate" size="large" color="red" />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.btnPaginationWrapper}>
        <div className={styles.createBtn}>
          <Button
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
            onClick={() => console.log("start")}
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
    </div>
  );
}
