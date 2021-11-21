import styles from "./Input.module.css";

export default function Input(props) {
  const handleChange = event => {
    if (props.handleChange) props.handleChange(event.target.value);
  };
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={styles.inputStyling}
        style={props.inputStyling}
        onChange={event => handleChange(event)}
        autoComplete="off"
      />
    </div>
  );
}