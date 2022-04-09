import Head from "next/head";
import { useContext, useState } from "react";
import styles from "../../styles/student.module.css";
import withAuth from "../../utils/withAuth";
import MentorMyResource from "../../components/MyResourceTab/MentorMyResource";
import MentorProgresstab from "../../components/ProgressTab/MentorProgresstab";
import MentorFaq from "../../components/FaqTab/MentorFaq";
import MentorProfile from "../../components/ProfileTab/MentorProfile";
import AdminTab from "../../components/Tab/AdminTab";
import AdminDashboard from "../../components/Dashboard/AdminDashboard";
import AdminPages from "../../components/AdminPages/AdminPages";
import CalenderTab from "../../components/CalenderTab/CalenderTab";
import AdminBatchManagment from "../../components/CourseDetailTab/AdminBatchManagment";
import MentorBatchDetails from "../../components/CourseDetailTab/MentorBatchDetails";
import { ADMIN_ACCESS_TYPE, USER_DETAILS } from "../../utils/constants";
import LanguageEdit from "../../components/LanguageEdit/LanguageEdit";

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
      component: <AdminPages />
    },
    {
      id: 3,
      tab: "Batch Details",
      icon: "myResource",
      component: <AdminBatchManagment />
    },
    {
      id: 4,
      tab: "Mentor Details",
      icon: "progress",
      component: <MentorBatchDetails />
    },
    { id: 5, tab: "Language", icon: "faq", component: <LanguageEdit /> },
    {
      id: 6,
      tab: "Calender",
      icon: "termAndCondition",
      component: <CalenderTab />
    },
    { id: 7, tab: "Setting", icon: "setting", component: <MentorProfile /> }
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(INITIAL_TAB_INDEX);
  const clickOnTab = data => {
    setSelectedTabIndex(data.id);
  };

  const userDetails =
    typeof window !== "undefined" &&
    localStorage.getItem(USER_DETAILS) &&
    JSON.parse(localStorage.getItem(USER_DETAILS));

  // if (userDetails.access_type != ADMIN_ACCESS_TYPE) {
  //   return false;
  // }

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
