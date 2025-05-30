import styles from "./Button.module.css";
type ButtonProps =
  | {
      text: string;
      type: "reset" | "submit" | "button";
    } & React.HTMLAttributes<HTMLButtonElement>;
export function Button({ text, type, ...props }: ButtonProps) {
  return (
    <button type={type} {...props} className={styles.button}>
      {text}
    </button>
  );
}
