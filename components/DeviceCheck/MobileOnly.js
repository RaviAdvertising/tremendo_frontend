import React from "react";
import isMobile from "../../utils/userAgents";
export default class MobileOnly extends React.Component {
  render() {
    return isMobile() ? this.props.children : null;
  }
}
