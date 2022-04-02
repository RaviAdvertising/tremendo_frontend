import { Dropdown, Icon, Pagination } from "semantic-ui-react";
import Button from "../Button/Button";
import styles from "./AdminBatchManagment.module.css";

export default function AdminBatchManagment({}) {
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
  return (
    <div className={styles.base}>
      <div className={styles.headingDropdownWrapper}>
        <div className={styles.heading}>Student Batch Details </div>
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
            <div className={styles.headerName}>
              <Icon name="trash alternate" size="large" color="red" />
            </div>
          </div>
        ))}
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
