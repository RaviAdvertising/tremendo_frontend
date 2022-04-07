import React, { useState, useRef, useEffect } from "react";
import { Image, Icon } from "semantic-ui-react";
import styles from "./MentorProfile.module.css";
import Input from "../Input/Input";
import DatePicker from "react-datepicker";
import Button from "../Button/Button";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";
import { GlobalContext } from "../../Context/Provider";
import moment from "moment";
import { country_list } from "../../utils/countriesList";
import { phone } from "phone";
import { EMAIL_REGULAR_EXPRESSION } from "../../utils/constants";

export default function MentorProfile() {
  const inputFile = useRef(null);
  const { isMobileView } = useContext(DeviceContext);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState({ preview: "", raw: "" });
  const { authState } = useContext(GlobalContext);
  const customInput = ({
    placeholder,
    value,
    disabled,
    handleChange,
    showError,
    type = "text"
  }) => {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        handleChange={text => handleChange(text)}
        inputStyling={{
          width: "100%",
          fontSize: "12px",
          color: "#66666d",
          border: showError ? "2px solid red" : "1px solid #cecedc",
          height: "31px",
          paddingLeft: "8px",
          fontFamily: "Poppins",
          backgroundColor: "#f8f8fa"
        }}
      />
    );
  };
  useEffect(() => {
    updateFieldsValue();
  }, []);

  const updateFieldsValue = () => {
    const profileDetails = authState.profileData.user_data;
    setFields(profileDetails);
  };

  const onChangeData = (value, type) => {
    setFields({ ...fields, [type]: value });
    setErrors({});
  };

  const onClick = e => {
    inputFile.current.click();
  };

  const customSelect = ({
    placeholder,
    options,
    value,
    handleChange,
    showError
  }) => {
    return (
      <select
        className={styles.selectStyling}
        placeholder={placeholder}
        value={value}
        onChange={event => handleChange(event.target.value)}
        style={{ border: showError ? "2px solid red" : "1px solid #cecedc" }}
      >
        <option value={0}>Select</option>
        {options.map((i, index) => (
          <option value={i.name} key={index}>
            {i.name}
          </option>
        ))}
      </select>
    );
  };

  const DateInput = ({ value, onClick }) => {
    return (
      <button
        className={styles.dateInput}
        style={{
          width: "100%",
          fontSize: "12px",
          color: "#66666d",
          border: "1px solid #cecedc",
          height: "31px",
          paddingLeft: "8px",
          fontFamily: "Poppins",
          backgroundColor: "#f8f8fa",
          textAlign: "left"
        }}
        onClick={onClick}
      >
        {value ? value : "DOB"}
      </button>
    );
  };

  const handleChangeImage = e => {
    console.log(e.target.files);
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };

  const updateProfile = () => {
    const selectedCountry = country_list.find(i => i.name === fields.country);
    let errors = { ...errors };
    if (!fields.first_name) {
      errors["first_name"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.last_name) {
      errors["last_name"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.dob) {
      errors["dob"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.gender) {
      errors["gender"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.country) {
      errors["country"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.city) {
      errors["city"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.phone_number) {
      errors["phone_number"] = true;
      setErrors(errors);
      return false;
    } else if (
      fields.phone_number &&
      !phone(fields.phone_number, { country: selectedCountry.country_code })
        .isValid
    ) {
      errors["phone_number"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.email) {
      errors["email"] = true;
      setErrors(errors);
      return false;
    } else if (fields.email && !EMAIL_REGULAR_EXPRESSION.test(fields.email)) {
      errors["email"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.father_name) {
      errors["father_name"] = true;
      setErrors(errors);
      return false;
    } else if (!fields.mother_name) {
      errors["mother_name"] = true;
      setErrors(errors);
      return false;
    } else {
      console.log("all good");
    }
  };
  const profileDetails = authState.profileData.user_data;
  const selectedCountry = country_list.find(i => i.name === fields.country);

  return (
    <div className={styles.base}>
      <div className={styles.profile_topImage}>
        <Image src={"/Images/profile_top.png"} alt="profiletab_rocket" />
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.leftSection}>
          <div>
            <label htmlFor="upload-button">
              <div className={styles.profileImage}>
                <Image
                  src={
                    image.preview ? image.preview : "/Images/blank_profile.png"
                  }
                  circular
                  alt="profiletab_rocket"
                  width={isMobileView ? "70px" : "150px"}
                  height={isMobileView ? "70px" : "150px"}
                />
                <div className={styles.cameraIcon}>
                  <Icon name="camera" />
                </div>
              </div>
            </label>
            <input
              type="file"
              id="upload-button"
              accept="image/x-png,image/gif,image/jpeg"
              style={{ display: "none" }}
              onChange={handleChangeImage}
            />
            <br />
          </div>
          <div className={styles.mentorName}>{profileDetails.profile_name}</div>
          <div className={styles.mentorCode}>Mentor code</div>
          <div className={styles.languagesHeading}>Languages</div>
          <div className={styles.languages}>
            English | German | French | Hindi
          </div>
          <div className={styles.languagesHeading}>Documents</div>
          <div className={styles.attachementWrapper}>
            <div>
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />

              <div className={styles.attachement} onClick={onClick}>
                <Icon name="attach" size="large" />
              </div>
            </div>
            <div>
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />

              <div className={styles.attachement} onClick={onClick}>
                <Icon name="attach" size="large" />
              </div>
            </div>
            <div>
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />

              <div className={styles.attachement} onClick={onClick}>
                <Icon name="attach" size="large" />
              </div>
            </div>
          </div>
          <div className={styles.languagesHeading}>Profile Details</div>
          <div className={styles.progress}>
            <div className={styles.progressStrip}>
              <div className={styles.status} style={{ width: "80%" }}></div>
            </div>
            <div className={styles.progressTitle}>Profile updated: 80%</div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.languagesHeading}>Personal Information</div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>First Name*</div>
              <div>
                {customInput({
                  placeholder: "First Name*",
                  value: fields.first_name,
                  handleChange: text => onChangeData(text, "first_name"),
                  showError: errors["first_name"]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Last Name*</div>
              <div>
                {customInput({
                  placeholder: "Last Name*",
                  value: fields.last_name,
                  handleChange: text => onChangeData(text, "last_name"),
                  showError: errors["last_name"]
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>DOB*</div>
              <div>
                <DatePicker
                  selected={moment(fields.dob)._d}
                  onChange={date => onChangeData(moment(date).format(), "dob")}
                  customInput={<DateInput />}
                  dateFormat="MMMM d, yyyy"
                  maxDate={moment().subtract(14, "years")._d}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Gender*</div>
              <div>
                {customSelect({
                  placeholder: "Gender*",
                  options: [
                    { name: "Male" },
                    { name: "Female" },
                    { name: "Others" }
                  ],
                  value: fields.gender,
                  handleChange: value => onChangeData(value, "gender"),
                  showError: errors["gender"]
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Country*</div>
              <div>
                {customSelect({
                  placeholder: "Last Name*",
                  options: country_list,
                  value: fields.country,
                  handleChange: value => onChangeData(value, "country"),
                  showError: errors["country"]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>State*</div>
              <div>
                {customInput({
                  placeholder: "State",
                  value: fields.city,
                  handleChange: text => onChangeData(text, "city"),
                  showError: errors["city"]
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Mobile No*</div>
              <div>
                {customInput({
                  placeholder: selectedCountry
                    ? selectedCountry.dial_code
                    : "+91",
                  value: fields.phone_number,
                  handleChange: text => onChangeData(text, "phone_number"),
                  showError: errors["phone_number"]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Email*</div>
              <div>
                {customInput({
                  placeholder: "@",
                  value: fields.email,
                  handleChange: text => onChangeData(text, "email"),
                  showError: errors["email"]
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Father Name*</div>
              <div>
                {customInput({
                  placeholder: "",
                  value: fields.father_name,
                  handleChange: text => onChangeData(text, "father_name"),
                  showError: errors["father_name"]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Mother Name*</div>
              <div>
                {customInput({
                  placeholder: "",
                  value: fields.mother_name,
                  handleChange: text => onChangeData(text, "mother_name"),
                  showError: errors["mother_name"]
                })}
              </div>
            </div>
          </div>
          <div className={styles.languagesHeading}>Qualification</div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>University</div>
              <div>
                {customInput({
                  placeholder: "",
                  value: fields.university,
                  handleChange: text => onChangeData(text, "university")
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Degree</div>
              <div>
                {customInput({
                  placeholder: "",
                  value: fields.degree,
                  handleChange: text => onChangeData(text, "degree")
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Stream</div>
              <div>
                {customInput({
                  placeholder: "",
                  value: fields.stream,
                  handleChange: text => onChangeData(text, "stream")
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Year</div>
              <div>
                {customInput({
                  placeholder: "",
                  value: fields.year,
                  handleChange: text => onChangeData(text, "year"),
                  type: "number"
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_bottomImage}>
        <Image src={"/Images/profile_bottom.png"} alt="profiletab_rocket" />
      </div>
      <div className={styles.saveBtn}>
        <Button
          label={"Save Profile"}
          height={41}
          borderRadius={20}
          backgroundColor="#1e768d"
          textStyle={{
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "Montserrat",
            fontSize: "16px"
          }}
          border="none"
          onClick={() => updateProfile()}
        />
      </div>
    </div>
  );
}
