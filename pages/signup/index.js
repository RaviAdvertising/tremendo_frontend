import styles from "../../styles/Signup.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Input from "../../components/Input/Input";
import { Fragment, useContext, useState } from "react";
import { Checkbox, Divider } from "semantic-ui-react";
import {
  FAQS_PATH,
  HOME_PAGE,
  LOGIN_PATH,
  PAYMENT_PATH,
  STUDENT_DASHBOARD_PATH
} from "../../utils/routes";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import Button from "../../components/Button/Button";
import {
  ASK_A_QUESTION,
  COOKIE_TOKEN,
  EMAIL_REGULAR_EXPRESSION,
  LOGIN_STUDENT_TAB,
  LOGIN_TYPE_EMAIL,
  LOGIN_TYPE_FB,
  LOGIN_TYPE_GOOGLE,
  ORDER_DETAIL,
  PREVIOUS_PATH,
  USER_DETAILS
} from "../../utils/constants";
import { GlobalContext } from "../../Context/Provider";
import socialMediaAuth, {
  signupAuth,
  SIGNUP_ERROR
} from "../../Context/Actions/Auth/AuthAction";
import { facebookProvider, googleProvider } from "../../utils/firebaseMethods";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import FacebookLoginComponent from "../../components/FacebookLogin/FacebookLogin";
import moment from "moment";

