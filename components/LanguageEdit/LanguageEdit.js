import styles from "./LanguageEdit.module.css";
import { useContext, useEffect, useState, useRef } from "react";
import { Dropdown, Image, Icon, Modal, Input, Button } from "semantic-ui-react";
import ButtonComponent from "../Button/Button";
import { GlobalContext } from "../../Context/Provider";
import { getLangaugeDetails } from "../../Context/Actions/Language/LanguageAction";
import PageLoader from "../Loader/PageLoader";
import jsCookie from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import axiosInstance from "../../utils/axiosInstance";
import { getLanguages } from "../../Context/Actions/Home/HomeAction";
import { storage } from "../../utils/firebase-config";

const EDIT = "Edit";
const ADD = "Add";

export default function LanguageEdit({}) {
  const fileFlagRef = useRef(null);
  const bannerDestopRef = useRef(null);
  const bannerMobileRef = useRef(null);
  const banner1Ref = useRef(null);
  const banner2Ref = useRef(null);
  const {
    homeState,
    languageState,
    languageDispatch: dispatch,
    homeDispatch: homeDispatch
  } = useContext(GlobalContext);
  const [feilds, setFeilds] = useState({});
  const [addLangFeilds, setAddLangFeilds] = useState({});
  const [openModal, setOpenModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadLoader, setUploadLoader] = useState("");
  const [selectedLangId, setSelectedLangId] = useState("");

  const details = languageState.getLanguageDetails;
  useEffect(() => {
    const id = homeState.getLanguage[0]?.languge_id;
    setSelectedLangId(id);
    getLangaugeDetails(id)(dispatch);
  }, []);
  useEffect(() => {
    setFieldsIntoState();
  }, [details]);
  const onChangeLanguage = data => {
    setSelectedLangId(data.value);
    getLangaugeDetails(data.value)(dispatch);
  };
  const setFieldsIntoState = () => {
    setFeilds({
      ...feilds,
      title: details.culture?.title,
      description: details.culture?.description
    });
  };
  const uploadFiles = (image, type) => {
    setUploadLoader(type);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      error => {
        setUploadLoader("");
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(type, "type");
            setUploadLoader("");
            setAddLangFeilds({ ...addLangFeilds, [type]: url });
          });
      }
    );
  };

  const onChangeLanguageFeild = (data, type) => {
    setAddLangFeilds({ ...addLangFeilds, [type]: data.value });
  };
  const newLanguages = homeState.getLanguage.map(lang => {
    return {
      text: lang.title,
      value: lang.languge_id
    };
  });
  const onEditLang = () => {
    setAddLangFeilds({
      ...details,
      lang_code: details.code,
      culture_title: details.culture.title,
      culture_description: details.culture.description,
      culture_banner1_title: details.culture.banners[0].title,
      culture_banner1_description: details.culture.banners[0].description,
      culture_banner1_image_url: details.culture.banners[0].image_url,
      culture_banner2_title: details.culture.banners[1].title,
      culture_banner2_description: details.culture.banners[1].description,
      culture_banner2_image_url: details.culture.banners[1].image_url
    });
    setOpenModal(EDIT);
  };
  const onCloseModal = () => {
    setOpenModal(null);
    setAddLangFeilds({});
  };

  const onAddLanguage = async () => {
    setLoading(true);
    const updatePayload = {
      access_token: jsCookie.get(COOKIE_TOKEN),
      language_id: addLangFeilds.languge_id,
      lang_code: addLangFeilds.lang_code,
      title: addLangFeilds.title,
      description: "description",
      flag_url: addLangFeilds.flag_url,
      welcome_text: addLangFeilds.welcome_text,
      banner_large: addLangFeilds.banner_large,
      banner_small: addLangFeilds.banner_small,
      culture_title: addLangFeilds.culture_title,
      culture_description: addLangFeilds.culture_description,
      culture_banner1_title: addLangFeilds.culture_banner1_title,
      culture_banner1_description: addLangFeilds.culture_banner1_description,
      culture_banner1_image_url: addLangFeilds.culture_banner1_image_url,
      culture_banner2_title: addLangFeilds.culture_banner2_title,
      culture_banner2_description: addLangFeilds.culture_banner2_description,
      culture_banner2_image_url: addLangFeilds.culture_banner2_image_url
    };
    if (openModal == ADD) {
      delete updatePayload.language_id;
      try {
        const response = await axiosInstance.post(
          `/addLanguages`,
          updatePayload
        );
        await getLanguages()(homeDispatch);
        setLoading(false);
        getLangaugeDetails(selectedLangId)(dispatch);
        onCloseModal();
      } catch (err) {
        setLoading(false);
        onCloseModal();
      }
    } else {
      try {
        const response = await axiosInstance.post(
          `/updateLanguageDetails`,
          updatePayload
        );
        await getLanguages()(homeDispatch);
        setLoading(false);
        getLangaugeDetails(selectedLangId)(dispatch);
        onCloseModal();
      } catch (err) {
        setLoading(false);
        onCloseModal();
      }
    }
  };

  const onDeleteLang = async () => {
    setLoading(true);
    const id = homeState.getLanguage[0]?.languge_id;
    try {
      const response = await axiosInstance.delete(
        `/deleteLanguage?access_token=${jsCookie.get(
          COOKIE_TOKEN
        )}&languageId=${selectedLangId}`
      );
      await getLanguages()(homeDispatch);
      setLoading(false);
      getLangaugeDetails(id)(dispatch);
      setSelectedLangId(id);
    } catch (err) {
      setLoading(false);
    }
  };
  const fileChangeFlagUrl = event => {
    uploadFiles(event.target.files[0], "flag_url");
  };
  const bannerLargeChange = event => {
    uploadFiles(event.target.files[0], "banner_large");
  };
  const bannerSmallChange = event => {
    uploadFiles(event.target.files[0], "banner_small");
  };
  const banner1OnChange = event => {
    uploadFiles(event.target.files[0], "culture_banner1_image_url");
  };
  const banner2OnChange = event => {
    uploadFiles(event.target.files[0], "culture_banner2_image_url");
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
                onChange={(e, data) => onChangeLanguageFeild(data, "title")}
                style={{ width: "100%" }}
                value={addLangFeilds.title}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Language Code"
                onChange={(e, data) => onChangeLanguageFeild(data, "lang_code")}
                style={{ width: "100%" }}
                value={addLangFeilds.lang_code}
              />
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Input
                placeholder="Flag Url"
                onChange={(e, data) => onChangeLanguageFeild(data, "flag_url")}
                style={{ width: "50%" }}
                value={addLangFeilds.flag_url}
              />
              <div>
                <Button
                  content="Choose File"
                  labelPosition="left"
                  icon="file"
                  disabled={uploadLoader ? true : false}
                  loading={uploadLoader == "flag_url"}
                  onClick={() => fileFlagRef.current.click()}
                />
                <input
                  ref={fileFlagRef}
                  type="file"
                  hidden
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={event => fileChangeFlagUrl(event)}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Welcome Text"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "welcome_text")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.welcome_text}
              />
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Input
                placeholder="Banner Image URL For Desktop"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "banner_large")
                }
                style={{ width: "50%" }}
                value={addLangFeilds.banner_large}
              />
              <div>
                <Button
                  content="Choose File"
                  labelPosition="left"
                  icon="file"
                  disabled={uploadLoader ? true : false}
                  loading={uploadLoader == "banner_large"}
                  onClick={() => bannerDestopRef.current.click()}
                />
                <input
                  ref={bannerDestopRef}
                  type="file"
                  hidden
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={event => bannerLargeChange(event)}
                />
              </div>
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Input
                placeholder="Banner Image URL For Mobile"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "banner_small")
                }
                style={{ width: "50%" }}
                value={addLangFeilds.banner_small}
              />
              <div>
                <Button
                  content="Choose File"
                  labelPosition="left"
                  icon="file"
                  disabled={uploadLoader ? true : false}
                  loading={uploadLoader == "banner_small"}
                  onClick={() => bannerMobileRef.current.click()}
                />
                <input
                  ref={bannerMobileRef}
                  type="file"
                  hidden
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={event => bannerSmallChange(event)}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Title"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_title")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.culture_title}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Description"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_description")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.culture_description}
              />
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Input
                placeholder="Banner 1 image URL"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_banner1_image_url")
                }
                style={{ width: "50%" }}
                value={addLangFeilds.culture_banner1_image_url}
              />
              <div>
                <Button
                  content="Choose File"
                  labelPosition="left"
                  icon="file"
                  disabled={uploadLoader ? true : false}
                  loading={uploadLoader == "culture_banner1_image_url"}
                  onClick={() => banner1Ref.current.click()}
                />
                <input
                  ref={banner1Ref}
                  type="file"
                  hidden
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={event => banner1OnChange(event)}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 1 Title"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_banner1_title")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.culture_banner1_title}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 1 Description"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_banner1_description")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.culture_banner1_description}
              />
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Input
                placeholder="Banner 2 image URL"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_banner2_image_url")
                }
                style={{ width: "50%" }}
                value={addLangFeilds.culture_banner2_image_url}
              />
              <div>
                <Button
                  content="Choose File"
                  labelPosition="left"
                  icon="file"
                  disabled={uploadLoader ? true : false}
                  loading={uploadLoader == "culture_banner2_image_url"}
                  onClick={() => banner2Ref.current.click()}
                />
                <input
                  ref={banner2Ref}
                  type="file"
                  hidden
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={event => banner2OnChange(event)}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 2 Title"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_banner2_title")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.culture_banner2_title}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Banner 2 Description"
                onChange={(e, data) =>
                  onChangeLanguageFeild(data, "culture_banner2_description")
                }
                style={{ width: "100%" }}
                value={addLangFeilds.culture_banner2_description}
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
            onClick={() => onAddLanguage()}
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
              defaultValue={newLanguages[0]?.value}
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
          {/* <div className={styles.overlay}>
            <div className={styles.uploadIcon}>
              <Icon name="cloud upload" size="huge" color="#fff" />
            </div>
          </div> */}
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
                {/* <div
                  className={styles.overlay}
                  style={{ borderRadius: "20px", opacity: "0.7" }}
                >
                  <div className={styles.uploadIcon}>
                    <Icon name="cloud upload" size="huge" />
                  </div>
                </div> */}
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
              loading={loading}
              border="none"
              onClick={() => onDeleteLang()}
            />
          </div>
        </div>
      </div>
      {openModal != null && openAddLanguageModal()}
    </>
  );
}
