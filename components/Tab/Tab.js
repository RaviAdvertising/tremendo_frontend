import Input from "../Input/Input";
import styles from "./Tab.module.css";
import moment from "moment";
import IconComponent from "../../assets/Icon/Icon";
import ImageComponent from "next/image";
import { USER_DETAILS } from "../../utils/constants";
import CustomImage from "../Image/Image";
import DesktopOnly from "../DeviceCheck/DesktopOnly";
import MobileOnly from "../DeviceCheck/MobileOnly";
import {
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Dropdown,
  Label
} from "semantic-ui-react";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/Provider";
import {
  getMentorDashboardData,
  getMentorStudentList
} from "../../Context/Actions/Dashboard/DashboardAction";
import {
  setStudentSelectedLanguage,
  storeMentorBatch
} from "../../Context/Actions/Language/LanguageAction";

export default function Tab({
  tabsData,
  selectTab,
  selectedTab,
  studentDashboard,
  sendDataCallback
}) {
  const [visible, setVisible] = useState(false);
  const [startSearch, setStartSearch] = useState(false);
  const [inputVal, setInputValue] = useState("");
  const [selectedBatch, setSelectedBatches] = useState("");
  const {
    studentDashboardState,
    authState,
    languageState,
    languageDispatch: langDispatch,
    studentDashboardDispatch: dispatch
  } = useContext(GlobalContext);
  const SELECTED_TAB_COLOR = "#ff9000";
  const name =
    typeof window !== "undefined" && localStorage.getItem(USER_DETAILS)
      ? JSON.parse(localStorage.getItem(USER_DETAILS)).name
      : "User";

  const onChangeSearch = text => {
    setInputValue(text);
  };
  const onFocusHandle = () => {
    setStartSearch(true);
  };
  const optionSelected = data => {
    setInputValue(data.tab);
    sendDataCallback(data.id);
    setStartSearch(false);
  };
  useEffect(() => {
    if (
      studentDashboardState.mentorBatches &&
      studentDashboardState.mentorBatches.length > 0
    ) {
      const id = studentDashboardState.mentorBatches[0].batch_id;
      onHandleChangeBatch(id);
    }
  }, []);
  useEffect(() => {
    if (studentDashboard) {
      setStudentSelectedLanguage(authState.profileData.current_language)(
        langDispatch
      );
    } else {
      storeMentorBatch(authState.profileData.current_language)(langDispatch);
    }
  }, [authState.profileData]);
  let searchOptions = tabsData;

  if (inputVal.length > 1) {
    searchOptions = tabsData.filter(list =>
      list.tab.toLowerCase().includes(inputVal.trim().toLowerCase())
    );
  }
  const mentorBatches = studentDashboardState.mentorBatches.map(i => {
    return {
      text: `${i.batch_language}-${i.batch_id}`,
      value: i.batch_id
    };
  });
  const onHandleChangeBatch = async id => {
    const curr = new Date(); // get current date
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    const last = first + 6; // last day is the first day + 6

    const firstday = moment(new Date(curr.setDate(first))).format("x");
    const lastday = moment(new Date(curr.setDate(last))).format("x");
    const selectedBatch = authState.profileData.all_languages.find(
      i => i.batch_id == id
    );
    storeMentorBatch(selectedBatch)(langDispatch);
    await getMentorStudentList(id)(dispatch);
    getMentorDashboardData(id, firstday, lastday)(dispatch);
  };
  const onChangeStudentBatch = value => {
    const selectedBatch = authState.profileData.all_languages.find(
      i => i.batch_id == value
    );
    setStudentSelectedLanguage(selectedBatch)(langDispatch);
  };

  const countryOptions = authState.profileData?.all_languages?.map(i => {
    return { key: i.code, value: i.batch_id, flag: i.flag, text: i.name };
  });

  return (
    <>
      <DesktopOnly>
        <div
          className={styles.base}
          style={{ backgroundColor: studentDashboard ? "#ecf8f8" : "#ffecd6" }}
        >
          <div className={styles.leftSection}>
            {studentDashboard ? (
              <div className={styles.flagSection}>
                {countryOptions?.length != 0 && (
                  <Dropdown
                    fluid
                    selection
                    value={languageState.setStudentSelectedLanguage?.batch_id}
                    options={countryOptions}
                    onChange={(e, data) => onChangeStudentBatch(data.value)}
                  />
                )}
              </div>
            ) : (
              <div className={styles.mentorBatchDetails}>
                {mentorBatches?.length != 0 && (
                  <Dropdown
                    className={styles.batchesDropDown}
                    fluid
                    selection
                    value={languageState.storedMentorBatch?.batch_id}
                    options={mentorBatches}
                    onChange={(e, data) => onHandleChangeBatch(data.value)}
                  />
                )}
              </div>
            )}
            <div className={styles.tabWrapper}>
              {tabsData.map((i, index) => (
                <div
                  className={styles.tabs}
                  key={index}
                  onClick={() => selectTab(i)}
                  style={{ backgroundColor: selectedTab == i.id && "#fbeedf" }}
                >
                  <div className={styles.tabIcon}>
                    <IconComponent
                      name={i.icon}
                      color={
                        selectedTab == i.id ? SELECTED_TAB_COLOR : "#2a2a2a"
                      }
                      fill={selectedTab == i.id}
                    />
                  </div>
                  <div className={styles.tabName}>{i.tab}</div>
                </div>
              ))}
            </div>
            {studentDashboard && (
              <div className={styles.footerBanner}>
                <div className={styles.footerText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className={styles.footerImg}>
                  <ImageComponent
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FtabFooterImage.png?alt=media&token=3f94b3bf-78a1-4788-a301-4c74d2777f1b"
                    }
                    alt="tremendo footer image dashboard"
                    width={"165px"}
                    height={"128px"}
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={styles.centerSection}
            style={{
              backgroundColor: studentDashboard ? "#fff6eb" : "#f8f7f6"
            }}
          >
            <div className={styles.searchHeader}>
              <div
                className={styles.lens}
                style={{
                  backgroundColor: studentDashboard ? "#ecf8f8" : "#f8f8f8"
                }}
              >
                <IconComponent
                  name={"lens"}
                  color={studentDashboard ? "#25908d" : "#3f4242"}
                />
              </div>
              <div className={styles.search}>
                <Input
                  placeholder={"What Are you looking for?"}
                  inputStyling={{
                    width: "100%",
                    fontSize: "13px",
                    backgroundColor: studentDashboard ? "#ecf8f8" : "#f8f8f8",
                    color: "#1b1c1c",
                    padding: "8px 15px"
                  }}
                  value={inputVal}
                  handleChange={text => onChangeSearch(text)}
                  onHandleFocus={() => onFocusHandle()}
                />
              </div>
              <div className={styles.dateSection}>{`${moment().format(
                "dddd"
              )}, ${moment().format("LL")}`}</div>
            </div>
            {startSearch && (
              <div className={styles.optionWrapper}>
                {searchOptions.length > 0 ? (
                  searchOptions.map((name, index) => (
                    <div
                      className={styles.searchOptions}
                      key={index}
                      onClick={() => optionSelected(name)}
                    >
                      {name.tab}
                    </div>
                  ))
                ) : (
                  <div className={styles.searchOptions}>No Result</div>
                )}
              </div>
            )}
            <div className={styles.childrenSection}>
              {tabsData[selectedTab - 1].component}
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.topHeader}>
              <div className={styles.profileWrapper}>
                <div className={styles.profileName}>{`Hi, ${
                  name.split(" ")[0]
                }`}</div>
              </div>
              <div className={styles.notification}>
                <IconComponent name="notification" color="#ff9000" />
              </div>
            </div>
            {studentDashboard
              ? studentDashboardState.studentUpcomingTasks?.length > 0 && (
                  <div className={styles.upcomingTaskSection}>
                    <div className={styles.upcomingTaskHeading}>
                      Upcoming Task
                    </div>
                    <div className={styles.upcomingTaskBox}>
                      {studentDashboardState.studentUpcomingTasks?.map(
                        (i, index) => (
                          <div className={styles.taskWrapper} key={index}>
                            <div className={styles.taskImage}></div>
                            <div className={styles.taskDetail}>
                              <div className={styles.taskName}>{i.title}</div>
                              <div className={styles.taskTime}>
                                {moment(i.start_date).format("LL")}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )
              : studentDashboardState.mentorUpcomingTask?.length > 0 && (
                  <div className={styles.upcomingTaskSection}>
                    <div className={styles.upcomingTaskHeading}>
                      Upcoming Task
                    </div>
                    <div className={styles.upcomingTaskBox}>
                      {studentDashboardState.mentorUpcomingTask?.map(
                        (i, index) => (
                          <div className={styles.taskWrapper} key={index}>
                            <div className={styles.taskImage}></div>
                            <div className={styles.taskDetail}>
                              <div className={styles.taskName}>{i.title}</div>
                              <div className={styles.taskTime}>
                                {moment(i.start_date).format("LL")}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
            <div className={styles.letsTalkSection}>
              <div className={styles.upcomingTaskHeading}>Let’s Talk</div>
              <div>
                <iframe
                  src="https://discord.com/widget?id=960554347324907540&theme=dark"
                  width={"100%"}
                  height="500"
                  allowtransparency="true"
                  frameBorder={"0"}
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                ></iframe>
              </div>
              {/* <div className={styles.upcomingTaskBox}>
                <div className={styles.chatBoxWrapper}>
                  <div className={styles.chatNameAndImgWrapper}>
                    <div className={styles.userImg}>
                      <Image
                        src={"https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41"}
                        circular
                        alt="user-image"
                        height={"20px"}
                        width={"20px"}
                      />
                    </div>
                    <div className={styles.userName}>Mirza</div>
                    <div className={styles.messageTime}>1 min</div>
                  </div>
                  <div className={styles.chatMessageBox}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
                <div className={styles.chatBoxWrapper}>
                  <div className={styles.chatNameAndImgWrapper}>
                    <div className={styles.userImg}>
                      <Image
                        src={"https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41"}
                        circular
                        alt="user-image"
                        height={"20px"}
                        width={"20px"}
                      />
                    </div>
                    <div className={styles.userName}>John</div>
                    <div className={styles.messageTime}>1 min</div>
                  </div>
                  <div className={styles.chatMessageBox}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
                <div className={styles.chatBoxWrapper}>
                  <div className={styles.chatNameAndImgWrapper}>
                    <div className={styles.userImg}>
                      <Image
                        src={"https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41"}
                        circular
                        alt="user-image"
                        height={"20px"}
                        width={"20px"}
                      />
                    </div>
                    <div className={styles.userName}>Andrew</div>
                    <div className={styles.messageTime}>1 min</div>
                  </div>
                  <div className={styles.chatMessageBox}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
                <div className={styles.chatInputWrapper}>
                  <div className={styles.chatIcons}>
                    <IconComponent name={"chatIcon"} />
                  </div>
                  <div className={styles.search}>
                    <Input
                      placeholder={"Write a message"}
                      inputStyling={{
                        width: "100%",
                        fontSize: "10px",
                        backgroundColor: "#fafafa",
                        color: "#1b1c1c",
                        padding: "8px 15px"
                      }}
                    />
                  </div>
                  <div className={styles.chatIcons}>
                    <IconComponent name={"sendIcon"} />
                  </div>
                </div>
              </div> */}
            </div>
            <div className={styles.letsTalkSection}>
              <div className={styles.upcomingTaskHeading}>
                {studentDashboard ? "Batch Mates" : "Students"}
              </div>
              <div style={{ marginTop: "10px" }}>
                {studentDashboard
                  ? studentDashboardState.studentBatchMates?.map(i => (
                      <Label key={i.name} as="a">
                        {i.name}
                      </Label>
                    ))
                  : studentDashboardState.mentorStudentList.map(i => (
                      <Label key={i.student_batch_id} as="a">
                        {i.user_name}
                      </Label>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </DesktopOnly>
      <MobileOnly>
        <div className={styles.mobileBase}>
          <div className={styles.navbarMobile}>
            <div>
              <Icon
                name="list"
                size="large"
                onClick={() => setVisible(!visible)}
              />
            </div>
            <div className={styles.search}>
              <Input
                placeholder={"What Are you looking for?"}
                inputStyling={{
                  width: "100%",
                  fontSize: "13px",
                  backgroundColor: studentDashboard ? "#ecf8f8" : "#f8f8f8",
                  color: "#1b1c1c",
                  padding: "8px 15px"
                }}
                value={inputVal}
                handleChange={text => onChangeSearch(text)}
                onHandleFocus={() => onFocusHandle()}
              />
            </div>
            <div className={styles.profileName}>{`Hi, ${
              name.split(" ")[0]
            }`}</div>
          </div>
          {startSearch && (
            <div className={styles.optionWrapper}>
              {searchOptions.length > 0 ? (
                searchOptions.map((name, index) => (
                  <div
                    className={styles.searchOptions}
                    key={index}
                    onClick={() => optionSelected(name)}
                  >
                    {name.tab}
                  </div>
                ))
              ) : (
                <div className={styles.searchOptions}>No Result</div>
              )}
            </div>
          )}
          <div>
            <Sidebar.Pushable as={Segment} className={styles.pusherSection}>
              <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width="thin"
                style={{
                  backgroundColor: studentDashboard
                    ? "rgb(236, 248, 248)"
                    : "#ffecd6"
                }}
              >
                {tabsData.map((i, index) => (
                  <div key={index} onClick={() => selectTab(i)}>
                    <Menu.Item as="a">
                      <IconComponent
                        name={i.icon}
                        color={
                          selectedTab == i.id ? SELECTED_TAB_COLOR : "#2a2a2a"
                        }
                        fill={selectedTab == i.id}
                      />
                      <div>{i.tab}</div>
                    </Menu.Item>
                  </div>
                ))}
              </Sidebar>

              <Sidebar.Pusher dimmed={visible}>
                <Segment basic className={styles.segmentBasic}>
                  <div
                    style={{
                      backgroundColor: studentDashboard ? "#fff6eb" : "#f8f7f6"
                    }}
                  >
                    <div className={styles.childrenSection}>
                      {tabsData[selectedTab - 1].component}
                    </div>
                    <div className={styles.upcomingTaskSection}>
                      <div className={styles.upcomingTaskHeading}>
                        Upcoming Task
                      </div>
                      <div className={styles.upcomingTaskBox}>
                        {[1, 1, 1, 1].map((i, index) => (
                          <div className={styles.taskWrapper} key={index}>
                            <div className={styles.taskImage}></div>
                            <div className={styles.taskDetail}>
                              <div className={styles.taskName}>
                                Lorem Ipsum Lorem
                              </div>
                              <div className={styles.taskTime}>Time & Date</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </div>
      </MobileOnly>
      {startSearch && (
        <div
          className={styles.overlay}
          onClick={() => setStartSearch(!startSearch)}
        ></div>
      )}
    </>
  );
}
