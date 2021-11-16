import { ReadMore } from "../ReadMore/ReadMore";
import styles from "./PromotionBox.module.css";

export default function PromotionBox(props) {
  const { heading, description } = props;
  return (
    <div className={styles.base}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.subheading}>{description.slice(0, 150)}...</div>
      <div className={styles.learnMore}>Learn More</div>
    </div>
  );
}
