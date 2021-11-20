import styles from "./PromotionBox.module.css";
import { useRouter } from "next/router";
import { ABOUTUS_PATH } from "../../utils/routes";

export default function PromotionBox(props) {
  const { heading, description } = props;
  const router = useRouter();
  const navigateToPage = () => {
    router.push(ABOUTUS_PATH);
  };
  return (
    <div className={styles.base}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.subheading}>{description.slice(0, 150)}...</div>
      <div className={styles.learnMore} onClick={() => navigateToPage()}>
        Learn More
      </div>
    </div>
  );
}
