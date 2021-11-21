import styles from "../../styles/Signup.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Input from "../../components/Input/Input";
import { Fragment } from "react";
import { Checkbox, Divider } from "semantic-ui-react";
import { LOGIN_PATH } from "../../utils/routes";

export default function Signup(props) {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Tremendo Sign up page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.base}>
        <div className={styles.header}>START YOUR JOURNEY TODAY</div>
        <div className={styles.wrapper}>
          <div className={styles.loginImage}>
            <Image
              src={`/Images/student_signup.png`}
              alt={"sign up page"}
              width={"1138px"}
              height={"897px"}
            />
          </div>
          <div className={styles.loginSection}>
            <div className={styles.heading}>Welcome!</div>
            <div className={styles.inputs}>
              <Input
                type="text"
                placeholder="Name"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  fontSize: "16px",
                  border: "1px solid grey",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
              />
            </div>
            <div className={styles.inputs}>
              <Input
                type="text"
                placeholder="DOB"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
              />
            </div>
            <div className={styles.inputs}>
              <Input
                type="text"
                placeholder="Phone number"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
              />
            </div>
            <div className={styles.inputs}>
              <Input
                type="text"
                placeholder="Email"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
              />
            </div>
            <div className={styles.inputs}>
              <Input
                type="password"
                placeholder="Password"
                inputStyling={{
                  height: "50px",
                  borderRadius: "43px",
                  border: "1px solid grey",
                  fontSize: "16px",
                  padding: "0 20px 0 30px",
                  width: "100%"
                }}
              />
            </div>
            <div
              className={styles.loginBtn}
              style={{
                backgroundColor: "#25908d"
              }}
            >
              Create Account
            </div>
            <Divider horizontal className={styles.dividerStyle}>
              or signup with
            </Divider>
            <div className={styles.socialLoginBtn}>
              <div className={styles.socialBtn}>
                <Image
                  src="/Images/google_loginbtn.png"
                  alt="google login btn"
                  height="60px"
                  width="200px"
                />
              </div>
              <div className={styles.socialBtn}>
                <Image
                  src="/Images/facebook_loginbtn.png"
                  alt="google login btn"
                  height="60px"
                  width="200px"
                />
              </div>
            </div>
            <div className={styles.bottomTexts}>
              <span className={styles.text1}>Already have an account? </span>
              <span
                className={styles.text2}
                onClick={() => router.push(LOGIN_PATH)}
              >
                Login Here
              </span>
            </div>
          </div>
        </div>
        <div className={styles.tandC}>
          <span className={styles.tandC1}>
            By signing in to Tremendo, I accept the{" "}
          </span>
          <span className={styles.tandC2} onClick={() => router.push("/")}>
            Terms and Conditions (T&Cs) and Privacy Policy.
          </span>
        </div>
      </div>
    </Fragment>
  );
}