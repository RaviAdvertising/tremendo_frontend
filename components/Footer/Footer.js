import { Fragment } from "react";
import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <div className={styles.base}>
      <div className={styles.copyright}>© 2021 Tremendo</div>
      <div>Terms and Conditions | Privacy Statement</div>
    </div>
  );
}
