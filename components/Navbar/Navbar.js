import { Fragment, useState } from "react";
import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import {
  Dropdown,
  Image,
  Menu,
  Segment,
  Icon,
  Sidebar
} from "semantic-ui-react";
import { COOKIE_TOKEN, USER_DETAILS } from "../../utils/constants";
import { useRouter } from "next/router";
import DesktopOnly from "../DeviceCheck/DesktopOnly";
import MobileOnly from "../DeviceCheck/MobileOnly";
import Button from "../Button/Button";
import {
  ABOUTUS_PATH,
  HOME_PAGE,
  LOGIN_PATH,
  SIGN_UP_PATH
} from "../../utils/routes";
import Cookies from "js-cookie";
import { GlobalContext } from "../../Context/Provider";
import {
  logoutAuth,
  LOGOUT_ERROR
} from "../../Context/Actions/Auth/AuthAction";
import { toast } from "react-toastify";

function Navbar({}) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const { homeState, authDispatch: dispatch } = useContext(GlobalContext);
  const signUpAndLogout = async () => {
    if (Cookies.get(COOKIE_TOKEN)) {
      const response = await logoutAuth(Cookies.get(COOKIE_TOKEN))(dispatch);
      if (response.type == LOGOUT_ERROR) {
        toast.error(response.error.msg, {
          theme: "colored"
        });
      } else {
        toast.success(response.data.msg, {
          theme: "colored"
        });
        router.push(HOME_PAGE);
      }
    } else {
      router.push(SIGN_UP_PATH);
    }
  };

  const desktopNavbar = () => {
    return (
      <Menu fixed="top" secondary className={styles.menuWrapper}>
        <Menu.Item onClick={() => router.push(HOME_PAGE)}>
          <Image src="Images/tremendo_logo.png" alt="logo" />
        </Menu.Item>
        {!router.pathname.includes(SIGN_UP_PATH) &&
          !router.pathname.includes(LOGIN_PATH) && (
            <Fragment>
              <Menu.Menu position="right" className={styles.menuStyling}>
                <Menu.Item
                  name="ABOUT US"
                  className={`${styles.itemWrapper} ${router.pathname.includes(
                    ABOUTUS_PATH
                  ) && styles.activeItemWrapper}`}
                  onClick={() => router.push(ABOUTUS_PATH)}
                />
                <Dropdown text="LANGUAGES" className={styles.dropdownWrapper}>
                  <Dropdown.Menu>
                    {homeState.getLanguage.map((i, index) => (
                      <Dropdown.Item
                        key={index}
                        text={`${i.title}  (${i.welcome_text})`}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item name="REVIEW" className={styles.itemWrapper} />
                <Menu.Item name="FAQ'S" className={styles.itemWrapper} />
                <Menu.Item name="BLOGS" className={styles.itemWrapper} />
                <Menu.Item name="CONTACT US" className={styles.itemWrapper} />
              </Menu.Menu>
              {!Cookies.get(COOKIE_TOKEN) ? (
                <Menu.Item
                  className={styles.itemWrapper}
                  onClick={() => router.push(LOGIN_PATH)}
                >
                  LOGIN
                </Menu.Item>
              ) : (
                <Menu.Item className={styles.itemWrapper}>
                  {JSON.parse(localStorage.getItem(USER_DETAILS)).name
                    ? JSON.parse(localStorage.getItem(USER_DETAILS)).name
                    : JSON.parse(localStorage.getItem(USER_DETAILS)).email}
                </Menu.Item>
              )}
              <Menu.Item>
                <Button
                  label={Cookies.get(COOKIE_TOKEN) ? "LOG OUT" : "SIGN UP"}
                  height={34}
                  borderRadius={18}
                  textStyle={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    fontSize: "13px"
                  }}
                  border="none"
                  onClick={() => signUpAndLogout()}
                />
              </Menu.Item>
            </Fragment>
          )}
      </Menu>
    );
  };
  const mobileNavbar = () => {
    return (
      <Fragment>
        <div className={styles.mobileBase}>
          {!router.pathname.includes(SIGN_UP_PATH) &&
            !router.pathname.includes(LOGIN_PATH) && (
              <div
                className={styles.toggleIcon}
                onClick={() => setVisible(!visible)}
              >
                <div className={`${visible && styles.hamburger}`}>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                </div>
              </div>
            )}
          <div onClick={() => router.push(HOME_PAGE)}>
            <Image src="Images/tremendo_logo.png" alt="logo" size={"small"} />
          </div>
        </div>
        {visible && (
          <div
            className={styles.overlayBase}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.contentWrapper}>
              {!Cookies.get(COOKIE_TOKEN) ? (
                <div
                  className={styles.mwebMenus}
                  onClick={() => router.push(LOGIN_PATH)}
                >
                  Login
                </div>
              ) : (
                <div className={styles.mwebMenus}>
                  {JSON.parse(localStorage.getItem(USER_DETAILS)).name
                    ? JSON.parse(localStorage.getItem(USER_DETAILS)).name
                    : JSON.parse(localStorage.getItem(USER_DETAILS)).email}
                </div>
              )}
              <div
                className={styles.mwebMenus}
                onClick={() => signUpAndLogout()}
              >
                {Cookies.get(COOKIE_TOKEN) ? "Log Out" : "Sign Up"}
              </div>
              <div
                className={styles.mwebMenus}
                onClick={() => router.push(ABOUTUS_PATH)}
              >
                About Us
              </div>
              <Dropdown
                text="Languages"
                pointing="left"
                className={styles.mwebLanguage}
              >
                <Dropdown.Menu>
                  {homeState.getLanguage.map((i, index) => (
                    <Dropdown.Item key={index} text={i.title} />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div className={styles.mwebMenus}>Review</div>
              <div className={styles.mwebMenus}>FAQs</div>
              <div className={styles.mwebMenus}>Blogs</div>
              <div className={styles.mwebMenus}>Contact Us</div>
            </div>
          </div>
        )}
      </Fragment>
    );
  };
  return (
    <Fragment>
      <MobileOnly>{mobileNavbar()}</MobileOnly>
      <DesktopOnly>{desktopNavbar()}</DesktopOnly>
    </Fragment>
  );
}

export default Navbar;
