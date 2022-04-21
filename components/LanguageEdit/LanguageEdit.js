import styles from "./LanguageEdit.module.css";
import { useContext, useEffect, useState } from "react";
import { Dropdown, Image, Icon, Modal, Input, Button } from "semantic-ui-react";
import ButtonComponent from "../Button/Button";
import { GlobalContext } from "../../Context/Provider";
import { getLangaugeDetails } from "../../Context/Actions/Language/LanguageAction";
import PageLoader from "../Loader/PageLoader";

const EDIT = "Edit";
const ADD = "Add";

export default function LanguageEdit({}) {
  const { homeState, languageState, languageDispatch: dispatch } = useContext(
    GlobalContext
  );
  const [feilds, setFeilds] = useState({});
  const [addLangFeilds, setAddLangFeilds] = useState({});
  const [openModal, setOpenModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const details = languageState.getLanguageDetails;
  useEffect(() => {
    const id = homeState.getLanguage[0].languge_id;
    getLangaugeDetails(id)(dispatch);
  }, []);
  useEffect(() => {
    setFieldsIntoState();
  }, [details]);
  const onChangeLanguage = data => {
    getLangaugeDetails(data.value)(dispatch);
  };
  const setFieldsIntoState = () => {
    setFeilds({
      ...feilds,
      title: details.culture?.title,
      description: details.culture?.description
    });
  };
  const handleChange = (data, type) => {
    setFeilds({
      ...feilds,
      [type]: data
    });
  };
  const onChangeLanguageFeild = (data, type) => {
    setAddLangFeilds({ ...addLangFeilds, [type]: data.value });
  };
  const newLanguages = homeState.getLanguage.map(lang => {
    return {
      text: lang.title,
      value: lang.id
    };
  });
  const onEditLang = () => {
    setAddLangFeilds({ ...details, ...details.culture });
    setOpenModal(EDIT);
  };
  const onCloseModal = () => {
    setOpenModal(null);
    setAddLangFeilds({});
  };

  const openAddLanguageModal = () => {
    return (
      <Modal
        onClose={() => onCloseModal()}
        open={openModal != null ? true : false}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>{`${openModal} Language`}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Language Name"
                onChange={(e, data) => onChangeLanguageFeild(data, "name")}
                style={{ width: "100%" }}
                value={addLangFeilds.title?.split(" ")[0]}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner Image URL"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "banner_large")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.banner_large}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Title"
                onChange={(e, data) => onChangeLanguageFeild(data, "title")}
                style={{ width: "100%" }}
                value={addLangFeilds.title}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Description"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "description")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.description}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 1 image URL"
                onChange={(e, data) => onChangeLanguageFeild(data, "password")}
                style={{ width: "100%" }}
                value={addLangFeilds.banners?.[0].image_url}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 1 Title"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "banners[0].title")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.banners?.[0].title}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 1 Description"
                onChange={(e, data) => onChangeLanguageFeild(data, "password")}
                style={{ width: "100%" }}
                value={addLangFeilds.banners?.[0].description}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 2 image URL"
                onChange={(e, data) => onChangeLanguageFeild(data, "password")}
                style={{ width: "100%" }}
                value={addLangFeilds.banners?.[1].image_url}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 2 Title"
                onChange={(e, data) => onChangeLanguageFeild(data, "password")}
                style={{ width: "100%" }}
                value={addLangFeilds.banners?.[1].title}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 2 Description"
                onChange={(e, data) => onChangeLanguageFeild(data, "password")}
                style={{ width: "100%" }}
                value={addLangFeilds.banners?.[1].description}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => onCloseModal()}>
            Close
          </Button>
          <Button
            content={`${openModal} Language`}
            labelPosition="right"
            icon="checkmark"
            onClick={() => onCreateMentor()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };
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
            <ButtonComponent
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
              onClick={() => setOpenModal(ADD)}
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
            <ButtonComponent
              label={"Edit"}
              height={39}
              backgroundColor={"#f78f1e"}
              textStyle={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Poppins",
                fontSize: "18px"
              }}
              border="none"
              onClick={() => onEditLang()}
            />
          </div>
          <div className={styles.deleteBtn}>
            <ButtonComponent
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
      {openModal != null && openAddLanguageModal()}
    </>
  );
}
