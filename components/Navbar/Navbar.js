import { Fragment, useEffect, useState } from "react";
import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Dropdown, Icon, Image, Menu, Popup } from "semantic-ui-react";
import {
  COOKIE_TOKEN,
  LOGIN_STUDENT_TAB,
  LOGIN_MENTOR_TAB,
  USER_DETAILS,
  ADMIN_ACCESS_TYPE,
  SUPER_ADMIN_ACCESS_TYPE
} from "../../utils/constants";
import { useRouter } from "next/router";
import DesktopOnly from "../DeviceCheck/DesktopOnly";
import MobileOnly from "../DeviceCheck/MobileOnly";
import Button from "../Button/Button";
import {
  ABOUTUS_PATH,
  HOME_PAGE,
  LANGUAGE_DETAIL,
  LOGIN_PATH,
  SIGN_UP_PATH,
  BLOGS_PATH,
  CONTACTUS_PATH,
  FAQS_PATH,
  REVIEW_PATH,
  STUDENT_DASHBOARD_PATH,
  MENTOR_DASHBOARD_PATH,
  ADMIN_DASHBOARD_PATH
} from "../../utils/routes";
import Cookies from "js-cookie";
import { GlobalContext } from "../../Context/Provider";
import {
  getUserProfile,
  logoutAuth,
  LOGOUT_ERROR
} from "../../Context/Actions/Auth/AuthAction";
import { toast } from "react-toastify";
import ImageComponent from "next/image";
import { getLanguages } from "../../Context/Actions/Home/HomeAction";

