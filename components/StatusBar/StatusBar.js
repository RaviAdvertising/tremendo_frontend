import styles from "./StatusBar.module.css";

export default function StatusBar({ children }) {
  return (
    <div className={styles.base}>
      <div className={styles.circleLineWrapper}>
        <div className={styles.circleBase}>
          <div className={styles.miniCircle}></div>
        </div>
        <div className={styles.lines}></div>
      </div>
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}
