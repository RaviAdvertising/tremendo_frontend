import styles from "./Footer.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ABOUTUS_PATH,
  CONTACTUS_PATH,
  FAQS_PATH,
  LANGUAGE_DETAIL,
  LOGIN_PATH,
  SIGN_UP_PATH
} from "../../utils/routes";
import { useContext } from "react";
import { GlobalContext } from "../../Context/Provider";

const INSTAGRAM_URL = "https://instagram.com/tremendo.in?utm_medium=copy_link";
const FB_URL = "https://www.facebook.com/tremendoin";
const LINKDIN_URL = "https://www.linkedin.com/company/tremendo-in";
const TWITTER_URL = "https://twitter.com/tremendo_in  ";

export default function Footer(props) {
  const { homeState } = useContext(GlobalContext);
  const router = useRouter();
  if (
    router.pathname.includes(SIGN_UP_PATH) ||
    router.pathname.includes(LOGIN_PATH)
  ) {
    return false;
  }
  const goToSocialMedia = url => {
    window.open(url);
  };
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
            <div
              className={styles.footerItem}
              onClick={() => router.push(`${ABOUTUS_PATH}#whoweare`)}
            >
              Who we are
            </div>
            <div
              className={styles.footerItem}
              onClick={() => router.push(`${ABOUTUS_PATH}#whatwedo`)}
            >
              What we do
            </div>
            <div
              className={styles.footerItem}
              onClick={() => router.push(`${ABOUTUS_PATH}#ourmission`)}
            >
              Our mission
            </div>
            <div
              className={styles.footerItem}
              onClick={() => router.push(`${ABOUTUS_PATH}#ourvision`)}
            >
              Our vision
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.heading}>Languages</div>
          <div className={styles.subheading}>
            {homeState.getLanguage.map((i, index) => (
              <div
                key={index}
                className={styles.footerItem}
                onClick={() => router.push(`${LANGUAGE_DETAIL}${i.languge_id}`)}
              >
                {i.title}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.heading}>Help</div>
          <div className={styles.subheading}>
            <div
              className={styles.footerItem}
              onClick={() => router.push(FAQS_PATH)}
            >
              FAQ’s
            </div>
            <div
              className={styles.footerItem}
              onClick={() => router.push(CONTACTUS_PATH)}
            >
              Contact us
            </div>
            <div className={styles.socialSection}>
              <div className={styles.heading}>Follow Us</div>
              <div className={styles.followIcons}>
                <div
                  className={styles.socialIcons}
                  onClick={() => goToSocialMedia(FB_URL)}
                >
                  <Image
                    src={"/Images/facebook.png"}
                    alt={"facebook"}
                    height={"50px"}
                    width={"50px"}
                  />
                </div>
                <div
                  className={styles.socialIcons}
                  onClick={() => goToSocialMedia(INSTAGRAM_URL)}
                >
                  <Image
                    src={"/Images/instagram.png"}
                    alt={"instagram"}
                    height={"50px"}
                    width={"50px"}
                  />
                </div>
                <div
                  className={styles.socialIcons}
                  onClick={() => goToSocialMedia(TWITTER_URL)}
                >
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
        <div className={styles.copyright}>© 2022 Tremendo</div>
        <div>Terms and Conditions | Privacy Statement</div>
      </div>
    </div>
  );
}
