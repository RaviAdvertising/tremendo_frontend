import Head from "next/head";
import { useContext, useEffect } from "react";
import BlogBox from "../../components/BlogBox/BlogBox";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import ImageComponent from "../../components/Image/Image";
import LanguageDetailSkelton from "../../components/Skelton/LanguageDetailSkelton";
import { getBlogs } from "../../Context/Actions/Home/HomeAction";
import { GlobalContext } from "../../Context/Provider";
import styles from "../../styles/Blogs.module.css";

export default function Blogs() {
  const { homeState, homeDispatch: dispatch } = useContext(GlobalContext);
  useEffect(() => {
    getBlogs()(dispatch);
  }, []);

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
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FBlogsBanner.png?alt=media&token=b7c1e412-c53d-4eb7-86ce-e65a4a03586a"
            }
            paddingBottom={"21%"}
            alt={"banner logo"}
          />
        </DesktopOnly>
        <MobileOnly>
          <ImageComponent
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fabout_banner_mobile.png?alt=media&token=be8f7644-800d-41fd-bb84-44e199f49785"
            }
            paddingBottom={"65%"}
            alt={"banner logo"}
          />
        </MobileOnly>
      </div>

      <div className={styles.sections}>
        {homeState.getBlogsLoading ? (
          <LanguageDetailSkelton />
        ) : (
          <div className={styles.contentWrapper}>
            <div className={styles.header}>{header("OUR BLOG")}</div>
            <div className={styles.blogWrapper}>
              {homeState.getBlogs.map((i, index) => (
                <div key={index} className={styles.blogs}>
                  <BlogBox data={i} />
                </div>
              ))}
            </div>
          </div>
        )}
        <div>
          <ImageComponent
            src={
              "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Flearn_grow_lead.png?alt=media&token=28f934e6-52ec-4783-a68b-aca27f4d2d3e"
            }
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
    </div>
  );
}