export default function Signup(props) {
  const router = useRouter();
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const { authState, authDispatch: dispatch } = useContext(GlobalContext);
  if (Cookies.get(COOKIE_TOKEN)) {
    router.replace(HOME_PAGE);
    return false;
  }
  const handleChange = (type, value) => {
    if (type == "phone_number" && value.length > 14) {
      setFields({ ...fields, [type]: value });
      setErrors({ phone_number: "Please Enter Valid Number" });
    } else {
      setFields({ ...fields, [type]: value });
      setErrors({});
    }
  };

  const socialLogin = async (provider, type, fbResponse) => {
    let payload = {},
      profileImage = "";
    if (type == LOGIN_TYPE_GOOGLE) {
      const res = await socialMediaAuth(provider);
      payload = {
        email: res.email,
        name: res.displayName,
        type: type,
        gg_token: type == LOGIN_TYPE_GOOGLE && res.uid,
        fb_token: "",
        access_type: LOGIN_STUDENT_TAB
      };
      profileImage = res.photoURL;
    } else {
      payload = {
        email: fbResponse.email,
        name: fbResponse.name,
        type: type,
        gg_token: "",
        fb_token: fbResponse.accessToken,
        access_type: LOGIN_STUDENT_TAB
      };
      profileImage = fbResponse.picture?.data?.url;
    }

    const response = await signupAuth(payload)(dispatch);

    const localstorageValue =
      localStorage.getItem(USER_DETAILS) &&
      JSON.parse(localStorage.getItem(USER_DETAILS));
    const updatedLocalstorage = {
      ...localstorageValue,
      profileUrl: profileImage
    };
    localStorage.setItem(USER_DETAILS, JSON.stringify(updatedLocalstorage));
    if (response.type == SIGNUP_ERROR) {
      toast.error(response.error.msg, {
        theme: "colored"
      });
    } else {
      toast.success(response.data.msg, {
        theme: "colored"
      });
      actionAfterLogin();
    }
    // }
  };
  const hasNumber = myString => {
    return /\d/.test(myString);
  };
  const goToSignUp = async () => {
    let errors = { ...errors };
    if (!fields.name) {
      errors["name"] = "Please Enter Name";
      setErrors(errors);
      return false;
    } else if (fields.name && hasNumber(fields.name)) {
      errors["name"] = "Please Enter Correct Name Format";
      setErrors(errors);
      return false;
    } else if (!fields.dob) {
      errors["dob"] = "Please Enter Date of Birth";
      setErrors(errors);
      return false;
    } else if (!fields.phone_number) {
      errors["phone_number"] = "Please Enter Phone number";
      setErrors(errors);
      return false;
    } else if (!fields.email) {
      errors["email"] = "Please Enter Email Id";
      setErrors(errors);
      return false;
    } else if (fields.email && !EMAIL_REGULAR_EXPRESSION.test(fields.email)) {
      errors["email"] = "Please Enter Correct Email Id";
      setErrors(errors);
      return false;
    } else if (!fields.password) {
      errors["password"] = "Please Enter Password";
      setErrors(errors);
      return false;
    } else {
      const payload = {
        ...fields,
        type: LOGIN_TYPE_EMAIL,
        gg_token: "",
        fb_token: "",
        access_type: LOGIN_STUDENT_TAB
      };
      const response = await signupAuth(payload)(dispatch);
      if (response.type == SIGNUP_ERROR) {
        toast.error(response.error.msg, {
          theme: "colored"
        });
      } else {
        toast.success(response.data.msg, {
          theme: "colored"
        });
        actionAfterLogin();
      }
    }
  };
  const actionAfterLogin = () => {
    const order_id = localStorage.getItem(ORDER_DETAIL);
    const askAQuestion = localStorage.getItem(ASK_A_QUESTION);
    if (order_id) {
      router.replace(`${PAYMENT_PATH}?id=${order_id}`);
      localStorage.removeItem(ORDER_DETAIL);
    } else if (askAQuestion) {
      router.replace(FAQS_PATH);
      localStorage.removeItem(ASK_A_QUESTION);
    } else {
      router.push(HOME_PAGE);
    }
  };

  const DateInput = ({ value, onClick }) => {
    return (
      <button
        className={styles.dateInput}
        style={{ color: !value && "gray" }}
        onClick={onClick}
      >
        {value ? value : "DOB"}
      </button>
    );
  };
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Tremendo Sign up page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.base}>
        <div className={styles.header}>START YOUR JOURNEY TODAY</div>
        <div className={styles.wrapper}>
          <DesktopOnly>
            <div className={styles.loginImage}>
              <Image
                src={`https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fstudent_signup2.png?alt=media&token=c1c9b0d6-eb0e-4b6d-a016-206c55ac23bc`}
                alt={"sign up page"}
                width={"1138px"}
                height={"897px"}
              />
            </div>
          </DesktopOnly>
          <div className={styles.loginSection}>
            <div className={styles.heading}>Welcome!</div>
            <div className={styles.inputs}>
              <Input
                type="text"
                placeholder="Name"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  fontSize: "16px",
                  border: "1px solid grey",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
                handleChange={e => handleChange("name", e)}
              />
              {errors["name"] && (
                <div className={styles.errorMsg}>{errors["name"]}</div>
              )}
            </div>
            <div className={styles.inputs}>
              <DatePicker
                selected={fields.dob}
                onChange={date => handleChange("dob", date)}
                customInput={<DateInput />}
                dateFormat="MMMM d, yyyy"
                maxDate={moment().subtract(14, "years")._d}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />

              {errors["dob"] && (
                <div className={styles.errorMsg}>{errors["dob"]}</div>
              )}
            </div>
            <div className={styles.inputs}>
              <Input
                type="number"
                placeholder="Phone number"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
                handleChange={e => handleChange("phone_number", e)}
              />
              {errors["phone_number"] && (
                <div className={styles.errorMsg}>{errors["phone_number"]}</div>
              )}
            </div>
            <div className={styles.inputs}>
              <Input
                type="text"
                placeholder="Email"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
                handleChange={e => handleChange("email", e)}
              />
              {errors["email"] && (
                <div className={styles.errorMsg}>{errors["email"]}</div>
              )}
            </div>
            <div className={styles.inputs}>
              <Input
                type="password"
                placeholder="Password"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
                handleChange={e => handleChange("password", e)}
              />
              {errors["password"] && (
                <div className={styles.errorMsg}>{errors["password"]}</div>
              )}
            </div>
            <Button
              label={"Create Account"}
              height={55}
              borderRadius={43}
              backgroundColor={"#25908d"}
              textStyle={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Open Sans",
                fontSize: "16px"
              }}
              loading={authState?.signupLoading}
              border="none"
              onClick={() => goToSignUp()}
            />
            <Divider horizontal className={styles.dividerStyle}>
              or signup with
            </Divider>
            <div className={styles.socialLoginBtn}>
              <div
                className={styles.socialBtn}
                onClick={() => socialLogin(googleProvider, LOGIN_TYPE_GOOGLE)}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fgoogle_loginbtn.png?alt=media&token=6d6162cd-0e6f-413d-b53a-10203f0be385`}
                  alt="google login btn"
                  height="55px"
                  width="180px"
                />
              </div>
              <FacebookLoginComponent
                height="55px"
                width="180px"
                responseFacebook={response =>
                  socialLogin(false, LOGIN_TYPE_FB, response)
                }
              />
            </div>
            <div className={styles.bottomTexts}>
              <span className={styles.text1}>Already have an account? </span>
              <span
                className={styles.text2}
                onClick={() => router.push(LOGIN_PATH)}
              >
                Login Here
              </span>
            </div>
          </div>
        </div>
        <div className={styles.tandC}>
          <span className={styles.tandC1}>
            By signing in to Tremendo, I accept the{" "}
          </span>
          <span className={styles.tandC2}>
            <a
              href={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Ftnc.pdf?alt=media&token=ae0e7ac3-62fc-45cf-b9db-8c2291429176`}
              download="Term&Condition"
              target={"_blank"}
              rel="noreferrer"
              style={{ cursor: "pointer", color: "#2048bb" }}
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fprivacy_policy.pdf?alt=media&token=162279da-2bec-4e1a-a47a-c330bd24b919`}
              download="Privacy_and_policy"
              target={"_blank"}
              rel="noreferrer"
              style={{ cursor: "pointer", color: "#2048bb" }}
            >
              Privacy Policy.
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  );
}
