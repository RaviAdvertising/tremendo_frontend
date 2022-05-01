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
            src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ffacebook_loginbtn.png?alt=media&token=f1710620-8316-4a3c-890c-da9fc1c81be1"
            alt="facebook login btn"
            height={props.height}
            width={props.width}
          />
        </div>
      )}
    />
  );
}
