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
                  className={`${styles.itemWrapper} ${styles.activeItemWrapper}`}
                  onClick={() => router.push(ABOUTUS_PATH)}
                />
                <Dropdown text="LANGUAGES" className={styles.dropdownWrapper}>
                  <Dropdown.Menu>
                    {language.map((i, index) => (
                      <Dropdown.Item key={index} text={i.name} />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                  name="REVIEW"
                  className={styles.itemWrapper}
                  //   onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="FAQ'S"
                  className={styles.itemWrapper}
                  //   onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="BLOGS"
                  className={styles.itemWrapper}
                  //   onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="CONTACT US"
                  className={styles.itemWrapper}
                  //   onClick={this.handleItemClick}
                />
              </Menu.Menu>
              <Menu.Item
                className={styles.itemWrapper}
                onClick={() => router.push(LOGIN_PATH)}
              >
                LOGIN
              </Menu.Item>
              <Menu.Item>
                <Button
                  url={SIGN_UP_PATH}
                  btnStyle={{
                    color: "#fff",
                    fontWeight: "600",
                    backgroundColor: "#268f8c",
                    borderRadius: "18px",
                    padding: "11px 22px 10px 21px"
                  }}
                >
                  SIGN UP
                </Button>
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
          <div
            className={styles.toggleIcon}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="sidebar" size={"big"} />
          </div>
          <div>
            <Image src="Images/tremendo_logo.png" alt="logo" size={"small"} />
          </div>
        </div>
        {visible && (
          <div
            className={styles.overlayBase}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.contentWrapper}>
              <Button url={SIGN_UP_PATH}>SIGN UP</Button>
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
