import React, { useState, useRef } from "react";
import { Image, Icon } from "semantic-ui-react";
import styles from "./MentorProfile.module.css";
import Input from "../Input/Input";
import DatePicker from "react-datepicker";
import Button from "../Button/Button";
import { useContext } from "react";
import { DeviceContext } from "../../pages/_app";

export default function MentorProfile() {
  const inputFile = useRef(null);
  const { isMobileView } = useContext(DeviceContext);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState({ preview: "", raw: "" });
  const customInput = ({ placeholder, value, disabled }) => {
    return (
      <Input
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        //handleChange={text => props.handleChange(text)}
        inputStyling={{
          width: "100%",
          fontSize: "12px",
          color: "#66666d",
          border: "1px solid #cecedc",
          height: "31px",
          paddingLeft: "8px",
          fontFamily: "Poppins",
          backgroundColor: "#f8f8fa"
        }}
      />
    );
  };
  const handleChange = (type, value) => {
    setFields({ ...fields, [type]: value });
    setErrors({});
  };
  const onClick = e => {
    inputFile.current.click();
  };
  const customSelect = ({ placeholder, options }) => {
    return (
      <select className={styles.selectStyling} placeholder={placeholder}>
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
                  src={"/Images/blank_profile.png"}
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
          <div className={styles.mentorName}>Ekta Singh</div>
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
                  placeholder: "First Name*"
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Last Name*</div>
              <div>
                {customInput({
                  placeholder: "Last Name*"
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>DOB*</div>
              <div>
                <DatePicker
                  selected={fields.dob}
                  onChange={date => handleChange("dob", date)}
                  customInput={<DateInput />}
                  dateFormat="MMMM d, yyyy"
                  maxDate={new Date()}
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
                  placeholder: "Last Name*",
                  options: [
                    { name: "Male" },
                    { name: "Female" },
                    { name: "Others" }
                  ]
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
                  options: [{ name: "India" }, { name: "America" }]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>State*</div>
              <div>
                {customInput({
                  placeholder: "State"
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Mobile No*</div>
              <div>
                {customInput({
                  placeholder: "+91"
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Email*</div>
              <div>
                {customInput({
                  placeholder: "@"
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Father Name*</div>
              <div>
                {customInput({
                  placeholder: ""
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Mother Name*</div>
              <div>
                {customInput({
                  placeholder: ""
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
                  placeholder: ""
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Degree</div>
              <div>
                {customInput({
                  placeholder: ""
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Stream</div>
              <div>
                {customInput({
                  placeholder: ""
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Year</div>
              <div>
                {customInput({
                  placeholder: ""
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
          onClick={() => console.log("here")}
        />
      </div>
    </div>
  );
}
