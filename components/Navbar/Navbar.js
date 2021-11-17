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

function Navbar({}) {
  const [visible, setVisible] = useState(false);

  const router = useRouter();
  const desktopNavbar = () => {
    return (
      <Menu fixed="top" secondary className={styles.menuWrapper}>
        <Menu.Item>
          <Image src="Images/tremendo_logo.png" alt="logo" />
        </Menu.Item>

        <Menu.Menu position="right" className={styles.menuStyling}>
          <Menu.Item
            name="ABOUT US"
            className={styles.itemWrapper}
            //onClick={this.handleItemClick}
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
        <Menu.Item className={styles.itemWrapper}>LOGIN</Menu.Item>
        <Menu.Item>
          <div
            className={styles.signUpButton}
            onClick={() => router.push("/signup")}
          >
            SIGN UP
          </div>
        </Menu.Item>
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
            <Image src="Images/tremendo_logo.png" alt="logo" />
          </div>
        </div>
        {visible && (
          <div
            className={styles.overlayBase}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.contentWrapper}>
              <div>Sign In</div>
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
