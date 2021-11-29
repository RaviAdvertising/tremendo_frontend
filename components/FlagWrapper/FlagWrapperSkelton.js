import styles from "./FlagWrapperSkelton.module.css";
import Skeleton from "../Skelton/Skeleton";

export default function FlagWrapperSkelton() {
  return (
    <div className={styles.base}>
      <div className={styles.flags}>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((i, index) => (
          <div
            className={styles.box}
            key={index}
            style={{ margin: "20px", borderRadius: "10px" }}
          >
            <Skeleton>
              <div className={styles.box}></div>
            </Skeleton>
          </div>
        ))}
      </div>
    </div>
  );
}
