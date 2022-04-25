import React from "react";
import styles from "./MentorFaq.module.css";
import { Image } from "semantic-ui-react";
import Button from "../Button/Button";
import Icon from "../../assets/Icon/Icon";
import DesktopOnly from "../DeviceCheck/DesktopOnly";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";

export default class MentorFaq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openState: [1],
      faqList: [],
      loading: false,
      faqFeilds: {}
    };
  }

  componentDidMount() {
    this.getFaqs();
  }
  getFaqs = async () => {
    try {
      const response = await axiosInstance.get(
        `/getCourseFaqs?faq_type=mentor`
      );
      this.setState({
        faqList: response.data.data
      });
    } catch (err) {}
  };
  sendQuestion = async () => {
    await this.setState({ loading: true });
    const payload = {
      ...this.state.faqFeilds,
      access_token: jsCookie.get(COOKIE_TOKEN),
      lang: "common",
      faq_type: "student"
    };
    try {
      const response = await axiosInstance.post(`/addCourseFaq`, payload);
      this.getFaqs();
      this.setState({ loading: false });
    } catch (err) {
      this.setState({ loading: false });
    }
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
  onHandleFaqChange = (data, type) => {
    let fields = this.state.faqFeilds;
    fields[type] = data;
    this.setState({ faqFeilds: fields });
  };
  render() {
    console.log(this.state.faqFeilds);
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
        <div className={styles.faqWrapper}>
          <DesktopOnly>
            <div>
              <Image src="/Images/mentor_faq.png" alt="mentor faq" />
            </div>
          </DesktopOnly>
          <div className={styles.faqBoxWrapper}>
            <div className={styles.heading}>FAQ</div>
            {this.state.faqList.map((i, index) => (
              <div className={styles.faqBox} key={index}>
                <div className={styles.questionWrapper}>
                  <div className={styles.questionName}>
                    {`${index + 1}. ${i.faq}`}
                  </div>
                  <div
                    className={styles.arrowIcon}
                    style={{
                      transform: "rotate(0deg)"
                    }}
                    onClick={() => this.openSection(i.faq_id)}
                  >
                    <Icon name="downArrow" />
                  </div>
                </div>
                {this.state.openState.includes(i.faq_id) && (
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
          <div className={styles.textAreaBox}>
            <div className={styles.heading}>Add Frequently Asked Question?</div>
            <textarea
              className={styles.textAreaSection}
              placeholder="Question"
              onChange={e => this.onHandleFaqChange(e.target.value, "faq")}
            ></textarea>
            <textarea
              className={styles.textAreaSection}
              placeholder="Answer"
              onChange={e => this.onHandleFaqChange(e.target.value, "answer")}
            ></textarea>
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
                loading={this.state.loading}
                onClick={() => this.sendQuestion()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
