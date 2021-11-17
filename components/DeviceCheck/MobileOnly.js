import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";

export default function MobileOnly(props) {
  const { isMobileView } = useContext(DeviceContext);
  return isMobileView ? props.children : null;
}
