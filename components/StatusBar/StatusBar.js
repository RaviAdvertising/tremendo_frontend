import styles from "./StatusBar.module.css";

export default function StatusBar({}) {
  return (
    <div className={styles.base}>
      <div className={styles.circleLineWrapper}>
        <div className={styles.circleBase}>
          <div className={styles.miniCircle}></div>
        </div>
        <div className={styles.lines}></div>
      </div>
      <div className={""}>
        <div className={""}>content</div> <div className={""}>content</div>{" "}
        <div className={""}>content</div>
        <div className={""}>content</div> <div className={""}>content</div>{" "}
        <div className={""}>content</div>
      </div>
    </div>
  );
}
