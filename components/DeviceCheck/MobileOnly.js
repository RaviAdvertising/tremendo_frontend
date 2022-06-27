import { useContext, useEffect, useState  } from "react";
import { DeviceContext } from "../../pages/_app";

export default function MobileOnly(props) {
  const { isMobileView } = useContext(DeviceContext);
   const [mobile, setMobile] = useState(true);
  useEffect(() => {
    checkDevice();
  }, []);
  const checkDevice = () => {
    if (window.innerWidth < 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  return isMobileView || mobile ? props.children : null;
}
