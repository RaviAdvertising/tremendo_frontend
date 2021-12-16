import styles from "./LanguageDetailSkelton.module.css";
import Skeleton from "./Skeleton";
function LanguageDetailSkelton() {
  return (
    <Skeleton>
      <div className={styles.base}>
        <div className={styles.heading}></div>
        <div className={styles.description}>
          <div className={styles.descriptionText}></div>
          <div className={styles.descriptionText}></div>
          <div className={styles.descriptionTextSmall}></div>
          <div className={styles.descriptionTextMoreSmall}></div>
        </div>
        <div className={styles.boxWrapper}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </div>
    </Skeleton>
  );
}

export default LanguageDetailSkelton;
