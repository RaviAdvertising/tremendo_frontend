import React, { useState, useEffect, useContext } from "react";
import styles from "./index.module.css";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";

const STUDENT_COLOR = "#ABA9C3";
const MENTOR_COLOR = "#DCCCBB";

export default function ContactList({}) {
  const [selected, setSelected] = useState(0);

  const [loading, setLoading] = useState(false);

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContactList();
  }, []);

  const getContactList = async () => {
    try {
      const response = await axiosInstance.get(
        `/getContactUsList?access_token=${Cookies.get(COOKIE_TOKEN)}`
      );
      setContactList(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const toggleSelectedOption = index => {
    setSelected(index);
  };

  return (
    <div className={styles.base}>
      <div className={styles.faqWrapper}>
        <div className={styles.headingBtnWrapper}>
          <div className={styles.heading}>Contact List</div>
        </div>
        <div className={styles.listSection}>
          {contactList.length > 0 &&
            contactList.map((contact, index) => (
              <div
                className={styles.faqStripWrapper}
                key={index}
                onClick={() => toggleSelectedOption(index)}
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div className={styles.stripIconWrapper}>
                  <div
                    className={styles.faqStrip}
                    style={{ color: selected == index ? "#218dfa" : "#333333" }}
                  >
                    <span>{index + 1}.</span>
                    <span>{`${contact.user_name} ( ${contact.email_address} ) -- ${contact.language}`}</span>
                  </div>
                </div>
                {selected == index && (
                  <div className={styles.answerWrapper}>
                    <div>Mobile:- {contact.phone_num}</div>
                    <div>Purpose:- {contact.purpose}</div>
                    <div>Message:- {contact.message}</div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
