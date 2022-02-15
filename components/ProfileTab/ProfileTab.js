import { useRef } from "react";
import { Image } from "semantic-ui-react";
import Input from "../Input/Input";
import styles from "./ProfileTab.module.css";

export default function ProfileTab({}) {
  const inputFile = useRef(null);
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
  const onClick = e => {
    inputFile.current.click();
  };
  return (
    <div className={styles.base}>
      <div className={styles.profileBox}>
        <div className={styles.headingProgressWrapper}>
          <div className={styles.heading}>Profile Details</div>
          <div className={styles.progress}>
            <div className={styles.progressStrip}>
              <div className={styles.status} style={{ width: "80%" }}></div>
            </div>
            <div className={styles.progressTitle}>Profile updated: 80%</div>
          </div>
        </div>
        <div className={styles.upperSection}>
          <div className={styles.profileImage}>
            <div>
              <Image
                src={"/Images/blank_profile.png"}
                circular
                alt="profiletab_rocket"
                width={"80px"}
                height={"80px"}
              />
            </div>
            <div>
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />
              <div className={styles.pictureChange} onClick={onClick}>
                Change Picture
              </div>
            </div>
          </div>
          <div className={styles.namesWrapper}>
            <div className={styles.profileName}>
              <div className={styles.title}>Profile Name:</div>
              <div className={styles.nameInput}>
                {customInput({
                  placeholder: "Select",
                  value: "Ankit",
                  disabled: true
                })}
              </div>
            </div>
            <div className={styles.profileName}>
              <div className={styles.title}>Batch No.</div>
              <div className={styles.nameInput}>
                {customInput({
                  placeholder: "Select",
                  value: "0032",
                  disabled: true
                })}
              </div>
            </div>
            <div className={styles.lastUpdatedBy}>
              <div className={styles.title}>Last Updated By:</div>
              <div className={styles.lastUpdateDate}>08.02.2022</div>
            </div>
          </div>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.personalInfoHeading}>Personal Information</div>
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
                {customInput({
                  placeholder: "00-00-0000*"
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Gender*</div>
              <div>
                {customSelect({
                  placeholder: "Last Name*",
                  options: [{ name: "Male" }, { name: "Female" }]
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
                  options: [{ name: "Male" }, { name: "Female" }]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>State*</div>
              <div>
                {customSelect({
                  options: [{ name: "Male" }, { name: "Female" }]
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
              <div className={styles.inputGeneralTitle}>Email</div>
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
          <div className={styles.personalInfoHeading}>Qualification</div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>University</div>
              <div>
                {customSelect({
                  options: [{ name: "Male" }, { name: "Female" }]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Degree</div>
              <div>
                {customSelect({
                  options: [{ name: "Male" }, { name: "Female" }]
                })}
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.firstName}>
              <div className={styles.inputGeneralTitle}>Stream</div>
              <div>
                {customSelect({
                  options: [{ name: "Male" }, { name: "Female" }]
                })}
              </div>
            </div>
            <div className={styles.lastName}>
              <div className={styles.inputGeneralTitle}>Year</div>
              <div>
                {customSelect({
                  options: [{ name: "Male" }, { name: "Female" }]
                })}
              </div>
            </div>
          </div>
        </div>
        {/* {customSelect({ placeholder: "Select" })} */}
      </div>
      <div className={styles.imageWrapper}>
        <Image src={"/Images/profiletab_rocket.png"} alt="profiletab_rocket" />
      </div>
    </div>
  );
}
