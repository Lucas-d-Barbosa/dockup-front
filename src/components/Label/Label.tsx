import styles from "./Label.module.css";
type LabelProps = {
  text: string;
  forID: string;
  classWidth: string;
};
export function Label({ text, forID, classWidth }: LabelProps) {
  return (
    <label
      htmlFor={forID}
      className={`${styles.label} ${styles[classWidth]}  `}
    >
      {text}
    </label>
  );
}
