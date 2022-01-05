import Head from "next/head";
import BlogBox from "../../components/BlogBox/BlogBox";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import ImageComponent from "../../components/Image/Image";
import styles from "../../styles/Blogs.module.css";

export default function Blogs() {
  const header = headerName => {
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.borderLineStyling}></div>
        <div className={styles.headerHeading}>{headerName}</div>
        <div className={styles.borderLineStyling}></div>
      </div>
    );
  };
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Blogs</title>
        <meta name="description" content="Tremendo Blogs page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.banner}>
        <DesktopOnly>
          <ImageComponent
            src={"/Images/BlogsBanner.png"}
            paddingBottom={"21%"}
            alt={"banner logo"}
          />
        </DesktopOnly>
        <MobileOnly>
          <ImageComponent
            src={"/Images/about_banner_mobile.png"}
            paddingBottom={"65%"}
            alt={"banner logo"}
          />
        </MobileOnly>
      </div>

      <div className={styles.sections}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>{header("OUR BLOG")}</div>
          <div className={styles.blogWrapper}>
            {[1, 1, 1, 1, 1, 1].map((i, index) => (
              <div key={index} className={styles.blogs}>
                <BlogBox />
              </div>
            ))}
          </div>
        </div>
        <div>
          <ImageComponent
            src={"/Images/learn_grow_lead.png"}
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
    </div>
  );
}
