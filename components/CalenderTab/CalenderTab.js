import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./CalenderTab.module.css";
import moment from "moment";
import {
  Icon,
  Dropdown,
  Dimmer,
  Loader,
  Modal,
  Button,
  Input
} from "semantic-ui-react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";

export default function CalenderTab({}) {
  const [info, setInfo] = useState("");
  const [batchList, setBatchList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [classes, setClasses] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getBatchList();
  }, []);

  const getBatchList = async () => {
    try {
      const response = await axiosInstance.get(
        `/getBatchList?access_token=${jsCookie.get(COOKIE_TOKEN)}&lang=all`
      );
      setBatchList(response.data.data);
      setSelectedBatch(response.data.data[0].batch_id);
      getCalenderData(response.data.data[0].batch_id);
    } catch (err) {}
  };
  const getCalenderData = async id => {
    setLoading(true);
    const date = new Date();
    const firstDay = moment(
      new Date(date.getFullYear(), date.getMonth(), 1)
    ).format("x");
    const lastDay = moment(
      new Date(date.getFullYear(), date.getMonth() + 1, 0)
    ).format("x");

    try {
      const response = await axiosInstance.get(
        `/getAdminCalendar?access_token=${jsCookie.get(
          COOKIE_TOKEN
        )}&batch_id=${id}&startsAt=${firstDay}&endsAt=${lastDay}`
      );
      setClasses(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const batched = batchList.map(i => {
    return {
      text: `${i.batch_language}-${i.batch_id}`,
      value: i.batch_id
    };
  });
  const handleDateClick = arg => {
    console.log(arg.dateStr);
  };

  const onClickEvent = info => {
    const selectedClasses = classes.find(i => i.class_id == info.event.id);
    setInfo(selectedClasses);
    setOpenModal(true);
  };
  const onChangeBatch = async data => {
    setSelectedBatch(data.value);
    await getCalenderData(data.value);
  };
  const goToLink = link => {
    const url = link.includes("https") ? link : `https://${link}`;
    window.open(url, "_blank");
  };
  const EventDetail = ({ event, el }) => {
    const content = (
      <div>
        {event.title}
        <div>{event.extendedProps.description}</div>
      </div>
    );
    ReactDOM.render(content, el);
    return el;
  };
  const classes_name = [];

  classes.forEach((i, index) => {
    return classes_name.push({
      id: i.class_id,
      title: `${i.class_start_time}:${i.class_end_time}`,
      start: moment(i.class_date).format("YYYY-MM-DD"),
      end: moment(i.class_date).format("YYYY-MM-DD"),
      backgroundColor: "#EEF4FF",
      textColor: "#3D8BFF",
      className: styles.dateClass,
      description: i.batch_mentor
    });
  });

  return (
    <div className={styles.base}>
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      <div className={styles.batchSelect}>
        <Dropdown
          className={styles.batchedDropdown}
          fluid
          selection
          value={selectedBatch}
          options={batched}
          onChange={(e, data) => onChangeBatch(data)}
        />
      </div>
      <div className={styles.calenderWrapper}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          height={600}
          events={classes_name}
          displayEventTime={true}
          displayEventEnd={true}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: false
          }}
          eventClick={onClickEvent}
          eventDidMount={EventDetail}
        />
      </div>
      <div>
        <Modal
          onClose={() => setOpenModal(false)}
          open={openModal}
          closeIcon
          size={"tiny"}
        >
          <Modal.Header>Link</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <div style={{ marginBottom: "20px" }}>
                <Input
                  value={info.batch_language}
                  disabled
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Input
                  value={info.batch_mentor}
                  disabled
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Input value={info.class_link} style={{ width: "100%" }} />
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpenModal(false)}>
              Close
            </Button>
            <Button
              content="Go to Link"
              labelPosition="right"
              icon="checkmark"
              onClick={() => goToLink(info.class_link)}
              positive
            />
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
}
