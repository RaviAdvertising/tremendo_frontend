import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tremendo</title>
        <meta name="description" content="Tremendo Education website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.test}>ankit</div>
      <div className={styles.test}>ankit</div>
    </div>
  );
}
