import React from "react";
import Icon from "../../assets/Icon/Icon";
import styles from "./FaqTab.module.css";
import { Image } from "semantic-ui-react";
import Button from "../Button/Button";
import axiosInstance from "../../utils/axiosInstance";
export default class FaqTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openState: [],
      faqList: []
    };
  }
  componentDidMount() {
    this.getFaqs();
  }
  getFaqs = async () => {
    try {
      const response = await axiosInstance.get(
        `/getCourseFaqs?faq_type=student`
      );
      this.setState({
        faqList: response.data.data
      });
    } catch (err) {}
  };

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
    // if (true) {
    //   return (
    //     <div style={{ height: "700px", width: "700px", margin: "auto" }}>
    //       <Image
    //         src="/Images/no_data.png"
    //         alt="tremendo dashboard banner"
    //         height="800px"
    //         width="700px"
    //         className={styles.banner}
    //       />
    //     </div>
    //   );
    // }
    return (
      <div className={styles.base}>
        <div className={styles.heading}>FAQs</div>
        <div className={styles.wrapper}>
          <div className={styles.faqBoxWrapper}>
            {this.state.faqList.map((j, index) => (
              <div className={styles.faqBox} key={j.faq_id}>
                <div className={styles.questionWrapper}>
                  <div className={styles.questionName}>
                    {`${index + 1}. ${j.faq}`}
                  </div>
                  <div
                    className={styles.arrowIcon}
                    style={{
                      transform: this.state.openState.includes(j.faq_id)
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }}
                    onClick={() => this.openSection(j.faq_id)}
                  >
                    <Icon name="downArrow" />
                  </div>
                </div>
                {this.state.openState.includes(j.faq_id) && (
                  <div className={styles.answerWrapper}>
                    <div className={styles.borderTop}></div>
                    <div className={styles.answer}>{j.answer}</div>
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
