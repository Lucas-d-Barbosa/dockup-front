import styles from "./Button.module.css";
type ButtonProps =
  | {
      text: string;
      type: "reset" | "submit" | "button";
      classWidth: string;
    } & React.HTMLAttributes<HTMLButtonElement>;
export function Button({ text, type, classWidth, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`${styles.button} ${styles[classWidth]}`}
    >
      {text}
    </button>
  );
}
