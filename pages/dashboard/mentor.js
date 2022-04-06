import Head from "next/head";
import { useContext, useState } from "react";
import Tab from "../../components/Tab/Tab";
import styles from "../../styles/student.module.css";
import withAuth from "../../utils/withAuth";
import MentorDashboard from "../../components/Dashboard/MentorDashboard";
import BatchManagement from "../../components/CourseDetailTab/BatchManagement";
import MentorMyResource from "../../components/MyResourceTab/MentorMyResource";
import MentorProgresstab from "../../components/ProgressTab/MentorProgresstab";
import MentorFaq from "../../components/FaqTab/MentorFaq";
import MentorProfile from "../../components/ProfileTab/MentorProfile";

const INITIAL_TAB_INDEX = 1;

function Mentor() {
  const tabs = [
    {
      id: 1,
      tab: "Dashboard",
      icon: "dashboardIcon",
      component: <MentorDashboard />
    },
    {
      id: 2,
      tab: "Batch Details",
      icon: "courseDetail",
      component: <BatchManagement />
    },
    {
      id: 3,
      tab: "My Resources",
      icon: "myResource",
      component: <MentorMyResource />
    },
    {
      id: 4,
      tab: "Progress",
      icon: "progress",
      component: <MentorProgresstab />
    },
    { id: 5, tab: "FAQ", icon: "faq", component: <MentorFaq /> },
    {
      id: 6,
      tab: "Term & Condition",
      icon: "termAndCondition",
      component: "6"
    },
    { id: 7, tab: "Profile", icon: "setting", component: <MentorProfile /> }
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
        studentDashboard={false}
        sendDataCallback={id => setSelectedTabIndex(id)}
      />
    </div>
  );
}

export default withAuth(Mentor);
