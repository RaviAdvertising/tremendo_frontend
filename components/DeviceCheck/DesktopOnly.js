import { useContext,useEffect, useState } from "react";
import { DeviceContext } from "../../pages/_app";

export default function DesktopOnly(props) {
  const { isMobileView } = useContext(DeviceContext);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    checkDevice();
  }, []);
  const checkDevice = () => {
    if (window.innerWidth < 1024) setMobile(true);
  };
  return !isMobileView&& !mobile ? props.children : null;
}
