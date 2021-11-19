import Button from "../../components/Button/Button";
import Image from "next/image";
import ImageComponent from "../../components/Image/Image";
import styles from "../../styles/AboutUs.module.css";
import MobileOnly from "../../components/DeviceCheck/MobileOnly";
import DesktopOnly from "../../components/DeviceCheck/DesktopOnly";

export default function AboutUs() {
  const section1 = () => {
    return (
      <div className={styles.section1Base}>
        <div className={styles.image1}>
          <Image
            src={"/Images/about-us1.png"}
            width={"362px"}
            height={"230px"}
            alt="aboutus"
          />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.header1Wrapper}>
            <div className={styles.heading1}>Who we are</div>
            <div className={styles.borderStyling}></div>
          </div>
          <div className={styles.sectionText}>
            We are a team of highly skilled people fluent in different languages
            and with great teaching experience. We help people take over the
            professional world with an extra language skill that results in
            extremely beneficial career opportunities. With Tremendo you can
            learn new languages from anywhere in the world, under the guidance
            of the best mentors.
            <br />
            <br /> With an increase in Multinational companies in India,
            companies look forward to hiring people who know more than one
            language. So, with us you develop a skill which creates the best
            jobs for you and keep your resume on demand in the market.{" "}
          </div>
        </div>
      </div>
    );
  };
  const section2 = () => {
    return (
      <div className={styles.section1Base}>
        <MobileOnly>
          <div className={styles.image1}>
            <Image
              src={"/Images/about-us2.png"}
              width={"362px"}
              height={"230px"}
              alt="aboutus"
            />
          </div>
        </MobileOnly>
        <div className={styles.textWrapper}>
          <div className={styles.header1Wrapper}>
            <div className={styles.heading1}>What we do</div>
            <div className={styles.borderStyling}></div>
          </div>
          <div className={styles.sectionText}>
            We offer different language courses starting from the Beginner level
            so that one could learn from scratch for better understanding. We
            provide Digital Learning, Quick Growth, Experienced Mentors,
            Real-Time Feedback, making it easier for our students to get
            comfortable and improve their understanding.
            <br />
            <br />
            We provide virtual classes that are easier to attend from anywhere,
            following the batch time provided. The live classes ensure
            seriousness and help students to ask their queries and get instant
            solutions from the experts. We also provide digital study material
            making it convenient for you to study in your free time and grow
            enthusiastically in the competitive world. <br />
            <br />
            When you enroll in a class with us, you are also contributing
            towards saving the environment. As our program is completely
            digital, no paper is utilized, and you save on natural energy on the
            commute.
          </div>
        </div>
        <DesktopOnly>
          <div className={styles.image1}>
            <Image
              src={"/Images/about-us2.png"}
              width={"362px"}
              height={"230px"}
              alt="aboutus"
            />
          </div>
        </DesktopOnly>
      </div>
    );
  };
  const section3 = () => {
    return (
      <div className={styles.section1Base}>
        <div className={styles.image1}>
          <Image
            src={"/Images/about-us3.png"}
            width={"320px"}
            height={"280px"}
            alt="aboutus"
          />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.header1Wrapper}>
            <div className={styles.heading1}>Our mission</div>
            <div className={styles.borderStyling}></div>
          </div>
          <div className={styles.sectionText}>
            Everyone has got their reasons to learn languages. Some acquire
            knowledge because of their interest, and others want to master them
            to get better in the professional world. <br />
            <br />
            We at Tremendo come up with various ways to make learning new
            languages easy and fun so that you can follow your ambition and
            develop a new skill. <br />
            <br />
            Learning a language could also be beneficial for you to explore new
            cultures and traditions across the world. It also helps you
            re-imagine something which you were not able to understand in the
            first place. <br />
            <br />
            Knowing a second language not only enhances your profile
            professionally, but also introduces you to a variety of beliefs and
            traditions.
          </div>
        </div>
      </div>
    );
  };
  const section4 = () => {
    return (
      <div className={styles.section1Base}>
        <MobileOnly>
          <div className={styles.image1}>
            <Image
              src={"/Images/about-us4.png"}
              width={"320px"}
              height={"340px"}
              alt="aboutus"
            />
          </div>
        </MobileOnly>
        <div className={styles.textWrapper}>
          <div className={styles.header1Wrapper}>
            <div className={styles.heading1}>Our vision</div>
            <div className={styles.borderStyling}></div>
          </div>
          <div className={styles.sectionText}>
            When it comes to visualizing ourselves over the years, we see
            ourselves as a bridge connecting the world through languages.
            <br />
            <br />
            We want to motivate people to learn new languages and make it easier
            for everyone to communicate. The continents did not separate us- it
            only allowed us to widen our horizons and learn more. <br />
            <br />
            We aim at helping people become better in their lives personally and
            achieve their professional goals.
          </div>
        </div>
        <DesktopOnly>
          <div className={styles.image1}>
            <Image
              src={"/Images/about-us4.png"}
              width={"320px"}
              height={"340px"}
              alt="aboutus"
            />
          </div>
        </DesktopOnly>
      </div>
    );
  };
  return (
    <div className={styles.base}>
      <div className={styles.banner}></div>
      <div className={styles.sections}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <div className={styles.borderStyling}></div>
            <div className={styles.heading}>ABOUT US</div>
            <div className={styles.borderStyling}></div>
          </div>
          <div className={styles.text}>
            Learning new languages can be fun and exciting when you embark on
            that journey with Tremendo. A hybrid learning platform where you get
            live classes and get real-time feedback on your progress. We started
            Tremendo to build a bridge of communication across the world. To
            give every keen learner a platform where they can master any
            language at the comfort of their home. It also helps people achieve
            their career goals and enroll in colleges abroad. <br />
            <br />
            <br />A team of expert linguists and native speakers from all
            corners of the globe come together to teach different languages
            using the latest technologies and enjoyable and effective learning
            features so that you feel confident to start the conversation in any
            language. So welcome onboard amigos, and start your voyage to your
            favorite continent.
          </div>
          {section1()}
          {section2()}
          {section3()}
          {section4()}
        </div>
        <div>
          <ImageComponent
            src={"Images/learn_grow_lead.png"}
            paddingBottom={"15%"}
            alt={"banner logo"}
          />
        </div>
      </div>
    </div>
  );
}
