import React from "react";
import Icon from "../../assets/Icon/Icon";
import styles from "./FaqTab.module.css";
import { Image } from "semantic-ui-react";
import Button from "../Button/Button";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";
export default class FaqTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openState: [],
      faqList: [],
      question: "",
      loading: false
    };
  }
  componentDidMount() {
    this.getFaqs();
    this.userFaqs();
  }
  getFaqs = async () => {
    await this.setState({ loading: true });
    try {
      const response = await axiosInstance.get(
        `/getCourseFaqs?faq_type=student`
      );
      this.setState({
        faqList: response.data.data.concat(this.state.faqList),
        loading: false
      });
    } catch (err) {
      await this.setState({ loading: false });
    }
  };
  userFaqs = async () => {
    await this.setState({ loading: true });
    try {
      const response = await axiosInstance.get(
        `/getUserFaqs?access_token=${jsCookie.get(COOKIE_TOKEN)}`
      );
      this.setState({
        faqList: response.data.data.concat(this.state.faqList),
        loading: false
      });
    } catch (err) {
      await this.setState({ loading: false });
    }
  };
  addFaqs = async payload => {
    try {
      const response = await axiosInstance.post(`/addUserFaq`, payload);
      this.userFaqs();
      this.getFaqs();
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
  sendQuestion = async () => {
    await this.setState({ faqList: [], loading: true });
    if (this.state.question != "") {
      const payload = {
        faq: this.state.question,
        access_token: jsCookie.get(COOKIE_TOKEN)
      };

      await this.addFaqs(payload);
    }
  };
  render() {
    if (this.state.loading) {
      return <StudentDashboardSkelton />;
    }

    // if (true) {
    //   return (
    //     <div style={{ height: "700px", width: "700px", margin: "auto" }}>
    //       <Image
    //         src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fno_data.png?alt=media&token=79834bd2-97fa-4f63-897f-fe9498236194"
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
            <textarea
              className={styles.textAreaSection}
              onChange={event =>
                this.setState({ question: event.target.value })
              }
            ></textarea>
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
                onClick={() => this.sendQuestion()}
              />
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FfaqQuestion.png?alt=media&token=85c77533-b08e-4458-8832-012250a7279e"
              }
              alt="faqQuestion"
            />
          </div>
        </div>
      </div>
    );
  }
}
