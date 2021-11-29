import styles from "../../styles/Signup.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Input from "../../components/Input/Input";
import { Fragment, useContext, useState } from "react";
import { Checkbox, Divider } from "semantic-ui-react";
import { HOME_PAGE, LOGIN_PATH } from "../../utils/routes";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import Button from "../../components/Button/Button";
import {
  COOKIE_TOKEN,
  EMAIL_REGULAR_EXPRESSION,
  LOGIN_TYPE_EMAIL,
  LOGIN_TYPE_FB,
  LOGIN_TYPE_GOOGLE
} from "../../utils/constants";
import { GlobalContext } from "../../Context/Provider";
import socialMediaAuth, {
  signupAuth,
  SIGNUP_ERROR
} from "../../Context/Actions/Auth/AuthAction";
import { facebookProvider, googleProvider } from "../../utils/firebaseMethods";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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
    setFields({ ...fields, [type]: value });
    setErrors({});
  };

  const socialLogin = async (provider, type) => {
    const res = await socialMediaAuth(provider);
    // if (!res.message) {
    const payload = {
      email: res.email,
      name: res.displayName,
      type: type,
      gg_token: type == LOGIN_TYPE_GOOGLE && res.uid,
      fb_token: type == LOGIN_TYPE_FB && res.uid
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
      router.push(HOME_PAGE);
    }
    // }
  };

  const goToSignUp = async () => {
    let errors = { ...errors };
    if (!fields.name) {
      errors["name"] = "Please Enter Name";
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
        fb_token: ""
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
        router.push(HOME_PAGE);
      }
    }
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
                src={`/Images/student_signup.png`}
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
              <Input
                type="text"
                placeholder="DOB (DD-MM-YY)"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
                handleChange={e => handleChange("dob", e)}
              />
              {errors["dob"] && (
                <div className={styles.errorMsg}>{errors["dob"]}</div>
              )}
            </div>
            <div className={styles.inputs}>
              <Input
                type="text"
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
                  src="/Images/google_loginbtn.png"
                  alt="google login btn"
                  height="55px"
                  width="180px"
                />
              </div>
              <div
                className={styles.socialBtn}
                onClick={() => socialLogin(facebookProvider, LOGIN_TYPE_FB)}
              >
                <Image
                  src="/Images/facebook_loginbtn.png"
                  alt="google login btn"
                  height="55px"
                  width="180px"
                />
              </div>
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
          <span className={styles.tandC2} onClick={() => router.push("/")}>
            Terms and Conditions (T&Cs) and Privacy Policy.
          </span>
        </div>
      </div>
    </Fragment>
  );
}
