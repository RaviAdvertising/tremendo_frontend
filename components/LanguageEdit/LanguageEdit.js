import styles from "./LanguageEdit.module.css";
import { useContext, useEffect } from "react";
import { Dropdown, Image, Icon } from "semantic-ui-react";
import Button from "../Button/Button";
import { GlobalContext } from "../../Context/Provider";
import { getLangaugeDetails } from "../../Context/Actions/Language/LanguageAction";
import PageLoader from "../Loader/PageLoader";

export default function LanguageEdit({}) {
  const { homeState, languageState, languageDispatch: dispatch } = useContext(
    GlobalContext
  );
  useEffect(() => {
    const id = homeState.getLanguage[0].id;
    getLangaugeDetails(id)(dispatch);
  }, []);
  const onChangeLanguage = data => {
    console.log(data.value);
    getLangaugeDetails(data.value)(dispatch);
  };
  const newLanguages = homeState.getLanguage.map(lang => {
    return {
      text: lang.title,
      value: lang.id
    };
  });
  console.log(languageState.getLanguageDetails);
  const details = languageState.getLanguageDetails;
  return (
    <>
      {languageState.getLangaugeDetailsLoading && <PageLoader />}
      <div className={styles.base}>
        <div className={styles.dropdownBtnWrapper}>
          <div className={styles.batchSelect}>
            <Dropdown
              className={styles.batchedDropdown}
              fluid
              selection
              defaultValue={newLanguages[0].value}
              options={newLanguages}
              onChange={(event, data) => onChangeLanguage(data)}
            />
          </div>
          <div className={styles.addNewbtn}>
            <Button
              label={"Add new"}
              height={39}
              backgroundColor={"#f7e903"}
              textStyle={{
                color: "#000",
                fontWeight: "bold",
                fontFamily: "Poppins",
                fontSize: "18px"
              }}
              border="none"
              onClick={() => console.log("start")}
            />
          </div>
        </div>
        <div className={styles.bannerWrapper}>
          <div className={styles.overlay}>
            <div className={styles.uploadIcon}>
              <Icon name="cloud upload" size="huge" color="#fff" />
            </div>
          </div>
          <Image src={details.banner_large} alt="banner" />
        </div>
        <div className={styles.title}>{details.culture?.title}</div>
        <div className={styles.description}>{details.culture?.description}</div>
        <div className={styles.boxWrapper}>
          {details.culture?.banners.map((i, index) => (
            <div
              className={styles.boxBase}
              style={{ backgroundColor: i.bg_color }}
              key={index}
            >
              <div className={styles.boxImage}>
                <div
                  className={styles.overlay}
                  style={{ borderRadius: "20px", opacity: "0.7" }}
                >
                  <div className={styles.uploadIcon}>
                    <Icon name="cloud upload" size="huge" />
                  </div>
                </div>
                <Image alt="" src={i.image_url} />
              </div>
              <div
                className={styles.boxHeading}
                style={{ color: i.text_color }}
              >
                {i.title}
              </div>
              <div
                className={styles.boxDescription}
                style={{ color: i.text_color }}
              >
                {i.description}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.saveAndDeleteBtn}>
          <div className={styles.saveBtn}>
            <Button
              label={"Save"}
              height={39}
              backgroundColor={"#f78f1e"}
              textStyle={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Poppins",
                fontSize: "18px"
              }}
              border="none"
              onClick={() => console.log("start")}
            />
          </div>
          <div className={styles.deleteBtn}>
            <Button
              label={"Delete"}
              height={39}
              backgroundColor={"#ffebd6"}
              textStyle={{
                color: "#ff8b0d",
                fontWeight: "bold",
                fontFamily: "Poppins",
                fontSize: "18px"
              }}
              border="none"
              onClick={() => console.log("start")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
