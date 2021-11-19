import styles from "./Skeleton.module.css";
function Skeleton(props) {
  return (
    <div className={styles.base}>
      <div className={styles.overlay} />
      {props.children}
    </div>
  );
}

export default Skeleton;
