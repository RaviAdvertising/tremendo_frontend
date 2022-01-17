import styles from "./BlogBox.module.css";
import Image from "next/image";
export default function BlogBox({ data }) {
  return (
    <div className={styles.base} style={{ backgroundColor: data.bg_color }}>
      <div className={styles.heading} style={{ color: data.title_color }}>
        {data.title}
      </div>
      <div className={styles.description} style={{ color: data.desc_color }}>
        {data.short_desc}
      </div>
      <div className={styles.btnImageWrapper}>
        <div
          className={styles.btnText}
          style={{ color: data.cta_title_color, backgroundColor: data.cta_bg }}
        >
          {data.cta_title} {">"}
          {">"}
        </div>
        <div>
          <Image
            alt="blogs"
            src={data.image_url}
            height={"80px"}
            width={"100px"}
          />
        </div>
      </div>
    </div>
  );
}
