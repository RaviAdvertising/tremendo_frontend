import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Image.module.css";
import VisibilityChild from "../VisibilityChild/VisibilityChild";

const LOADING = "loading";
const LOADED = "loaded";
const ERROR = "error";

const colors = ["#f4fff9", "#ffedf3", "#fff2df", "#e5f1ff", "#f0f7f1"];
export default class Image extends React.Component {
  state = {
    status: LOADING,
    colorIndex: Math.floor(Math.random() * 5),
    showFallbackImage: false
  };
  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.setState({
        status: LOADING
      });
    }
  }
  onLoad = () => {
    this.setState({ status: LOADED });
  };
  onError = () => {
    if (this.props.fallbackUrl && !this.state.showFallbackImage) {
      this.setState({ status: LOADING, showFallbackImage: true });
    } else {
      this.setState({ status: ERROR });
    }
  };
  style = loading => {
    return {
      transition: "opacity .5s linear",
      opacity: `${loading === LOADING ? 0 : 1}`
    };
  };
  render() {
    let { className, loadedClassName, loadingClassName, ...props } = this.props;
    className = `${className} ${
      this.state.status === LOADED ? loadedClassName : loadingClassName
    }`;
    return (
      <VisibilityChild
        minHeight={this.props.paddingBottom}
        backgroundColor={colors[this.state.colorIndex]}
      >
        <div
          className={styles.imgContainer}
          style={{
            paddingBottom: this.props.paddingBottom,
            background:
              this.props.showBackgroundColor && this.state.status !== LOADED
                ? colors[this.state.colorIndex]
                : "none"
          }}
        >
          {this.state.status === ERROR ? (
            <div />
          ) : (
            <img
              src={
                this.state.showFallbackImage
                  ? this.props.fallbackUrl
                  : this.props.src
              }
              style={this.style(this.state.status)}
              onClick={this.props.onClick}
              className={className}
              onLoad={this.onLoad}
              onError={this.onError}
              alt={this.props.alt ? this.props.alt : "Images"}
            />
          )}
        </div>
        {/* <div
          className={
            this.props.verticallyCenter
              ? styles.verticallyCenter
              : styles.fullWidth
          }
        >
          {this.state.imageStatus !== ERROR && this.props.src ? (
            <img
              className={
                this.props.verticallyCenter
                  ? styles.verticallyCenterBase
                  : styles.base
              }
              alt="No Image"
              src={this.props.src}
              onLoad={() => this.setState({ imageStatus: LOADED })}
              onError={() => this.setState({ imageStatus: ERROR })}
              style={Object.assign(
                {},
                { height: this.props.height },
                this.props.style
              )}
            />
          ) : (
            <div />
          )}
        </div> */}
      </VisibilityChild>
    );
  }
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  verticallyCenter: PropTypes.bool,
  style: PropTypes.object,
  paddingBottom: PropTypes.string,
  showBackgroundColor: PropTypes.bool
};
Image.defaultProps = {
  height: "auto",
  verticallyCenter: false,
  style: {},
  className: "",
  loadingClassName: "img-loading",
  loadedClassName: "img-loaded",
  paddingBottom: "100%",
  showBackgroundColor: true
};
