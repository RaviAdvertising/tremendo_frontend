import styles from "./MentorBatchDetails.module.css";
import { useContext, useState, useEffect } from "react";
import { Dropdown, Icon, Pagination, Message } from "semantic-ui-react";
import Button from "../Button/Button";
import { GlobalContext } from "../../Context/Provider";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import moment from "moment";
const PENDING = "Pending";
const APPROVE = "Approved";
const DESAPPROVE = "Reject";

export default function MentorBatchDetails({}) {
  const { homeState } = useContext(GlobalContext);
  const [mentorList, setMentorList] = useState([]);
  const languageArray = homeState.getLanguage.map(i => {
    return {
      text: i.title,
      value: i.title
    };
  });
  useEffect(() => {
    getMentorList(homeState.getLanguage[0].id);
  }, []);

  const getMentorList = async code => {
    try {
      const response = await axiosInstance.get(
        `/getMentorList?access_token=${jsCookie.get(COOKIE_TOKEN)}&lang=${code}`
      );
      setMentorList(response.data.data);
    } catch (err) {}
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
      value: "Pending"
    },
    {
      text: "Approved",
      value: "Approved"
    },
    {
      text: "Reject",
      value: "Reject"
    }
  ];
  const onSelectLeaveOption = data => {
    console.log(data);
  };
  const onChangeLanguage = data => {
    const languageCode = homeState.getLanguage.find(i => i.title == data.value);
    getMentorList(languageCode.id);
  };
  const deleteMentor = async id => {
    //id
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
            defaultValue={languageArray[0].value}
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
          <div className={styles.headerName}>Delete</div>
          <div className={styles.headerName}></div>
        </div>
        {mentorList.length > 0
          ? mentorList.map((i, index) => {
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
                  <div className={styles.headerName}>
                    {moment(i.created_at).format("DD MMM,YYYY")}
                  </div>
                  <div className={styles.headerName}>{i.user_code}</div>
                  <div className={styles.headerName}>{i.user_code}</div>
                  {/* <div className={styles.headerName}>
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
              </div> */}
                  <div
                    className={styles.headerName}
                    onClick={() => deleteMentor(i.user_code)}
                  >
                    <Icon name="trash alternate" size="large" color="red" />
                  </div>
                </div>
              );
            })
          : noDataSection()}
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
