import { IoMdClose } from "react-icons/io";
import styles from "./Modal.module.css";
type ModalProps = {
  children: React.ReactNode;
  title: string;
  active: boolean;
  typeActionName: string;
  formId?: string;
  onClose: () => void;
};
export function Modal({
  title,
  children,
  typeActionName,
  active,
  onClose,
  formId,
}: ModalProps) {
  return (
    <div className={`${styles.modal} ${!active ? styles.noActive : ""}`}>
      <div className={styles.headerModal}>
        <h3>{title}</h3>
        <IoMdClose size={30} onClick={onClose} />
      </div>
      <div className={styles.bodyModal}>{children}</div>
      <div className={styles.footerModal}>
        <button className={styles.buttonClose} onClick={onClose}>
          Fechar
        </button>
        <button type="submit" className={styles.buttonSumbit} form={formId}>
          {typeActionName}
        </button>
      </div>
    </div>
  );
}
