import type { HTMLAttributes } from "react";
import styles from "./Input.module.css";
type InputProps =
  | {
      type: HTMLInputElement["type"];
    } & HTMLAttributes<HTMLInputElement>;
export function Input({ type, ...props }: InputProps) {
  return <input type={type} {...props} className={styles.input}></input>;
}
