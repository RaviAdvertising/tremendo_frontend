import { useContext, useState } from "react";
import styles from "../../styles/Login.module.css";
import {
  ADMIN_ACCESS_TYPE,
  COOKIE_TOKEN,
  EMAIL_REGULAR_EXPRESSION,
  LOGIN_MENTOR_TAB,
  LOGIN_STUDENT_TAB,
  LOGIN_TYPE_EMAIL,
  SUPER_ADMIN_ACCESS_TYPE
} from "../../utils/constants";

import Head from "next/head";
import Input from "../../components/Input/Input";
import { useRouter } from "next/router";
import { ADMIN_DASHBOARD_PATH, HOME_PAGE } from "../../utils/routes";

import { toast } from "react-toastify";
import { loginAuth, LOGIN_ERROR } from "../../Context/Actions/Auth/AuthAction";
import Button from "../../components/Button/Button";
import Cookies from "js-cookie";
import { GlobalContext } from "../../Context/Provider";
import { DeviceContext } from "../_app";

export default function AdminLogin(props) {
  const [selectedTab, setSelectedTab] = useState(SUPER_ADMIN_ACCESS_TYPE);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const { authState, authDispatch: dispatch } = useContext(GlobalContext);
  const { isMobileView } = useContext(DeviceContext);
  const router = useRouter();

  if (Cookies.get(COOKIE_TOKEN)) {
    router.replace(HOME_PAGE);
    return false;
  }

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
        fb_token: "",
        access_type: selectedTab
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
        actionAfterLogin();
      }
    }
  };

  const actionAfterLogin = () => {
    router.replace(ADMIN_DASHBOARD_PATH);
  };

  const loginFormWithImage = () => {
    return (
      <div className={styles.imageAndLoginWrapper}>
        <div style={{ width: !isMobileView ? "50%" : "100%", margin: "auto" }}>
          <div
            className={styles.loginSection}
            style={{ paddingBottom: "60px" }}
          >
            <div className={styles.heading}>Hello</div>
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
            {/* <div className={styles.remeberMeAndForgotPwd}>
              <div className={styles.forgotPwd}>Forgot Password?</div>
            </div> */}
            <Button
              label={"LOG IN"}
              height={55}
              borderRadius={43}
              backgroundColor={"#25908d"}
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
          </div>
        </div>
      </div>
    );
  };
  const selectedTabStyling = {
    color: "#212121",
    borderBottom: "3px solid #212121"
  };
  const unSelectedTabStyling = {
    color: "rgba(56, 56, 56, 0.3)",
    borderBottom: "3px solid rgba(56, 56, 56, 0.3)"
  };
  const onChangeTabs = type => {
    setSelectedTab(type);
    setErrors({});
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Admin Log in</title>
        <meta name="description" content="Tremendo Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.loginBox}>
        <div className={styles.tabWrapper}>
          <div
            className={styles.tab}
            style={
              selectedTab == SUPER_ADMIN_ACCESS_TYPE
                ? selectedTabStyling
                : unSelectedTabStyling
            }
            onClick={() => onChangeTabs(SUPER_ADMIN_ACCESS_TYPE)}
          >
            For Super Admin
          </div>
          <div
            className={styles.tab}
            style={
              selectedTab == ADMIN_ACCESS_TYPE
                ? selectedTabStyling
                : unSelectedTabStyling
            }
            onClick={() => onChangeTabs(ADMIN_ACCESS_TYPE)}
          >
            For Admin
          </div>
        </div>
        {loginFormWithImage()}
      </div>
    </div>
  );
}
