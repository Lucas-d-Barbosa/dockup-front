import styles from "./Form.module.css";
type FormProps = {
  children: React.ReactNode;
};
export function Form({ children }: FormProps) {
  return <form className={styles.form}>{children}</form>;
}
