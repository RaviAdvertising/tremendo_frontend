import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import Tab from "../../components/Tab/Tab";
import styles from "../../styles/student.module.css";
import withAuth from "../../utils/withAuth";
import MentorDashboard from "../../components/Dashboard/MentorDashboard";
import BatchManagement from "../../components/CourseDetailTab/BatchManagement";
import MentorMyResource from "../../components/MyResourceTab/MentorMyResource";
import MentorProgresstab from "../../components/ProgressTab/MentorProgresstab";
import MentorFaq from "../../components/FaqTab/MentorFaq";
import MentorProfile from "../../components/ProfileTab/MentorProfile";
import { LOGIN_MENTOR_TAB, USER_DETAILS } from "../../utils/constants";
import { useRouter } from "next/router";
import { HOME_PAGE, MENTOR_DASHBOARD_PATH } from "../../utils/routes";
import { GlobalContext } from "../../Context/Provider";
import {
  getMentorBatches,
  getMentorStudentList,
  mentorUpcomingTasks
} from "../../Context/Actions/Dashboard/DashboardAction";

const INITIAL_TAB_INDEX = 6;

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
    { id: 6, tab: "Profile", icon: "setting", component: <MentorProfile /> }
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(INITIAL_TAB_INDEX);
  const {
    studentDashboardState,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const router = useRouter();

  const clickOnTab = data => {
    setSelectedTabIndex(data.id);
    router.push(`${MENTOR_DASHBOARD_PATH}?id=${data.id}`);
  };

  useEffect(() => {
    setTabIndex();
    getInitalData();
  }, []);
  const setTabIndex = () => {
    const tabID = router.query.id ? router.query.id : INITIAL_TAB_INDEX;
    setSelectedTabIndex(tabID);
  };
  const getInitalData = async () => {
    const batches = await getMentorBatches()(dispatch);
    const firstBatchId = batches.data.length > 0 && batches.data[0].batch_id;
    await getMentorStudentList(firstBatchId)(dispatch);
    await mentorUpcomingTasks(firstBatchId)(dispatch);
  };
  const userDetails =
    typeof window !== "undefined" &&
    localStorage.getItem(USER_DETAILS) &&
    JSON.parse(localStorage.getItem(USER_DETAILS));

  if (userDetails && userDetails.access_type != LOGIN_MENTOR_TAB) {
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
        studentDashboard={false}
        sendDataCallback={id => setSelectedTabIndex(id)}
      />
    </div>
  );
}

export default withAuth(Mentor);
