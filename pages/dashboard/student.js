import Head from "next/head";
import Icon from "../../assets/Icon/Icon";
import Tab from "../../components/Tab/Tab";
import styles from "../../styles/Blogs.module.css";
import withAuth from "../../utils/withAuth";

function Student() {
  const tabs = [
    { id: 1, tab: "Dashboard", icon: "dashboardIcon" },
    { id: 2, tab: "Course Details", icon: "dashboardIcon" },
    { id: 3, tab: "My Resources", icon: "dashboardIcon" },
    { id: 4, tab: "Progress", icon: "dashboardIcon" },
    { id: 5, tab: "FAQ", icon: "dashboardIcon" },
    { id: 6, tab: "Term & Condition", icon: "dashboardIcon" },
    { id: 7, tab: "Profile", icon: "setting" }
  ];
  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Dashboard</title>
        <meta name="description" content="Tremendo Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tab tabsData={tabs} />
      {/* <div>
        <Icon name="setting" color="#ff9000" />
      </div> */}
    </div>
  );
}

export default withAuth(Student);
