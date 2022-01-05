import Head from "next/head";
import Button from "../../components/Button/Button";
import ImageComponent from "../../components/Image/Image";
import styles from "../../styles/ContactUs.module.css";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Contact-Us</title>
        <meta name="description" content="Tremendo Contact-Us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sections}>
        <div className={styles.wrapper}>
          <div className={styles.formWrapper}>
            <div className={styles.heading}>GET IN TOUCH WITH US</div>
            <div className={styles.inputsWrapper}>
              <input
                placeholder="Your Name*"
                type="text"
                className={styles.inputStyling}
              />
            </div>
            <div className={styles.inputsWrapper}>
              <input
                placeholder="Email Address*"
                type="text"
                className={styles.inputStyling}
              />
            </div>
            <div className={styles.inputsWrapper}>
              <input
                placeholder="Phone Number*"
                type="text"
                className={styles.inputStyling}
              />
            </div>
            <div className={styles.inputsWrapper}>
              <select
                name="Language"
                id="Language"
                className={styles.selectStyling}
              >
                <option value={0}>Language </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className={styles.inputsWrapper}>
              <select
                name="reason"
                id="reason"
                className={styles.selectStyling}
              >
                <option value={0}>
                  Why do you want to learn this language?{" "}
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className={styles.inputsWrapper}>
              <textarea
                placeholder="Message"
                className={styles.inputStyling}
                rows="7"
                cols="50"
              ></textarea>
            </div>
            <div className={styles.submitBtn}>
              <Button
                label={"Submit"}
                height={50}
                borderRadius={27}
                backgroundColor={"#f78f1f"}
                textStyle={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: " Open Sans",
                  fontSize: "20px"
                }}
                border="none"
                //onClick={() => askAQuestion()}
              />
            </div>
          </div>
          <div className={styles.mapWrapper}>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9313083713682!2d77.06765591555062!3d28.63182078241813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05eceb01c121%3A0x19748ca208251438!2sAdvertising%20Salt!5e0!3m2!1sen!2sin!4v1641389764508!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.infoSec}>
                <div>
                  <Image
                    src="/Images/location.png"
                    alt="location"
                    width={"30px"}
                    height={"37px"}
                  />
                </div>
                <div className={styles.textInfo}>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </div>
              </div>
              <div className={styles.infoSec}>
                <div>
                  <Image
                    src="/Images/phone.png"
                    alt="location"
                    width={"30px"}
                    height={"37px"}
                  />
                </div>
                <div className={styles.textInfo}>
                  (+91) 000-000-0000, (+91) 000-000-0000
                </div>
              </div>
              <div className={styles.infoSec}>
                <div>
                  <Image
                    src="/Images/mail.png"
                    alt="location"
                    width={"30px"}
                    height={"37px"}
                  />
                </div>
                <div className={styles.textInfo}>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ImageComponent
            src={"/Images/learn_grow_lead.png"}
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
    </div>
  );
}
