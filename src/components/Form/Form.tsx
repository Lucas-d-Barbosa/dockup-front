import type { FormEventHandler, FormHTMLAttributes } from "react";
import styles from "./Form.module.css";
type FormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export function Form({ children, onSubmit, ...props }: FormProps) {
  return (
    <form className={styles.form} {...props} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
