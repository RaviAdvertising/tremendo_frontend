import ChatIcon from "../ChatIcon";
import CourseDetail from "../CourseDetail";
import DasboardIcon from "../DasboardIcon";
import Faq from "../Faq";
import Lens from "../Lens";
import MyResource from "../MyResource";
import Notification from "../Notification";
import Progress from "../Progress";
import RightArrow from "../RightArrow";
import sendIcon from "../sendIcon";
import Setting from "../Setting";
import TermAndCondition from "../TermAndCondition";

const iconTypes = {
  dashboardIcon: DasboardIcon,
  setting: Setting,
  notification: Notification,
  courseDetail: CourseDetail,
  myResource: MyResource,
  progress: Progress,
  faq: Faq,
  termAndCondition: TermAndCondition,
  lens: Lens,
  rightArrow: RightArrow,
  sendIcon: sendIcon,
  chatIcon: ChatIcon
};

const Icon = ({ name, ...props }) => {
  const SpecificIcon = iconTypes[name];
  return <SpecificIcon {...props} />;
};

export default Icon;
