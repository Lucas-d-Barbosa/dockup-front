import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

// Estende os atributos padrão e personaliza o tipo da prop "type"
type InputProps = {
  type: HTMLInputElement["type"];
  classWidth: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ type = "text", classWidth, ...props }: InputProps) {
  return (
    <input
      type={type}
      {...props}
      className={`${styles.input} ${styles[classWidth]}`}
    />
  );
}
