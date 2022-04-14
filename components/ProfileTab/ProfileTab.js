import { useState, useContext, useEffect } from "react";
import { Image, Icon } from "semantic-ui-react";
import {
  COOKIE_TOKEN,
  EMAIL_REGULAR_EXPRESSION,
  LOGIN_STUDENT_TAB,
  USER_DETAILS
} from "../../utils/constants";
import Input from "../Input/Input";
import styles from "./ProfileTab.module.css";
import DatePicker from "react-datepicker";
import DesktopOnly from "../DeviceCheck/DesktopOnly";
import { country_list } from "../../utils/countriesList";
import { GlobalContext } from "../../Context/Provider";
import { DeviceContext } from "../../pages/_app";
import moment from "moment";
import Button from "../Button/Button";
import phone from "phone";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { getUserProfile } from "../../Context/Actions/Auth/AuthAction";
import {
  updateMentorProfile,
  UPDATE_PROFILE_DATA_SUCCESS
} from "../../Context/Actions/Dashboard/DashboardAction";
import StudentDashboardSkelton from "../Dashboard/StudentDashboardSkelton";

export default function ProfileTab({}) {
  const [fields, setFields] = useState({
    university: "",
    passout_year: "",
    stream: "",
    degree: "",
    country: "India"
  });
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState({ preview: "", raw: "" });
  const {
    authState,
    studentDashboardState,
    studentDashboardDispatch: dispatch,
    authDispatch: dispatchAuth
  } = useContext(GlobalContext);

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

  useEffect(() => {
    updateFieldsValue();
  }, []);

  const updateFieldsValue = async () => {
    const userUpdatedData = await getUserProfile(LOGIN_STUDENT_TAB)(
      dispatchAuth
    );
    const profileDetails = userUpdatedData.data.user_data;

    setFields({ ...fields, ...profileDetails });
  };

  const onChangeData = (value, type) => {
    setFields({ ...fields, [type]: value });
    setErrors({});
  };
  const handleChangeImage = e => {
    console.log(e.target.files);
    if (e.target.files.length) {
      setFields({ ...fields, avatar: URL.createObjectURL(e.target.files[0]) });
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const updateProfile = async () => {
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
      const payload = { ...fields };
      payload.access_token = Cookies.get(COOKIE_TOKEN);
      const response = await updateMentorProfile(payload)(dispatch);
      if (response.type == UPDATE_PROFILE_DATA_SUCCESS) {
        toast.success("Profile Updated Successfully", {
          theme: "colored"
        });
        const userUpdatedData = await getUserProfile(LOGIN_STUDENT_TAB)(
          dispatchAuth
        );

        setFields(userUpdatedData.data.user_data);
      } else {
        toast.error("Something Went Wrong", {
          theme: "colored"
        });
      }
    }
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

  const profileDetails = authState.profileData.user_data;
  const selectedCountry = country_list.find(i => i.name == fields.country);

  if (authState.profileDataLoading) {
    return <StudentDashboardSkelton />;
  }
  return (
    <div className={styles.base}>
      <div className={styles.profileBox}>
        <div className={styles.headingProgressWrapper}>
          <div className={styles.heading}>Profile Details</div>
          {profileDetails?.profile_completed && (
            <div className={styles.progress}>
              <div className={styles.progressStrip}>
                <div
                  className={styles.status}
                  style={{ width: `${profileDetails.profile_completed}%` }}
                ></div>
              </div>
              <div
                className={styles.progressTitle}
              >{`Profile updated: ${profileDetails.profile_completed}%`}</div>
            </div>
          )}
        </div>
        <div className={styles.upperSection}>
          <div style={{ width: "22%" }}>
            <label htmlFor="upload-button">
              <div className={styles.profileImage}>
                <Image
                  src={
                    fields.avatar ? fields.avatar : "/Images/blank_profile.png"
                  }
                  circular
                  alt="profiletab_rocket"
                  width={"80px"}
                  height={"80px"}
                />
                <div className={styles.pictureChange}>Change Picture</div>
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

          <div className={styles.namesWrapper}>
            <div className={styles.profileName}>
              <div className={styles.title}>Profile Name:</div>
              <div className={styles.nameInput}>
                {customInput({
                  placeholder: "Select",
                  value: profileDetails?.profile_name,
                  disabled: true
                })}
              </div>
            </div>
            <div className={styles.profileName}>
              <div className={styles.title}>Student Id</div>
              <div className={styles.nameInput}>
                {customInput({
                  placeholder: "Select",
                  value: profileDetails?.user_code,
                  disabled: true
                })}
              </div>
            </div>
            <div className={styles.lastUpdatedBy}>
              <div className={styles.title}>Last Updated By:</div>
              <div className={styles.lastUpdateDate}>
                {moment(profileDetails?.updated_at).format("DD.MM.YYYY")}
              </div>
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
                  selected={fields.dob ? moment(fields.dob)._d : ""}
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
                  showError: errors["email"],
                  disabled: true
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
          <div className={styles.personalInfoHeading}>Qualification</div>
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
                  value: fields.passout_year,
                  handleChange: text => onChangeData(text, "passout_year"),
                  type: "number"
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.saveBtn}>
          <Button
            label={"Save Profile"}
            height={41}
            borderRadius={20}
            backgroundColor="#fa9116"
            textStyle={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Montserrat",
              fontSize: "16px"
            }}
            loading={studentDashboardState.profileUpdateLoading}
            border="none"
            onClick={() => updateProfile()}
          />
        </div>
      </div>
      <DesktopOnly>
        <div className={styles.imageWrapper}>
          <Image
            src={"/Images/profiletab_rocket.png"}
            alt="profiletab_rocket"
          />
        </div>
      </DesktopOnly>
    </div>
  );
}
