import React from "react";
import styles from "./MentorFaq.module.css";
import { Image } from "semantic-ui-react";
import Button from "../Button/Button";
import Icon from "../../assets/Icon/Icon";
import DesktopOnly from "../DeviceCheck/DesktopOnly";

export default class MentorFaq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openState: [1]
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
        <div className={styles.faqWrapper}>
          <DesktopOnly>
            <div>
              <Image src="/Images/mentor_faq.png" alt="mentor faq" />
            </div>
          </DesktopOnly>
          <div className={styles.faqBoxWrapper}>
            <div className={styles.heading}>FAQ</div>
            {[1, 2, 3, 4].map((i, index) => (
              <div className={styles.faqBox} key={index}>
                <div className={styles.questionWrapper}>
                  <div className={styles.questionName}>
                    {`1. Lorem Ipsum is simply dummy text?`}
                  </div>
                  <div
                    className={styles.arrowIcon}
                    style={{
                      transform: "rotate(0deg)"
                    }}
                    onClick={() => this.openSection(i)}
                  >
                    <Icon name="downArrow" />
                  </div>
                </div>
                {this.state.openState.includes(i) && (
                  <div className={styles.answerWrapper}>
                    <div className={styles.borderTop}></div>
                    <div className={styles.answer}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard.
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.textAreaWrapper}>
          <div className={styles.textAreaBox}>
            <div className={styles.heading}>Have a question?</div>
            <textarea className={styles.textAreaSection}></textarea>
            <div className={styles.sendButton}>
              <Button
                label={"Send"}
                height={45}
                borderRadius={25}
                backgroundColor="#f55220"
                textStyle={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                  fontSize: "16px"
                }}
                border="none"
                onClick={() => sendQuestion()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
