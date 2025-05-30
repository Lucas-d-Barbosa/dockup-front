import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

// Estende os atributos padrão e personaliza o tipo da prop "type"
type InputProps = {
  type: HTMLInputElement["type"];
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ type = "text", ...props }: InputProps) {
  return <input type={type} {...props} className={styles.input} />;
}
