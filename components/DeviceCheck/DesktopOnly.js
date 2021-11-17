import React from "react";
import isMobile from "../../utils/userAgents";
export default class DesktopOnly extends React.Component {
  render() {
    return !isMobile() ? this.props.children : null;
  }
}
