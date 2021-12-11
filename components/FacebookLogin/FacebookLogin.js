import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Image from "next/image";
import styles from "../../styles/Login.module.css";

export default function FacebookLoginComponent(props) {
  return (
    <FacebookLogin
      appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
      callback={response => props.responseFacebook(response)}
      fields="name,email,picture"
      render={renderProps => (
        <div className={styles.socialBtn} onClick={() => renderProps.onClick()}>
          <Image
            src="/Images/facebook_loginbtn.png"
            alt="facebook login btn"
            height={props.height}
            width={props.width}
          />
        </div>
      )}
    />
  );
}
