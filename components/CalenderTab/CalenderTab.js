import React, { useState, useEffect } from "react";
import styles from "./CalenderTab.module.css";
import moment from "moment";
import { Icon, Dropdown } from "semantic-ui-react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";

export default function CalenderTab({}) {
  const [info, setInfo] = useState({});
  const [batchList, setBatchList] = useState([]);
  // if (true) {
  //   return <StudentDashboardSkelton />;
  // }
  useEffect(() => {
    getBatchList();
  }, []);
  const getBatchList = async () => {
    try {
      const response = await axiosInstance.get(
        `/getBatchList?access_token=${jsCookie.get(COOKIE_TOKEN)}&lang=all`
      );
      setBatchList(response.data.data);
    } catch (err) {}
  };
  const batched = batchList.map(i => {
    return {
      text: `${i.batch_language}-${i.batch_id}`,
      value: `${i.batch_language}-${i.batch_id}`
    };
  });
  const handleDateClick = arg => {
    console.log(arg.dateStr);
  };

  const onClickEvent = info => {
    console.log(info);
  };
  console.log(info);
  return (
    <div className={styles.base}>
      <div className={styles.batchSelect}>
        <Dropdown
          className={styles.batchedDropdown}
          fluid
          selection
          defaultValue={batched?.[0]?.value}
          options={batched}
        />
      </div>
      <div className={styles.calenderWrapper}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          height={600}
          events={[
            {
              title: "Arun Gupta -151-12",
              start: "2022-04-13",
              end: "2022-04-13",
              backgroundColor: "#EEF4FF",
              textColor: "#3D8BFF",
              className: styles.dateClass
            },
            {
              title: "",
              start: "2022-04-13T14:30:00",
              end: "2022-04-13T16:30:00",
              backgroundColor: "#EEF4FF",
              textColor: "#3D8BFF"
              // className: styles.dateClass
            },

            {
              title: "Nisha Rai -151-14",
              date: "2022-04-17",
              backgroundColor: "#F5FAF0",
              textColor: "#8FCB4D",
              className: styles.dateClass
            },
            {
              title: "",
              start: "2022-04-17T14:30:00",
              end: "2022-04-17T16:30:00",
              backgroundColor: "#F5FAF0",
              textColor: "#8FCB4D"
              // className: styles.dateClass
            },
            {
              title: "Ranjan -151-13",
              date: "2022-04-26",
              backgroundColor: "#FEF7F1",
              textColor: "orange",
              className: styles.dateClass
            },
            {
              title: "",
              start: "2022-04-26T14:30:00",
              end: "2022-04-26T16:30:00",
              backgroundColor: "#FEF7F1",
              textColor: "orange"
              // className: styles.dateClass
            },
            {
              title: "Neha -151-16",
              date: "2022-04-23",
              backgroundColor: "#FDF7FC",
              textColor: "#F4C5E7",
              className: styles.dateClass
            },
            {
              title: "",
              start: "2022-04-23T14:30:00",
              end: "2022-04-23T16:30:00",
              backgroundColor: "#FDF7FC",
              textColor: "#F4C5E7"
              // className: styles.dateClass
            }
          ]}
          displayEventTime={true}
          displayEventEnd={true}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: false
          }}
          eventClick={onClickEvent}
        />
      </div>
    </div>
  );
}
