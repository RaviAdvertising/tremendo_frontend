import { useContext } from "react";
import { DeviceContext } from "./_app";
import Image from "../components/Image/Image";
import styles from "../styles/Error.module.css";
export default function Custom404(props) {
  const { isMobileView } = useContext(DeviceContext);
  return (
    <div className={styles.base}>
      <Image
        src={isMobileView ? "Images/404_mobile.png" : "Images/404_desktop.png"}
        alt="404 error"
        paddingBottom={isMobileView ? "70%" : "50%"}
      />
    </div>
  );
}
