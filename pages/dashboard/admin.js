import Head from "next/head";
import { useContext, useState } from "react";
import styles from "../../styles/student.module.css";
import withAuth from "../../utils/withAuth";
import BatchManagement from "../../components/CourseDetailTab/BatchManagement";
import MentorMyResource from "../../components/MyResourceTab/MentorMyResource";
import MentorProgresstab from "../../components/ProgressTab/MentorProgresstab";
import MentorFaq from "../../components/FaqTab/MentorFaq";
import MentorProfile from "../../components/ProfileTab/MentorProfile";
import AdminTab from "../../components/Tab/AdminTab";
import AdminDashboard from "../../components/Dashboard/AdminDashboard";

const INITIAL_TAB_INDEX = 1;

function Admin() {
  const tabs = [
    {
      id: 1,
      tab: "Dashboard",
      icon: "dashboardIcon",
      component: <AdminDashboard />
    },
    {
      id: 2,
      tab: "Pages",
      icon: "courseDetail",
      component: <BatchManagement />
    },
    {
      id: 3,
      tab: "Batch Details",
      icon: "myResource",
      component: <MentorMyResource />
    },
    {
      id: 4,
      tab: "Mentor Details",
      icon: "progress",
      component: <MentorProgresstab />
    },
    { id: 5, tab: "Language", icon: "faq", component: <MentorFaq /> },
    {
      id: 6,
      tab: "Calender",
      icon: "termAndCondition",
      component: "6"
    },
    { id: 7, tab: "Setting", icon: "setting", component: <MentorProfile /> }
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
      <AdminTab
        tabsData={tabs}
        selectTab={data => clickOnTab(data)}
        selectedTab={selectedTabIndex}
      />
    </div>
  );
}

export default withAuth(Admin);
