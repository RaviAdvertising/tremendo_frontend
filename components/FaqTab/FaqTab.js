import Icon from "../../assets/Icon/Icon";
import styles from "./FaqTab.module.css";
import { useEffect, useState } from "react";

export default function FaqTab({}) {
  const [openState, setOpenState] = useState([2]);

  const faqs = [
    {
      id: 1,
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard."
    },
    {
      id: 2,
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard."
    },
    {
      id: 3,
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard."
    },
    {
      id: 4,
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard."
    },
    {
      id: 5,
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard."
    },
    {
      id: 6,
      question: "Lorem Ipsum is simply dummy text?",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard."
    }
  ];
  const openSection = id => {
    let currentState = openState;
    const findId = currentState.indexOf(id);
    if (findId === -1) {
      currentState.push(id);
    } else {
      currentState.splice(findId, 1);
    }
    setOpenState(currentState);
  };
  //   useEffect(() => {}, [openState]);
  console.log(openState);
  return (
    <div className={styles.base}>
      <div className={styles.heading}>FAQs</div>
      <div className={styles.wrapper}>
        <div className={styles.faqBoxWrapper}>
          {faqs.map(i => (
            <div className={styles.faqBox} key={i.id}>
              <div className={styles.questionWrapper}>
                <div className={styles.questionName}>
                  {`${i.id}. ${i.question}`}
                </div>
                <div
                  className={styles.arrowIcon}
                  style={{
                    transform: openState.includes(i.id)
                      ? "rotate(180deg)"
                      : "rotate(0deg)"
                  }}
                  onClick={() => openSection(i.id)}
                >
                  <Icon name="downArrow" />
                </div>
              </div>
              {openState.includes(i.id) && (
                <div className={styles.answerWrapper}>
                  <div className={styles.borderTop}></div>
                  <div className={styles.answer}>{i.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
