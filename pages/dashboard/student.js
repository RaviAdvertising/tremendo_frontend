import Head from "next/head";
import { useContext, useState } from "react";
import Tab from "../../components/Tab/Tab";
import styles from "../../styles/student.module.css";
import withAuth from "../../utils/withAuth";
import Dashboard from "../../components/Dashboard/Dashboard";
import CourseDetailTab from "../../components/CourseDetailTab/CourseDetailTab";

const INITIAL_TAB_INDEX = 1;

function Student() {
  const tabs = [
    {
      id: 1,
      tab: "Dashboard",
      icon: "dashboardIcon",
      component: <Dashboard />
    },
    {
      id: 2,
      tab: "Course Details",
      icon: "courseDetail",
      component: <CourseDetailTab />
    },
    { id: 3, tab: "My Resources", icon: "myResource", component: "3" },
    { id: 4, tab: "Progress", icon: "progress", component: "4" },
    { id: 5, tab: "FAQ", icon: "faq", component: "5" },
    {
      id: 6,
      tab: "Term & Condition",
      icon: "termAndCondition",
      component: "6"
    },
    { id: 7, tab: "Profile", icon: "setting", component: "7" }
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(INITIAL_TAB_INDEX);
  const clickOnTab = data => {
    setSelectedTabIndex(data.id);
  };

  return (
    <div className={styles.base}>
      <Head>
        <title>Tremendo-Dashboard</title>
        <meta name="description" content="Tremendo Dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tab
        tabsData={tabs}
        selectTab={data => clickOnTab(data)}
        selectedTab={selectedTabIndex}
      />
      {/* <div>
        <Icon name="setting" color="#ff9000" />
      </div> */}
    </div>
  );
}

export default withAuth(Student);
