import DasboardIcon from "../DasboardIcon";
import Notification from "../Notification";
import Setting from "../Setting";

const iconTypes = {
  dashboardIcon: DasboardIcon,
  setting: Setting,
  notification: Notification
};

const Icon = ({ name, ...props }) => {
  const SpecificIcon = iconTypes[name];
  return <SpecificIcon {...props} />;
};

export default Icon;
