import type { IconType } from "react-icons";
import styles from "./Button.module.css";
type ButtonProps =
  | {
      text: string;
      type: "reset" | "submit" | "button";
      classWidth: string;
      icon?: IconType | "";
    } & React.HTMLAttributes<HTMLButtonElement>;
export function Button({
  text,
  type,
  classWidth,
  icon: Icon,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`${styles.button} ${styles[classWidth]}`}
    >
      {Icon && <Icon size={20}></Icon>} {text}
    </button>
  );
}
