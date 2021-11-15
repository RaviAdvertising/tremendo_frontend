import styles from "./Navbar.module.css";
import { Dropdown, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import { language } from "../../utils/constants";
export default function Navbar() {
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
        <div className={styles.signUpButton}>SIGN UP</div>
      </Menu.Item>
    </Menu>
  );
}
