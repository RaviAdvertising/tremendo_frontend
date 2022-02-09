import Skeleton from "../Skelton/Skeleton";
import styles from "./StudentDashboardSkelton.module.css";
export default function StudentDashboardSkelton() {
  return (
    <div className={styles.base}>
      <Skeleton>
        <div className={styles.banner}></div>
        <div className={styles.classTitle}></div>
        <div className={styles.classes}>
          <div className={styles.classBox}></div>
          <div className={styles.classBox}></div>
          <div className={styles.classBox}></div>
        </div>
        <div className={styles.graphWrapper}>
          <div className={styles.graph}>
            <div className={styles.graphTitle}></div>
            <div className={styles.graphBox}></div>
          </div>
          <div className={styles.graph}>
            <div className={styles.graphTitle}></div>
            <div className={styles.graphBox}></div>
          </div>
        </div>
      </Skeleton>
    </div>
  );
}
