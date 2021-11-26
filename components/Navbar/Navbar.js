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
import { language } from "../../utils/constants";
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

function Navbar({}) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
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
                    {language.map((i, index) => (
                      <Dropdown.Item key={index} text={i.name} />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item name="REVIEW" className={styles.itemWrapper} />
                <Menu.Item name="FAQ'S" className={styles.itemWrapper} />
                <Menu.Item name="BLOGS" className={styles.itemWrapper} />
                <Menu.Item name="CONTACT US" className={styles.itemWrapper} />
              </Menu.Menu>
              <Menu.Item
                className={styles.itemWrapper}
                onClick={() => router.push(LOGIN_PATH)}
              >
                LOGIN
              </Menu.Item>
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
                  onClick={() => router.push(SIGN_UP_PATH)}
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
              <div
                className={styles.mwebMenus}
                onClick={() => router.push(LOGIN_PATH)}
              >
                Login
              </div>
              <div
                className={styles.mwebMenus}
                onClick={() => router.push(SIGN_UP_PATH)}
              >
                Sign Up
              </div>
              <Dropdown
                text="Languages"
                pointing="left"
                className={styles.mwebLanguage}
              >
                <Dropdown.Menu>
                  {language.map((i, index) => (
                    <Dropdown.Item key={index} text={i.name} />
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
