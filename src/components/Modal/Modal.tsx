import { IoMdClose } from "react-icons/io";
import styles from "./Modal.module.css";
type ModalProps = {
  children: React.ReactNode;
  title: string;
  active: boolean;
  onClose: () => void;
};
export function Modal({ title, children, active, onClose }: ModalProps) {
  return (
    <div className={`${styles.modal} ${!active ? styles.noActive : ""}`}>
      <div className={styles.headerModal}>
        <h3>{title}</h3>
        <IoMdClose size={30} onClick={onClose} />
      </div>
      <div className={styles.bodyModal}>{children}</div>
    </div>
  );
}
