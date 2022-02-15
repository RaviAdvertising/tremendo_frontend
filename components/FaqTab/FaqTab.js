import React from "react";
import Icon from "../../assets/Icon/Icon";
import styles from "./FaqTab.module.css";
import { Image } from "semantic-ui-react";
import Button from "../Button/Button";

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
export default class FaqTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openState: []
    };
  }
  openSection = id => {
    let currentState = this.state.openState;
    const findId = currentState.indexOf(id);
    if (findId === -1) {
      currentState.push(id);
    } else {
      currentState.splice(findId, 1);
    }
    this.setState({
      openState: currentState
    });
  };
  render() {
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
                      transform: this.state.openState.includes(i.id)
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }}
                    onClick={() => this.openSection(i.id)}
                  >
                    <Icon name="downArrow" />
                  </div>
                </div>
                {this.state.openState.includes(i.id) && (
                  <div className={styles.answerWrapper}>
                    <div className={styles.borderTop}></div>
                    <div className={styles.answer}>{i.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.textAreaWrapper}>
          <div className={styles.textArea}>
            <div className={styles.heading}>Have a question?</div>
            <textarea className={styles.textAreaSection}></textarea>
            <div className={styles.sendButton}>
              <Button
                label={"Send"}
                height={34}
                borderRadius={10}
                backgroundColor="#f58720"
                textStyle={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                  fontSize: "15px"
                }}
                border="none"
                onClick={() => sendQuestion()}
              />
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={"/Images/faqQuestion.png"} alt="faqQuestion" />
          </div>
        </div>
      </div>
    );
  }
}
