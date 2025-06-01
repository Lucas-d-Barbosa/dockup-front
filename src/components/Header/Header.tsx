import styles from "./Header.module.css";
import logo from "../../assets/images/logo-sb.png";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={logo}
          alt="Logo da Dockup"
          aria-label="Logo da Dockup"
          title="Logo da Dockup"
        />
      </div>
    </header>
  );
}
