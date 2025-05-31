import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

// Estende os atributos padrão e personaliza o tipo da prop "type"
type InputProps = {
  type: HTMLInputElement["type"];
  classWidth: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ classWidth, ...props }, ref) => {
    return (
      <input className={`${styles.input} ${classWidth}`} ref={ref} {...props} />
    );
  }
);
