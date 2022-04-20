import Head from "next/head";
import { useContext, useState } from "react";
import Tab from "../../components/Tab/Tab";
import styles from "../../styles/student.module.css";
import withAuth from "../../utils/withAuth";
import Dashboard from "../../components/Dashboard/Dashboard";
import CourseDetailTab from "../../components/CourseDetailTab/CourseDetailTab";
import ProgressTab from "../../components/ProgressTab/ProgressTab";
import MyResourceTab from "../../components/MyResourceTab/MyResourceTab";
import FaqTab from "../../components/FaqTab/FaqTab";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import { LOGIN_STUDENT_TAB, USER_DETAILS } from "../../utils/constants";

const INITIAL_TAB_INDEX = 6;

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
    {
      id: 3,
      tab: "My Resources",
      icon: "myResource",
      component: <MyResourceTab />
    },
    { id: 4, tab: "Progress", icon: "progress", component: <ProgressTab /> },
    { id: 5, tab: "FAQ", icon: "faq", component: <FaqTab /> },
    { id: 6, tab: "Profile", icon: "setting", component: <ProfileTab /> }
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(INITIAL_TAB_INDEX);
  const clickOnTab = data => {
    setSelectedTabIndex(data.id);
  };

  const userDetails =
    typeof window !== "undefined" &&
    localStorage.getItem(USER_DETAILS) &&
    JSON.parse(localStorage.getItem(USER_DETAILS));

  if (userDetails.access_type != LOGIN_STUDENT_TAB) {
    return false;
  }

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
        studentDashboard={true}
        sendDataCallback={id => setSelectedTabIndex(id)}
      />
    </div>
  );
}

export default withAuth(Student);
