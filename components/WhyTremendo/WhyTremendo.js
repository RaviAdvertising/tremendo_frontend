import Icon from "../Icons/Icons";
import styles from "./WhyTremendo.module.css";

export default function WhyTremendo(props) {
  return (
    <div className={styles.base}>
      <div>
        <Icon image={props.image} size={50} />
      </div>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>{props.heading}</div>
        <div className={styles.subheading}>{props.subheading}</div>
      </div>
    </div>
  );
}
