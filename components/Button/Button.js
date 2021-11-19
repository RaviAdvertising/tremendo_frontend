import Link from "next/link";
import styles from "./Button.module.css";
export default function Button({ children, url, btnStyle }) {
  return (
    <Link href={url}>
      <a className={styles.base} style={btnStyle}>
        {children}
      </a>
    </Link>
  );
}