function Navbar({}) {
  const [visible, setVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("LANGUAGES");
  const router = useRouter();
  const {
    homeState,
    authState,
    authDispatch: dispatch,
    homeDispatch: homeDispatch
  } = useContext(GlobalContext);
  const userDetails =
    typeof window !== "undefined" &&
    localStorage.getItem(USER_DETAILS) &&
    JSON.parse(localStorage.getItem(USER_DETAILS));
  useEffect(() => {
    if (!router.pathname.includes(LANGUAGE_DETAIL)) {
      setSelectedLanguage("LANGUAGES");
      // return false;
    }
    setLanguageToStore();
    if (userDetails) profileData();
  }, [router.pathname]);

  const setLanguageToStore = async () => {
    const currentLanguagePage = router.query.languageId;
    const response = await getLanguages()(homeDispatch);
    const selectedLang = response.data.find(
      i => i.languge_id == currentLanguagePage
    );
    if (selectedLang) {
      setSelectedLanguage(selectedLang.title);
    } else {
      setSelectedLanguage("LANGUAGES");
    }
  };

  const profileData = async () => {
    if (userDetails) {
      const response = await getUserProfile(userDetails.access_type)(dispatch);
    }
  };

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

  const goToLanguage = language => {
    setSelectedLanguage(language.title);
    router.push(`${LANGUAGE_DETAIL}${language.languge_id}`);
    setVisible(!visible);
  };

  const goToDashboard = () => {
    const activatedLanguage = authState.profileData.all_languages;
    if (
      userDetails.access_type == LOGIN_STUDENT_TAB &&
      activatedLanguage.length == 0
    ) {
      router.push(HOME_PAGE);
    } else if (
      userDetails.access_type == LOGIN_STUDENT_TAB &&
      activatedLanguage.length != 0
    ) {
      router.push(STUDENT_DASHBOARD_PATH);
    } else if (userDetails.access_type == LOGIN_MENTOR_TAB) {
      router.push(MENTOR_DASHBOARD_PATH);
    } else if (
      userDetails.access_type == ADMIN_ACCESS_TYPE ||
      userDetails.access_type == SUPER_ADMIN_ACCESS_TYPE
    ) {
      router.push(ADMIN_DASHBOARD_PATH);
    } else {
      router.push(STUDENT_DASHBOARD_PATH);
    }
  };
  const inviteFriends = () => {
    window.open("https://web.whatsapp.com/send?text=https://tremendo.in/");
  };
  const desktopNavbar = () => {
    return (
      <Menu fixed="top" secondary className={styles.menuWrapper}>
        <Menu.Item onClick={() => router.push(HOME_PAGE)}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Ftremendo_logo.png?alt=media&token=2180fdbc-cab2-4f3e-9721-cd61da3348ba`}
            alt="tremendo logo"
            width={"150px"}
            height={"50px"}
          />
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
                <Dropdown
                  text={selectedLanguage}
                  className={`${
                    styles.dropdownWrapper
                  } ${router.pathname.includes(LANGUAGE_DETAIL) &&
                    styles.activeItemWrapper}`}
                >
                  <Dropdown.Menu>
                    {homeState.getLanguage.map((i, index) => (
                      <Dropdown.Item
                        key={index}
                        text={`${i.title}  (${i.welcome_text})`}
                        onClick={() => goToLanguage(i)}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                  name="REVIEW"
                  className={`${styles.itemWrapper} ${router.pathname.includes(
                    REVIEW_PATH
                  ) && styles.activeItemWrapper}`}
                  onClick={() => router.push(REVIEW_PATH)}
                />
                <Menu.Item
                  name="FAQ'S"
                  className={`${styles.itemWrapper} ${router.pathname.includes(
                    FAQS_PATH
                  ) && styles.activeItemWrapper}`}
                  onClick={() => router.push(FAQS_PATH)}
                />
                <Menu.Item
                  name="BLOGS"
                  className={`${styles.itemWrapper} ${router.pathname.includes(
                    BLOGS_PATH
                  ) && styles.activeItemWrapper}`}
                  onClick={() => router.push(BLOGS_PATH)}
                />
                <Menu.Item
                  name="CONTACT US"
                  className={`${styles.itemWrapper} ${router.pathname.includes(
                    CONTACTUS_PATH
                  ) && styles.activeItemWrapper}`}
                  onClick={() => router.push(CONTACTUS_PATH)}
                />
              </Menu.Menu>
              {!Cookies.get(COOKIE_TOKEN) ? (
                <Menu.Item
                  className={styles.itemWrapper}
                  onClick={() => router.push(LOGIN_PATH)}
                >
                  LOGIN
                </Menu.Item>
              ) : (
                <Menu.Item>
                  <Popup
                    trigger={
                      <Image
                        src={
                          userDetails.profileUrl
                            ? userDetails.profileUrl
                            : `${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41`
                        }
                        circular
                        alt="profile"
                        height={"35px"}
                        width={"35px"}
                      />
                    }
                    flowing
                    hoverable
                    style={{ padding: "0px" }}
                  >
                    <div className={styles.profileName}>
                      {userDetails.name ? userDetails.name : userDetails.email}
                    </div>
                    <div
                      className={styles.profileOptions}
                      onClick={() => goToDashboard()}
                    >
                      Dashboard
                    </div>
                    <div
                      className={styles.profileOptions}
                      onClick={() => inviteFriends()}
                    >
                      Invite friends
                    </div>
                    <div
                      className={styles.profileLogout}
                      onClick={() => signUpAndLogout()}
                    >
                      Log out
                    </div>
                  </Popup>
                </Menu.Item>
              )}
              {!Cookies.get(COOKIE_TOKEN) && (
                <Menu.Item>
                  <Button
                    label={"SIGN UP"}
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
              )}
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
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_ASSETS_PATH}%2Ftremendo_logo.png?alt=media&token=2180fdbc-cab2-4f3e-9721-cd61da3348ba`}
              alt="logo"
              size={"small"}
            />
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
                <div
                  className={styles.mwebMenus}
                  onClick={() => goToDashboard()}
                >
                  {userDetails.name ? userDetails.name : userDetails.email}
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
                    <Dropdown.Item
                      key={index}
                      text={i.title}
                      onClick={() => goToLanguage(i)}
                    />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div
                className={styles.mwebMenus}
                onClick={() => router.push(REVIEW_PATH)}
              >
                Review
              </div>
              <div
                className={styles.mwebMenus}
                onClick={() => router.push(FAQS_PATH)}
              >
                FAQs
              </div>
              <div
                className={styles.mwebMenus}
                onClick={() => router.push(BLOGS_PATH)}
              >
                Blogs
              </div>
              <div
                className={styles.mwebMenus}
                onClick={() => router.push(CONTACTUS_PATH)}
              >
                Contact Us
              </div>
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
