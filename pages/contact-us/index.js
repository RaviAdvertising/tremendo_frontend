import Head from "next/head";
import Button from "../../components/Button/Button";
import ImageComponent from "../../components/Image/Image";
import styles from "../../styles/ContactUs.module.css";
import Image from "next/image";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/Provider";
import { EMAIL_REGULAR_EXPRESSION } from "../../utils/constants";
import { contactUs } from "../../Context/Actions/Home/HomeAction";
import { toast } from "react-toastify";
import PageLoader from "../../components/Loader/PageLoader";
import { DeviceContext } from "../_app";

export default function ContactUs() {
  const whyLearnData = [
    "Improve your career prospects",
    "Meet new and interesting people",
    ,
    "Building your confidence and personality",
    "Building your communication skills",
    "Making international travel easier",
    "Enhance your opportunity in government, business, medicine, law, etc. ",
    "Improve your skills and grades in math, English in your SAT and GRE exams"
  ];
  const { homeState, homeDispatch: dispatch } = useContext(GlobalContext);
  const { isMobileView } = useContext(DeviceContext);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (type, value) => {
    setFields({ ...fields, [type]: value });
    setErrors({});
  };

  const onSubmit = async () => {
    let errors = { ...errors };
    if (!fields.user_name) {
      errors["user_name"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.email_address) {
      errors["email_address"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.phone_num) {
      errors["phone_num"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.language) {
      errors["language"] = true;
      setErrors(errors);
      return false;
    } else if (
      fields.email_address &&
      !EMAIL_REGULAR_EXPRESSION.test(fields.email_address)
    ) {
      errors["email_address"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.purpose) {
      errors["purpose"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.message) {
      errors["message"] = true;
      setErrors(errors);
      return false;
    } else {
      const response = await contactUs(fields)(dispatch);
      toast.success(response.data.msg, {
        theme: "colored"
      });
      setFields({});
      setErrors({});
    }
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Contact-Us</title>
        <meta name="description" content="Tremendo Contact-Us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.banner}>
        <DesktopOnly>
          <ImageComponent
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FcontactUsBanner.png?alt=media&token=e02bacbf-a09d-4f63-b757-91e4a32ddf0d"
            }
            paddingBottom={"21%"}
            alt={"banner logo"}
          />
        </DesktopOnly>
        <MobileOnly>
          <ImageComponent
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fabout_banner_mobile.png?alt=media&token=be8f7644-800d-41fd-bb84-44e199f49785"
            }
            paddingBottom={"65%"}
            alt={"banner logo"}
          />
        </MobileOnly>
      </div>
      {homeState.contactUsLoading && <PageLoader />}
      <div className={styles.sections}>
        <div className={styles.wrapper}>
          <div className={styles.formWrapper}>
            <div className={styles.heading}>GET IN TOUCH WITH US</div>
            <div className={styles.inputsWrapper}>
              <input
                placeholder="Your Name*"
                type="text"
                className={styles.inputStyling}
                style={{
                  border: errors["user_name"]
                    ? "2px solid red"
                    : "2px solid rgb(221, 223, 225)"
                }}
                value={fields.user_name}
                onChange={e => handleChange("user_name", e.target.value)}
              />
            </div>
            <div className={styles.inputsWrapper}>
              <input
                placeholder="Email Address*"
                type="text"
                className={styles.inputStyling}
                style={{
                  border: errors["email_address"]
                    ? "2px solid red"
                    : "2px solid rgb(221, 223, 225)"
                }}
                value={fields.email_address}
                onChange={e => handleChange("email_address", e.target.value)}
              />
            </div>
            <div className={styles.inputsWrapper}>
              <input
                placeholder="Phone Number*"
                type="text"
                className={styles.inputStyling}
                style={{
                  border: errors["phone_num"]
                    ? "2px solid red"
                    : "2px solid rgb(221, 223, 225)"
                }}
                value={fields.phone_num}
                onChange={e => handleChange("phone_num", e.target.value)}
              />
            </div>
            <div className={styles.inputsWrapper}>
              <select
                name="Language"
                id="Language"
                className={styles.selectStyling}
                style={{
                  border: errors["language"]
                    ? "2px solid red"
                    : "2px solid rgb(221, 223, 225)"
                }}
                value={fields.language}
                onChange={e => handleChange("language", e.target.value)}
              >
                <option value={0}>Language </option>
                {homeState.getLanguage.map((i, index) => (
                  <option value={i.title} key={index}>
                    {i.title}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputsWrapper}>
              <select
                name="reason"
                id="reason"
                className={styles.selectStyling}
                style={{
                  border: errors["purpose"]
                    ? "2px solid red"
                    : "2px solid rgb(221, 223, 225)"
                }}
                value={fields.purpose}
                onChange={e => handleChange("purpose", e.target.value)}
              >
                {whyLearnData.map((i, index) => (
                  <option value={i} key={index}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputsWrapper}>
              <textarea
                placeholder="Message"
                className={styles.inputStyling}
                style={{
                  border: errors["message"]
                    ? "2px solid red"
                    : "2px solid rgb(221, 223, 225)"
                }}
                rows="7"
                cols="50"
                value={fields.message}
                onChange={e => handleChange("message", e.target.value)}
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
                onClick={() => onSubmit()}
              />
            </div>
          </div>
          <div className={styles.mapWrapper}>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9313083713682!2d77.06765591555062!3d28.63182078241813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05eceb01c121%3A0x19748ca208251438!2sAdvertising%20Salt!5e0!3m2!1sen!2sin!4v1641389764508!5m2!1sen!2sin"
                width={isMobileView ? "300" : "600"}
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
                    src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Flocation.png?alt=media&token=3a220c3d-2f47-49a8-852e-abbe53a6dfae"
                    alt="location"
                    width={"32px"}
                    height={"37px"}
                  />
                </div>
                <div className={styles.textInfo}>
                  Tremendo, Address-Bihar,India, 805131
                </div>
              </div>
              <div className={styles.infoSec}>
                <div className={styles.phoneIcon}>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fphone.png?alt=media&token=e61b4f20-1c09-4366-bde7-94fc764f8bab"
                    alt="location"
                    width={"30px"}
                    height={"37px"}
                  />
                </div>
                <div className={styles.textInfo}>+91 78568 92827</div>
              </div>
              <div className={styles.infoSec}>
                <div>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fmail.png?alt=media&token=ce6a995a-1ec2-4ea7-8f21-80f706fb75af"
                    alt="location"
                    width={"37px"}
                    height={"37px"}
                  />
                </div>
                <div className={styles.textInfo}>info@tremendo.in</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ImageComponent
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Flearn_grow_lead.png?alt=media&token=28f934e6-52ec-4783-a68b-aca27f4d2d3e"
            }
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
    </div>
  );
}
