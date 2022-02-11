import { useContext } from "react";
import { DeviceContext } from "./_app";
import Image from "../components/Image/Image";
import styles from "../styles/Error.module.css";
import Head from "next/head";

export default function Main(props) {
  const { isMobileView } = useContext(DeviceContext);
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo</title>
        <meta name="description" content="Tremendo About us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={isMobileView ? "Images/404_mobile.jpg" : "Images/404_desktop.jpg"}
        alt="404 error"
        paddingBottom={isMobileView ? "70%" : "50%"}
      />
    </div>
  );
}
