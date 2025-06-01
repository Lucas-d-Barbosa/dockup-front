import { useState } from "react";
import styles from "./VericalMenu.module.css";
import logo from "../../assets/images/logo-sb.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiFillHome, AiOutlineFile, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserCircle, FaCog, FaQuestionCircle } from "react-icons/fa";
import { LinkMenu } from "../LinkMenu/LinkMenu";
import { LinkRouter } from "../LinkRouter/LinkRouter";
const buttonArrow = {
  right: <FiChevronRight size={25} />,
  left: <FiChevronLeft size={25} />,
};

export function VerticalMenu() {
  const [activeMenu, setActiveMenu] = useState(false);
  function handleActiveMenu() {
    setActiveMenu((prevState) => !prevState);
  }
  return (
    <nav className={`${styles.nav} ${activeMenu ? styles["active"] : ""}`}>
      <div className={styles.containerLogoButton}>
        <img src={logo} alt="" />

        <div
          className={`${styles.buttonContainer} ${
            activeMenu ? styles["active"] : ""
          }`}
        >
          <button onClick={handleActiveMenu}>
            {!activeMenu ? buttonArrow["right"] : buttonArrow["left"]}
          </button>
        </div>
      </div>

      {activeMenu && (
        <div className={styles.areaItems}>
          <ul>
            <LinkMenu>
              <AiFillHome style={{ marginRight: "8px" }} />

              <LinkRouter ref={"/"} text={"Home"}></LinkRouter>
            </LinkMenu>
            <LinkMenu>
              <AiOutlineFile style={{ marginRight: "8px" }} />
              <LinkRouter ref={"/documentos"} text={"Documentos"}></LinkRouter>
            </LinkMenu>

            <LinkMenu>
              <FaBook style={{ marginRight: "8px" }} />
              <LinkRouter ref={"/estantes"} text={"Estantes"}></LinkRouter>
            </LinkMenu>

            <LinkMenu>
              <FaUserCircle style={{ marginRight: "8px" }} />
              <LinkRouter ref={"/perfil"} text={"Perfil"}></LinkRouter>
            </LinkMenu>

            <LinkMenu>
              <FaCog style={{ marginRight: "8px" }} />
              <LinkRouter
                ref={"/configuracoes"}
                text={"Configurações"}
              ></LinkRouter>
            </LinkMenu>

            <LinkMenu>
              <FaQuestionCircle style={{ marginRight: "8px" }} />
              <LinkRouter ref={"/ajuda"} text={"Ajuda"}></LinkRouter>
            </LinkMenu>

            <LinkMenu>
              <AiOutlineLogout style={{ marginRight: "8px" }} />
              <LinkRouter ref={"/logout"} text={"Sair"}></LinkRouter>
            </LinkMenu>
          </ul>
        </div>
      )}
    </nav>
  );
}
