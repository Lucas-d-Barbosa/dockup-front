import { FaUserCircle } from "react-icons/fa";
import styles from "./Header.module.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
export function Header() {
  const user = useContext(UserContext);
  const name = user?.name ?? "amigo";
  return (
    <header className={styles.header}>
      <h2>{name}</h2>
      <FaUserCircle style={{ marginRight: "3rem" }} size={50} />
    </header>
  );
}
