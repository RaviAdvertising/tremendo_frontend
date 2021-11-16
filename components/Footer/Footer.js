import { language } from "../../utils/constants";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer(props) {
  return (
    <div className={styles.base}>
      <div className={styles.whiteFooter}>
        <div className={styles.footerSection}>
          <div className={styles.heading}>About Tremendo</div>
          <div className={styles.subheading}>
            Learning new languages can be fun and exciting when you embark on
            that journey with Tremendo. A hybrid learning platform where you get
            live classes and get real-time feedback on your progress.
            <br />
            <br />
            We started Tremendo to build a bridge of communication across the
            world. To give every keen learner a platform where they can master
            any language at the comfort of their home. It also helps people
            achieve their career goals and enroll in colleges abroad.
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.heading}>Know us better</div>
          <div className={styles.subheading}>
            <div className={styles.footerItem}>Who we are</div>
            <div className={styles.footerItem}>What we do</div>
            <div className={styles.footerItem}>Our mission</div>
            <div className={styles.footerItem}>Our vision</div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.heading}>Languages</div>
          <div className={styles.subheading}>
            {language.map((i, index) => (
              <div key={index} className={styles.footerItem}>
                {i.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.heading}>Help</div>
          <div className={styles.subheading}>
            <div className={styles.footerItem}>FAQ’s</div>
            <div className={styles.footerItem}> Contact us</div>
            <div className={styles.socialSection}>
              <div className={styles.heading}>Follow Us</div>
              <div className={styles.followIcons}>
                <div className={styles.socialIcons}>
                  <Image
                    src={"/Images/facebook.png"}
                    alt={"facebook"}
                    height={"50px"}
                    width={"50px"}
                  />
                </div>
                <div className={styles.socialIcons}>
                  <Image
                    src={"/Images/instagram.png"}
                    alt={"instagram"}
                    height={"50px"}
                    width={"50px"}
                  />
                </div>
                <div className={styles.socialIcons}>
                  <Image
                    src={"/Images/twitter.png"}
                    alt={"twitter"}
                    height={"50px"}
                    width={"50px"}
                  />
                </div>
                <div className={styles.socialIcons}>
                  <Image
                    src={"/Images/youtube.png"}
                    alt={"youtube"}
                    height={"50px"}
                    width={"50px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blackFooterbase}>
        <div className={styles.copyright}>© 2021 Tremendo</div>
        <div>Terms and Conditions | Privacy Statement</div>
      </div>
    </div>
  );
}
