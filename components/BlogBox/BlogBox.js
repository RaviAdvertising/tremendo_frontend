import styles from "./BlogBox.module.css";
import Image from "next/image";
export default function BlogBox() {
  return (
    <div className={styles.base} style={{ backgroundColor: "#ff9000" }}>
      <div className={styles.heading} style={{ color: "#fff" }}>
        Lorem ipsum dolor sit ame
      </div>
      <div className={styles.description} style={{ color: "#fff" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </div>
      <div className={styles.btnImageWrapper}>
        <div
          className={styles.btnText}
          style={{ color: "#121212", backgroundColor: "#fff" }}
        >
          Read More {">"}
          {">"}
        </div>
        <div>
          <Image
            alt="blogs"
            src={"/Images/blog1.png"}
            height={"90px"}
            width={"100px"}
          />
        </div>
      </div>
    </div>
  );
}
