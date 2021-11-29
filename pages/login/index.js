import { Fragment, useContext, useState } from "react";
import styles from "../../styles/Login.module.css";
import {
  COOKIE_TOKEN,
  EMAIL_REGULAR_EXPRESSION,
  LOGIN_MENTOR_TAB,
  LOGIN_STUDENT_TAB,
  LOGIN_TYPE_EMAIL,
  LOGIN_TYPE_FB,
  LOGIN_TYPE_GOOGLE
} from "../../utils/constants";
import Image from "next/image";
import Head from "next/head";
import Input from "../../components/Input/Input";
import { Checkbox, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import { HOME_PAGE, SIGN_UP_PATH } from "../../utils/routes";
import { facebookProvider, googleProvider } from "../../utils/firebaseMethods";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import { toast } from "react-toastify";
import socialMediaAuth, {
  loginAuth,
  LOGIN_ERROR
} from "../../Context/Actions/Auth/AuthAction";
import Button from "../../components/Button/Button";
import Cookies from "js-cookie";
import { GlobalContext } from "../../Context/Provider";

const STUDENT_BACKGROUND_COLOR = "#ecf8f8";
const MENTOR_BACKGROUND_COLOR = "#fbeedf";

export default function Login(props) {
  const [selectedTab, setSelectedTab] = useState(LOGIN_STUDENT_TAB);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const { authState, authDispatch: dispatch } = useContext(GlobalContext);
  const router = useRouter();

  if (Cookies.get(COOKIE_TOKEN)) {
    router.replace(HOME_PAGE);
    return false;
  }
  const selectedTabStyling = {
    color: "#212121",
    borderBottom: "3px solid #212121"
  };
  const unSelectedTabStyling = {
    color: "rgba(56, 56, 56, 0.3)",
    borderBottom: "3px solid rgba(56, 56, 56, 0.3)"
  };

  const socialLogin = async (provider, type) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
    // if (!res.message) {
    const payload = {
      email: res.email,
      type: type,
      gg_token: type == LOGIN_TYPE_GOOGLE ? res.za : "",
      fb_token: type == LOGIN_TYPE_FB ? res.credential.accessToken : ""
    };
    const response = await loginAuth(payload)(dispatch);
    if (response.type == LOGIN_ERROR) {
      toast.error(response.error.msg, {
        theme: "colored"
      });
    } else {
      toast.success(response.data.msg, {
        theme: "colored"
      });
      router.push(HOME_PAGE);
    }
    // }
  };

  const handleChange = (type, value) => {
    setFields({ ...fields, [type]: value });
    setErrors({});
  };

  const goToLogin = async () => {
    let errors = { ...errors };
    if (!fields.email) {
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
        fb_token: ""
      };
      const response = await loginAuth(payload)(dispatch);
      if (response.type == LOGIN_ERROR) {
        toast.error(response.error.msg, {
          theme: "colored"
        });
      } else {
        toast.success(response.data.msg, {
          theme: "colored"
        });
        router.push(HOME_PAGE);
      }
    }
  };

  const loginFormWithImage = () => {
    return (
      <div className={styles.imageAndLoginWrapper}>
        <DesktopOnly>
          <div
            className={styles.loginImage}
            style={{
              marginLeft: selectedTab == LOGIN_STUDENT_TAB ? "85px" : "49px"
            }}
          >
            <Image
              src={`/Images/${
                selectedTab == LOGIN_STUDENT_TAB
                  ? "student_login.png"
                  : "mentor_login.png"
              }`}
              alt={"login page"}
              width={selectedTab == LOGIN_STUDENT_TAB ? "550px" : "567px"}
              height={selectedTab == LOGIN_STUDENT_TAB ? "350px" : "515px"}
            />
          </div>
        </DesktopOnly>
        <div className={styles.loginSection}>
          <div className={styles.heading}>Hello!</div>
          <div className={styles.inputs}>
            <Input
              type="text"
              placeholder="Email or Username"
              inputStyling={{
                height: "50px",
                borderRadius: "43px",
                fontSize: "16px",
                border: "1px solid grey",
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
          <div className={styles.remeberMeAndForgotPwd}>
            <div className={styles.rememberMe}>
              <Checkbox label="Remember me" />
            </div>
            <div className={styles.forgotPwd}>Forgot Password?</div>
          </div>
          <Button
            label={"LOG IN"}
            height={55}
            borderRadius={43}
            backgroundColor={
              selectedTab == LOGIN_STUDENT_TAB ? "#25908d" : "#f78f1e"
            }
            textStyle={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Open Sans",
              fontSize: "16px"
            }}
            border="none"
            loading={authState?.loginLoading}
            onClick={() => goToLogin()}
          />
          <Divider horizontal className={styles.dividerStyle}>
            or login with
          </Divider>
          <div className={styles.socialLoginBtn}>
            <div
              className={styles.socialBtn}
              onClick={() => socialLogin(googleProvider, LOGIN_TYPE_GOOGLE)}
            >
              <Image
                src="/Images/google_loginbtn.png"
                alt="google login btn"
                height="60px"
                width="200px"
              />
            </div>
            <div
              className={styles.socialBtn}
              onClick={() => socialLogin(facebookProvider, LOGIN_TYPE_FB)}
            >
              <Image
                src="/Images/facebook_loginbtn.png"
                alt="google login btn"
                height="60px"
                width="200px"
              />
            </div>
          </div>
          <div className={styles.bottomTexts}>
            <span className={styles.text1}>New user? </span>
            <span
              className={styles.text2}
              onClick={() => router.push(SIGN_UP_PATH)}
            >
              Sign Up Here
            </span>
          </div>
        </div>
      </div>
    );
  };
  const onChangeTabs = type => {
    setSelectedTab(type);
    setErrors({});
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Log in</title>
        <meta name="description" content="Tremendo Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={styles.loginBox}
        style={{
          backgroundColor:
            selectedTab == LOGIN_STUDENT_TAB
              ? STUDENT_BACKGROUND_COLOR
              : MENTOR_BACKGROUND_COLOR
        }}
      >
        <div className={styles.tabWrapper}>
          <div
            className={styles.tab}
            style={
              selectedTab == LOGIN_STUDENT_TAB
                ? selectedTabStyling
                : unSelectedTabStyling
            }
            onClick={() => onChangeTabs(LOGIN_STUDENT_TAB)}
          >
            {LOGIN_STUDENT_TAB}
          </div>
          <div
            className={styles.tab}
            style={
              selectedTab == LOGIN_MENTOR_TAB
                ? selectedTabStyling
                : unSelectedTabStyling
            }
            onClick={() => onChangeTabs(LOGIN_MENTOR_TAB)}
          >
            {LOGIN_MENTOR_TAB}
          </div>
        </div>
        {loginFormWithImage()}
      </div>
      <div className={styles.termAndCondition}>
        Terms and Conditions (T&Cs) and Privacy Policy.
      </div>
    </div>
  );
}
